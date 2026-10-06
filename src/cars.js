// Cars in the staff car park. You can smash their windows (alarm), break in and hotwire the driver's
// door (E), then drive them around — through the car park, up the ramp, and straight into the ED if you
// like. Cartoon slapstick: nobody is hurt, they just get launched and shout.
import * as THREE from 'three';
import { addStatic, removeStatic, collideCircle, zoneAtWorld } from './map.js';
import { mat, textCanvas } from './world.js';
import { sfx } from './audio.js';

const pick = (a) => a[Math.floor(Math.random() * a.length)];

// Body styles. Profile coordinates are (u = along the car, front is -u; y = height). Units are metres.
const STYLES = {
  hatch: { L: 3.95, W: 1.78, r: 0.33, wb: 1.25, belt: 0.92, roof: 1.46, wf: -0.85, rf: -0.15, rr: 1.35, wr: 1.78, nose: 0.78, tail: 0.98 },
  sedan: { L: 4.6, W: 1.82, r: 0.34, wb: 1.4, belt: 0.92, roof: 1.42, wf: -0.85, rf: -0.15, rr: 0.95, wr: 1.55, nose: 0.8, tail: 0.94 },
  suv: { L: 4.65, W: 1.94, r: 0.42, wb: 1.42, belt: 1.12, roof: 1.82, wf: -1.05, rf: -0.45, rr: 2.0, wr: 2.2, nose: 1.02, tail: 1.18 },
  ute: { L: 5.0, W: 1.9, r: 0.4, wb: 1.6, belt: 1.08, roof: 1.78, wf: -1.0, rf: -0.4, rr: 0.32, wr: 0.38, nose: 1.0, tail: 1.08, tray: true },
  van: { L: 5.4, W: 2.02, r: 0.4, wb: 1.75, belt: 1.15, roof: 2.45, wf: -1.75, rf: -1.25, rr: 2.62, wr: 2.66, nose: 1.0, tail: 2.38, box: true },
};

let glassMat, crackMat;
function glassMats() {
  if (glassMat) return;
  glassMat = new THREE.MeshPhongMaterial({ color: '#16222c', specular: '#9fb6c8', shininess: 90, transparent: true, opacity: 0.78, side: THREE.DoubleSide });
  // Crazed safety glass: white crack lines over a lighter, see-through pane with a hole punched in it.
  const c = document.createElement('canvas'); c.width = c.height = 256;
  const g = c.getContext('2d');
  g.fillStyle = 'rgba(190,205,215,0.3)'; g.fillRect(0, 0, 256, 256);
  g.strokeStyle = 'rgba(255,255,255,0.8)'; g.lineWidth = 1.1;
  const cx = 110 + Math.random() * 40, cy = 110 + Math.random() * 40;
  for (let i = 0; i < 22; i++) {
    const a = (i / 22) * Math.PI * 2 + Math.random() * 0.2;
    g.beginPath(); g.moveTo(cx, cy);
    let x = cx, y = cy;
    for (let k = 0; k < 6; k++) { x += Math.cos(a + (Math.random() - 0.5) * 0.5) * 30; y += Math.sin(a + (Math.random() - 0.5) * 0.5) * 30; g.lineTo(x, y); }
    g.stroke();
  }
  for (let r = 18; r < 200; r += 22 + Math.random() * 14) { g.beginPath(); g.arc(cx, cy, r, 0, Math.PI * 2); g.stroke(); }
  g.clearRect(cx - 40, cy - 30, 80, 64);
  const t = new THREE.CanvasTexture(c);
  crackMat = new THREE.MeshLambertMaterial({ map: t, transparent: true, side: THREE.DoubleSide, depthWrite: false });
}

function plateTex(text, ambulance) {
  const c = document.createElement('canvas'); c.width = 256; c.height = 64;
  const g = c.getContext('2d');
  g.fillStyle = ambulance ? '#fff' : '#f4f1e4'; g.fillRect(0, 0, 256, 64);
  g.strokeStyle = '#222'; g.lineWidth = 4; g.strokeRect(3, 3, 250, 58);
  g.fillStyle = '#111'; g.font = 'bold 42px "Archivo Narrow", Arial, sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle';
  g.fillText(text, 128, 35);
  return new THREE.CanvasTexture(c);
}

