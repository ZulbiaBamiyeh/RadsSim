// Cars in the staff car park. You can smash their windows (alarm), break in and hotwire the driver's
// door (E), then drive them around — through the car park, up the ramp, and straight into the ED if you
// like. Cartoon slapstick: nobody is hurt, they just get launched and shout.
import * as THREE from 'three';
import { addStatic, removeStatic, collideCircle, zoneAtWorld } from './map.js';
import { mat } from './world.js';
import { sfx } from './audio.js';

const pick = (a) => a[Math.floor(Math.random() * a.length)];

function buildCar(color) {
  const g = new THREE.Group();
  const paint = mat(color, { unique: true });
  const add = (geo, m, x, y, z, ry = 0) => { const o = new THREE.Mesh(geo, m); o.position.set(x, y, z); o.rotation.y = ry; g.add(o); return o; };
  // Body (long axis = z), lower box + bonnet/boot
  add(new THREE.BoxGeometry(1.9, 0.6, 4.3), paint, 0, 0.55, 0);
  add(new THREE.BoxGeometry(1.75, 0.55, 2.0), paint, 0, 1.0, -0.15); // cabin
  // Windows: one group we can hide when smashed
  const glass = new THREE.Group();
  const gm = new THREE.MeshLambertMaterial({ color: '#111a22', transparent: true, opacity: 0.55 });
  const gw = (geo, x, y, z) => { const o = new THREE.Mesh(geo, gm); o.position.set(x, y, z); glass.add(o); };
  for (const z of [-1.02, 0.72]) gw(new THREE.BoxGeometry(1.5, 0.42, 0.05), 0, 1.0, z);
  for (const sx of [-0.84, 0.84]) gw(new THREE.BoxGeometry(0.05, 0.4, 1.7), sx, 1.0, -0.15);
  g.add(glass);
  // Wheels
  const wheel = new THREE.CylinderGeometry(0.36, 0.36, 0.28, 14);
  const wm = mat('#15151a');
  for (const sx of [-0.92, 0.92]) for (const sz of [-1.4, 1.4]) add(wheel, wm, sx, 0.36, sz, 0).rotation.z = Math.PI / 2;
  // Lights
  const head = new THREE.MeshBasicMaterial({ color: '#fff6cf' });
  const tail = new THREE.MeshBasicMaterial({ color: '#6b0d0d' });
  for (const sx of [-0.6, 0.6]) { add(new THREE.BoxGeometry(0.4, 0.2, 0.05), head, sx, 0.6, -2.17); add(new THREE.BoxGeometry(0.4, 0.2, 0.05), tail, sx, 0.6, 2.17); }
  return { g, glass, head };
}

export class Cars {
  constructor(G) {
    this.G = G;
    this.list = [];
    this.driving = null;
    const defs = [
      { x: 7, z: 33, color: '#8a1f2b', owner: 'a rusty hatchback', plate: 'RST 1' },
      { x: 11, z: 33, color: '#1d1f24', owner: 'Dr Harrow\'s SUV', plate: 'ED CON' },
      { x: 15, z: 33, color: '#20407a', owner: 'the surgical reg\'s hot hatch', plate: 'CUT 123' },
      { x: 19, z: 33, color: '#d9d2c3', owner: 'a nurse\'s little Kia', plate: 'OBS 4U' },
      { x: 9, z: 39, color: '#2a2d33', yaw: Math.PI, owner: 'the DMS\'s Range Rover', plate: 'KPI 1' },
      { x: 13, z: 39, color: '#3b6b45', yaw: Math.PI, owner: 'Security\'s ute', plate: 'SEC 24' },
      { x: 17, z: 39, color: '#c9a21f', yaw: Math.PI, owner: 'a vintage Corolla', plate: 'OLD 88' },
      { x: 23, z: 36, color: '#b4452b', owner: 'someone\'s ambulance (!)', plate: 'AMBO 9', ambulance: true },
    ];
    for (const d of defs) this.spawn(d);
  }

  spawn(d) {
    const built = buildCar(d.color);
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
    const hw = along ? 1.05 : 2.2, hl = along ? 2.2 : 1.05;
    car.static = addStatic(car.pos.x - hw, car.pos.z - hl, car.pos.x + hw, car.pos.z + hl, 1.1, 'car');
  }
  unpark(car) { if (car.static) { removeStatic(car.static); car.static = null; } }

  sync(car) { car.g.position.set(car.pos.x, 0, car.pos.z); car.g.rotation.y = car.yaw; }

  nearest(x, z, maxD = 3) {
    let best = null, bd = maxD;
    for (const c of this.list) { const d = Math.hypot(c.pos.x - x, c.pos.z - z); if (d < bd) { bd = d; best = c; } }
    return best;
  }

  smash(car, who = 'Something') {
    if (!car) return false;
    if (!car.smashed) {
      car.smashed = true;
      car.glass.visible = false;
      this.G.stats.carsSmashed++;
    }
    car.alarm = 16;
    sfx.clang();
    this.G.toast(`${who} smashes the window of ${car.owner}. The alarm starts WAILING.`, 'bad');
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
    this.smash(car, 'You');
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
    G.player.pos.x = car.pos.x + fx * 0.2; G.player.pos.z = car.pos.z + fz * 0.2;
    G.player.yaw = car.yaw;
    G.player.vel.x = fx * car.speed; G.player.vel.z = fz * car.speed;
  }
}