function battenburg() {
  const c = document.createElement('canvas'); c.width = 256; c.height = 32;
  const g = c.getContext('2d');
  for (let i = 0; i < 16; i++) for (let j = 0; j < 2; j++) { g.fillStyle = (i + j) % 2 ? '#f6d21b' : '#1f8f4a'; g.fillRect(i * 16, j * 16, 16, 16); }
  const t = new THREE.CanvasTexture(c); t.wrapS = THREE.RepeatWrapping; t.repeat.set(2, 1);
  return t;
}

// Extrude a side profile across the car's width; maps profile u -> world z, centred on x.
function extrudeProfile(pts, width, bevel, material, arches) {
  const s = new THREE.Shape();
  s.moveTo(pts[0][0], pts[0][1]);
  for (let i = 1; i < pts.length; i++) {
    const p = pts[i];
    if (p === 'arch') { const a = arches.shift(); s.lineTo(a.c - a.r, a.y0); s.lineTo(a.c - a.r, a.cy); s.absarc(a.c, a.cy, a.r, Math.PI, 0, true); s.lineTo(a.c + a.r, a.y0); continue; }
    s.lineTo(p[0], p[1]);
  }
  s.closePath();
  const geo = new THREE.ExtrudeGeometry(s, { depth: width - bevel * 2, bevelEnabled: true, bevelThickness: bevel, bevelSize: bevel, bevelSegments: 3, curveSegments: 14 });
  geo.rotateY(-Math.PI / 2);
  geo.translate((width - bevel * 2) / 2, 0, 0);
  return new THREE.Mesh(geo, material);
}

function buildCar(d) {
  glassMats();
  const st = STYLES[d.style] || STYLES.sedan;
  const { L, W, r, wb, belt, roof, wf, rf, rr, wr, nose, tail } = st;
  const g = new THREE.Group();
  const paint = new THREE.MeshPhongMaterial({ color: d.color, specular: '#6a6a6a', shininess: 55 });
  const trim = mat('#1b1c1f');
  const chrome = new THREE.MeshPhongMaterial({ color: '#c9ced3', specular: '#ffffff', shininess: 100 });
  const add = (geo, m, x, y, z) => { const o = new THREE.Mesh(geo, m); o.position.set(x, y, z); g.add(o); return o; };
  const hl = L / 2;
  const clr = r * 0.62;
  const archR = r + 0.07;

  // Lower body with wheel arches cut out of the sills
  const body = [
    [-hl, clr + 0.18], [-hl + 0.12, clr], 'arch', 'arch', [hl - 0.12, clr], [hl, clr + 0.18],
    [hl + 0.02, tail - 0.14], [hl - 0.1, tail],
    st.box ? [wr, tail] : [Math.min(wr + 0.05, hl - 0.15), belt],
    [wf, belt], [-hl + 0.3, nose], [-hl + 0.02, nose - 0.16],
  ];
  if (st.box) body.splice(8, 1, [hl - 0.05, roof], [rf + 0.2, roof]); // tall box body up to the roof; cab in front
  const arches = [{ c: -wb, cy: r, r: archR, y0: clr }, { c: wb, cy: r, r: archR, y0: clr }];
  g.add(extrudeProfile(body, W, 0.06, paint, arches));

  // Cabin (glasshouse): slightly narrower than the body. Panes are laid on top.
  const cw = W - 0.2;
  const cabRear = st.box ? rf + 0.3 : wr;
  g.add(extrudeProfile([[wf, belt - 0.03], [rf, roof], [st.box ? rf + 0.3 : rr, roof], [cabRear, belt - 0.03]], cw, 0.05, paint, []));

  // Glass panes
  const panes = [];
  const sideOff = cw / 2 + 0.006;
  const sideShape = new THREE.Shape();
  const sRear = st.box ? rf + 0.3 : wr;
  const sRoofR = st.box ? rf + 0.3 : rr;
  sideShape.moveTo(wf + 0.12, belt + 0.04); sideShape.lineTo(rf + 0.06, roof - 0.07); sideShape.lineTo(sRoofR - 0.06, roof - 0.07); sideShape.lineTo(sRear - 0.12, belt + 0.04); sideShape.closePath();
  const sideGeo = new THREE.ShapeGeometry(sideShape); sideGeo.rotateY(-Math.PI / 2);
  for (const sx of [-1, 1]) { const m = new THREE.Mesh(sideGeo, glassMat); m.position.x = sx * sideOff; g.add(m); panes.push(m); }
  const slope = (u0, y0, u1, y1, side) => {
    const dz = u1 - u0, dy = y1 - y0, len = Math.hypot(dz, dy);
    let ny = dz / len, nz = -dy / len;
    if (Math.sign(nz) !== side) { ny = -ny; nz = -nz; }
    const m = new THREE.Mesh(new THREE.PlaneGeometry(cw - 0.16, len - 0.08), glassMat);
    m.position.set(0, (y0 + y1) / 2 + ny * 0.058, (u0 + u1) / 2 + nz * 0.058);
    m.rotation.x = Math.atan2(dz, dy);
    g.add(m); panes.push(m);
  };
  slope(wf, belt, rf, roof, -1);
  if (!st.box && wr - rr > 0.02) slope(wr, belt, rr, roof, 1);
  // B-pillars over the side glass
  if (!st.box) for (const sx of [-1, 1]) add(new THREE.BoxGeometry(0.03, roof - belt - 0.06, 0.09), trim, sx * (sideOff + 0.004), (belt + roof) / 2, (rf + rr) / 2 - 0.05);

  // Wheels: tyre, alloy rim, hub
  const tyreGeo = new THREE.CylinderGeometry(r, r, 0.26, 22); tyreGeo.rotateZ(Math.PI / 2);
  const rimGeo = new THREE.CylinderGeometry(r * 0.62, r * 0.62, 0.27, 18); rimGeo.rotateZ(Math.PI / 2);
  const spokeGeo = new THREE.BoxGeometry(0.02, r * 1.15, 0.06);
  const tyreMat = mat('#141416');
  const wheels = [];
  for (const sx of [-1, 1]) for (const sz of [-wb, wb]) {
    const wg = new THREE.Group(); wg.position.set(sx * (W / 2 - 0.16), r, sz);
    wg.add(new THREE.Mesh(tyreGeo, tyreMat));
    wg.add(new THREE.Mesh(rimGeo, chrome));
    for (let k = 0; k < 5; k++) { const sp = new THREE.Mesh(spokeGeo, trim); sp.position.x = sx * 0.13; sp.rotation.x = (k / 5) * Math.PI; wg.add(sp); }
    g.add(wg); wheels.push(wg);
  }

  // Bumpers, grille, sills
  add(new THREE.BoxGeometry(W - 0.04, 0.2, 0.18), trim, 0, clr + 0.16, -hl - 0.02);
  add(new THREE.BoxGeometry(W - 0.04, 0.2, 0.18), trim, 0, clr + 0.16, hl + 0.02);
  add(new THREE.BoxGeometry(W * 0.5, 0.16, 0.04), trim, 0, nose - 0.24, -hl - 0.06);
  for (const sx of [-1, 1]) add(new THREE.BoxGeometry(0.04, 0.1, 2 * wb - 2 * archR - 0.1), trim, sx * (W / 2 + 0.005), clr + 0.06, 0);

  // Lights
  const head = new THREE.MeshBasicMaterial({ color: '#fff6cf' });
  const tailM = new THREE.MeshBasicMaterial({ color: '#b3121b' });
  for (const sx of [-1, 1]) {
    add(new THREE.BoxGeometry(0.38, 0.13, 0.05), head, sx * (W / 2 - 0.28), nose - 0.2, -hl - 0.065);
    add(new THREE.BoxGeometry(0.3, 0.16, 0.05), tailM, sx * (W / 2 - 0.22), tail_y(st), hl + 0.085);
  }

  // Plates
  const pm = new THREE.MeshBasicMaterial({ map: plateTex(d.plate, d.ambulance) });
  const pf = add(new THREE.PlaneGeometry(0.52, 0.13), pm, 0, clr + 0.16, -hl - 0.115); pf.rotation.y = Math.PI;
  add(new THREE.PlaneGeometry(0.52, 0.13), pm, 0, clr + 0.38, hl + 0.095);

  // Mirrors and door handles
  for (const sx of [-1, 1]) {
    add(new THREE.BoxGeometry(0.14, 0.1, 0.07), paint, sx * (W / 2 + 0.06), belt + 0.05, wf + 0.18);
    add(new THREE.BoxGeometry(0.02, 0.03, 0.14), chrome, sx * (W / 2 + 0.01), belt - 0.1, wf + 0.55);
    if (!st.box && !st.tray) add(new THREE.BoxGeometry(0.02, 0.03, 0.14), chrome, sx * (W / 2 + 0.01), belt - 0.1, (rf + rr) / 2 + 0.25);
  }

  // Ute tray / ambulance livery + lightbar
  if (st.tray) add(new THREE.BoxGeometry(W - 0.24, 0.04, hl - rr - 0.25), mat('#222428'), 0, belt + 0.07, (rr + hl) / 2 + 0.05);
  let lightbar = null;
  if (st.box) {
    const bt = battenburg();
    const lm = new THREE.MeshBasicMaterial({ map: bt });
    for (const sx of [-1, 1]) { const p = add(new THREE.PlaneGeometry(hl - rf - 0.25, 0.32), lm, sx * (W / 2 + 0.012), belt - 0.05, (rf + hl) / 2 + 0.1); p.rotation.y = sx * Math.PI / 2; }
    const rb = new THREE.MeshBasicMaterial({ color: '#d0202a' }), bb = new THREE.MeshBasicMaterial({ color: '#1f4fe0' });
    lightbar = [add(new THREE.BoxGeometry(0.5, 0.12, 0.2), rb, -0.32, roof + 0.1, rf + 0.35), add(new THREE.BoxGeometry(0.5, 0.12, 0.2), bb, 0.32, roof + 0.1, rf + 0.35)];
    const tc = textCanvas('AMBULANCE', 512, 96, { bg: '#ffffff', fg: '#c4141c', font: 'bold 72px Arial' });
    const tm = new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(tc) });
    for (const sx of [-1, 1]) { const p = add(new THREE.PlaneGeometry(1.9, 0.36), tm, sx * (W / 2 + 0.012), belt + 0.55, (rf + hl) / 2 + 0.25); p.rotation.y = sx * Math.PI / 2; }
  }

  // Dashboard + steering wheel so the driver's view isn't empty
  add(new THREE.BoxGeometry(cw - 0.1, 0.12, 0.35), trim, 0, belt + 0.02, wf + 0.3);
  const sw = add(new THREE.TorusGeometry(0.17, 0.022, 8, 20), trim, 0.36, belt + 0.06, wf + 0.62); sw.rotation.x = -0.45;
  

  // Soft contact shadow
  const sh = new THREE.Mesh(new THREE.PlaneGeometry(W + 0.3, L + 0.3), new THREE.MeshBasicMaterial({ color: '#000', transparent: true, opacity: 0.35, depthWrite: false }));
  sh.rotation.x = -Math.PI / 2; sh.position.y = 0.012; g.add(sh);

  return { g, panes, head, wheels, lightbar, L, W, seatY: belt + 0.36, seatU: wf + 1.12 };
}
const tail_y = (st) => st.box ? st.belt : st.tail - 0.14;

export class Cars {
  constructor(G) {
    this.G = G;
    this.list = [];
    this.driving = null;
    const defs = [
      { x: 7, z: 33, style: 'hatch', color: '#8a1f2b', owner: 'a rusty hatchback', plate: 'RST 1' },
      { x: 11, z: 33, style: 'suv', color: '#1d1f24', owner: 'Dr Harrow\'s SUV', plate: 'ED CON' },
      { x: 15, z: 33, style: 'hatch', color: '#1f4fa8', owner: 'the surgical reg\'s hot hatch', plate: 'CUT 123' },
      { x: 19, z: 33, style: 'hatch', color: '#e8e2d4', owner: 'a nurse\'s little hatchback', plate: 'OBS 4U' },
      { x: 9, z: 39, style: 'suv', color: '#2a2d33', yaw: Math.PI, owner: 'the DMS\'s Range Rover', plate: 'KPI 1' },
      { x: 13, z: 39, style: 'ute', color: '#3b6b45', yaw: Math.PI, owner: 'Security\'s ute', plate: 'SEC 24' },
      { x: 17, z: 39, style: 'sedan', color: '#c9a21f', yaw: Math.PI, owner: 'a vintage sedan', plate: 'OLD 88' },
      { x: 23, z: 36, style: 'van', color: '#f4f4f0', owner: 'someone\'s ambulance (!)', plate: 'AMBO 9', ambulance: true },
    ];
    for (const d of defs) this.spawn(d);
  }

  spawn(d) {
    const built = buildCar(d);
    this.G.scene.add(built.g);
    const car = {
      ...built, pos: new THREE.Vector3(d.x, 0, d.z), yaw: d.yaw || 0, speed: 0,
      color: d.color, owner: d.owner, plate: d.plate, smashed: false, alarm: 0, static: null,
    };
    this.sync(car);
    this.park(car);
    this.list.push(car);
    return car;
  }

  park(car) {
    if (car.static) return;
    car.speed = 0;
    const along = Math.abs(Math.cos(car.yaw)) > 0.5; // long axis roughly on z
    const a = car.W / 2 + 0.05, b = car.L / 2 + 0.05;
    const hw = along ? a : b, hl = along ? b : a;
    car.static = addStatic(car.pos.x - hw, car.pos.z - hl, car.pos.x + hw, car.pos.z + hl, 1.1, 'car');
  }
  unpark(car) { if (car.static) { removeStatic(car.static); car.static = null; } }

  sync(car) { car.g.position.set(car.pos.x, 0, car.pos.z); car.g.rotation.y = car.yaw; }

  nearest(x, z, maxD = 3) {
    let best = null, bd = maxD;
    for (const c of this.list) { const d = Math.hypot(c.pos.x - x, c.pos.z - z); if (d < bd) { bd = d; best = c; } }
    return best;
  }

  // driverOnly: break just the driver's side window (how you break in), so you can still see out the front.
  smash(car, who = 'Something', driverOnly = false) {
    if (!car) return false;
    if (!car.smashed) { car.smashed = true; this.G.stats.carsSmashed++; }
    for (const p of driverOnly ? [car.panes[1]] : car.panes) p.material = crackMat;
    car.alarm = 16;
    sfx.clang();
    this.G.toast(`${who} ${who === 'You' ? 'smash' : 'smashes'} ${driverOnly ? 'the driver\'s window' : 'the windows'} of ${car.owner}. The alarm starts WAILING.`, 'bad');
    this.G.onAssault?.();
    return true;
  }

  // Called by thrown props / golf balls flying near a car. Only acts on an intact window.
  hitAt(x, z, y = 0.6) {
    if (y > 1.6) return false;
    let best = null, bd = 1.6;
    for (const c of this.list) { if (c.smashed) continue; const d = Math.hypot(c.pos.x - x, c.pos.z - z); if (d < bd) { bd = d; best = c; } }
    if (!best) return false;
    this.smash(best, 'A stray projectile');
    return true;
  }

  enter(car) {
    const G = this.G;
    if (G.player.held) { G.player.held.held = false; G.player.held = null; }
    if (G.player.pushing) G.player.pushing = null;
    this.smash(car, 'You', true);
    this.driving = car;
    this.unpark(car);
    G.player.inCar = car;
    G.stats.carsJacked++;
    G.toast('You hotwire it. The alarm is SCREAMING and you have no idea whose keys these are. Drive. WASD to steer, E to get out.');
  }

  exit() {
    const car = this.driving;
    if (!car) return;
    this.driving = null;
    this.G.player.inCar = null;
    // Step out to the left of the car
    const lx = -Math.cos(car.yaw), lz = Math.sin(car.yaw);
    const p = { x: car.pos.x + lx * 1.6, z: car.pos.z + lz * 1.6 };
    collideCircle(p, 0.3, 0);
    this.G.player.pos.x = p.x; this.G.player.pos.z = p.z; this.G.player.y = 0; this.G.player.vy = 0;
    this.park(car);
    this.G.toast('You abandon the car at a jaunty angle. Nobody will ever know.');
  }

  update(dt) {
    const G = this.G;
    for (const c of this.list) {
      if (c.alarm > 0) { c.alarm -= dt; c.head.color.set(Math.sin(performance.now() / 120) > 0 ? '#ff5a3c' : '#fff6cf'); }
      else c.head.color.set('#fff6cf');
      if (c.lightbar) { const on = c.alarm > 0 || c === this.driving; const ph = Math.sin(performance.now() / 90) > 0; c.lightbar[0].material.color.set(on && ph ? '#ff2a2a' : '#6a1015'); c.lightbar[1].material.color.set(on && !ph ? '#3a6bff' : '#132a6a'); }
    }
    const car = this.driving;
    if (!car) return;
    const k = G.player.keys, tm = G.player.touchMove;
    let throttle = (k.has('KeyW') || k.has('ArrowUp') ? 1 : 0) - (k.has('KeyS') || k.has('ArrowDown') ? 1 : 0);
    let steer = (k.has('KeyD') || k.has('ArrowRight') ? 1 : 0) - (k.has('KeyA') || k.has('ArrowLeft') ? 1 : 0);
    if (tm) { throttle += tm.y; steer += tm.x; }
    const boost = k.has('ShiftLeft') || k.has('ShiftRight') ? 1.5 : 1;
    car.speed += throttle * 11 * dt;
    car.speed *= 1 - 1.1 * dt;
    car.speed = Math.max(-6, Math.min(16 * boost, car.speed));
    if (Math.abs(car.speed) < 0.05) car.speed = 0;
    const turn = steer * 1.9 * dt * Math.max(-1, Math.min(1, car.speed / 3));
    car.yaw += turn;
    const fx = -Math.sin(car.yaw), fz = -Math.cos(car.yaw);
    const step = car.speed * dt;
    const np = { x: car.pos.x + fx * step, z: car.pos.z + fz * step };
    // Collide the car body (approx as a circle). A hard hit crashes.
    const cc = { x: np.x, z: np.z };
    if (collideCircle(cc, 1.25, 0.6)) {
      const impact = Math.abs(car.speed);
      np.x = cc.x; np.z = cc.z;
      if (impact > 4) { sfx.thud(1); G.stats.carCrashes++; if (impact > 8 && !car.smashed) this.smash(car, 'The crash'); }
      car.speed *= -0.25;
    }
    car.pos.x = np.x; car.pos.z = np.z;
    this.sync(car);
    for (const w of car.wheels) w.rotation.x -= (car.speed * dt) / 0.38;
    // Run people over (cartoon launch) and shove props
    const spd = Math.abs(car.speed);
    if (spd > 2.5) {
      for (const n of G.npcs) {
        if (n.state === 'knocked' || n.state === 'pinned') continue;
        if (Math.hypot(n.pos.x - car.pos.x, n.pos.y - car.pos.z) < 1.9) {
          n.knock(fx * (spd + 4), fz * (spd + 4), true, 3.5, pick(['AAAARGH', 'A CAR?! INSIDE?!', 'INCIDENT REPORT!', 'MY LEGS', 'NOT THE CAR AGAIN']));
          G.stats.ranOver++;
        }
      }
      for (const p of G.props.list) {
        if (p.held || p.stuck) continue;
        if (Math.hypot(p.pos.x - car.pos.x, p.pos.z - car.pos.z) < 2) { p.vel.x += fx * (spd + 2); p.vel.z += fz * (spd + 2); p.vel.y += 2; }
      }
      // Ram other parked cars -> set their alarms off
      for (const o of this.list) {
        if (o === car || !o.static) continue;
        if (Math.hypot(o.pos.x - car.pos.x, o.pos.z - car.pos.z) < 3 && !o.smashed) this.smash(o, 'The ramming');
      }
    }
    // Drive the player seat + heading; player.update places the camera from these.
    // Right-hand drive: sit behind the wheel.
    const rx = Math.cos(car.yaw), rz = -Math.sin(car.yaw);
    G.player.pos.x = car.pos.x - fx * car.seatU + rx * 0.36; G.player.pos.z = car.pos.z - fz * car.seatU + rz * 0.36;
    G.player.yaw = car.yaw;
    G.player.vel.x = fx * car.speed; G.player.vel.z = fz * car.speed;
  }
}
