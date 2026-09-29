// Builds the ED: floor, walls, ceiling, furniture, signage. Returns handles the game logic needs.
import * as THREE from 'three';
import { W, H, grid, ZONES, zoneAt, addStatic, isWall } from './map.js';

const PX = 32; // floor texture pixels per metre

const matCache = new Map();
export function mat(color, opts = {}) {
  const { unique, ...params } = opts;
  const key = color + JSON.stringify(params);
  if (!unique && matCache.has(key)) return matCache.get(key);
  const m = new THREE.MeshLambertMaterial({ color, ...params });
  if (!unique) matCache.set(key, m);
  return m;
}

export function box(scene, w, h, d, color, x, y, z, opts) {
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), opts?.material || mat(color, opts?.mat));
  m.position.set(x, y, z);
  scene.add(m);
  return m;
}

// Solid furniture: visual box sitting on the floor + collision.
function furniture(scene, minX, minZ, maxX, maxZ, h, color, tag) {
  const m = box(scene, maxX - minX, h, maxZ - minZ, color, (minX + maxX) / 2, h / 2, (minZ + maxZ) / 2, { mat: { unique: true } });
  addStatic(minX, minZ, maxX, maxZ, h, tag);
  return m;
}

export function textCanvas(text, w, h, { bg = '#0b3d6b', fg = '#ffffff', font = 'bold 64px "Archivo Narrow", Arial, sans-serif', pad = 0 } = {}) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  const g = c.getContext('2d');
  g.fillStyle = bg;
  g.fillRect(0, 0, w, h);
  g.fillStyle = fg;
  g.font = font;
  g.textAlign = 'center';
  g.textBaseline = 'middle';
  const lines = text.split('\n');
  const lh = h / (lines.length + pad);
  lines.forEach((l, i) => g.fillText(l, w / 2, lh * (i + 0.5 + pad / 2)));
  return c;
}

function sign(scene, text, x, y, z, ry, w = 2.4, h = 0.5, colors) {
  const c = textCanvas(text, 512, Math.round((512 * h) / w), colors);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ map: t }));
  m.position.set(x, y, z);
  m.rotation.y = ry;
  scene.add(m);
  return m;
}

export function buildWorld(scene) {
  const out = { interactables: [], burnables: [], flammableStatics: [] };

  // ---------- floor (canvas texture so we can paint scorch marks) ----------
  const fc = document.createElement('canvas');
  fc.width = W * PX; fc.height = H * PX;
  const g = fc.getContext('2d');
  g.fillStyle = '#222';
  g.fillRect(0, 0, fc.width, fc.height);
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      const z = zoneAt(x, y);
      if (!z) continue;
      g.fillStyle = z.floor;
      g.fillRect(x * PX, y * PX, PX, PX);
      if (z.id !== 'outside') {
        g.fillStyle = 'rgba(0,0,0,0.06)';
        if ((x + y) % 2) g.fillRect(x * PX, y * PX, PX, PX);
        g.strokeStyle = 'rgba(255,255,255,0.08)';
        g.strokeRect(x * PX + 0.5, y * PX + 0.5, PX - 1, PX - 1);
      }
    }
  }
  // Ambulance bay markings
  g.strokeStyle = '#e8c547';
  g.lineWidth = 4;
  g.strokeRect(2 * PX, 25.8 * PX, 6.5 * PX, 2.6 * PX);
  g.fillStyle = '#e8c547';
  g.font = 'bold 26px Arial';
  g.save();
  g.translate(11 * PX, 27.2 * PX);
  g.fillText('AMBULANCE ONLY', 0, 0);
  g.restore();
  // Corridor wayfinding stripe
  g.fillStyle = '#d64545';
  g.fillRect(1 * PX, 10.9 * PX, 42 * PX, 5);
  g.fillStyle = '#3d7bd6';
  g.fillRect(1 * PX, 11.1 * PX, 42 * PX, 5);
  // MRI zone line
  g.fillStyle = '#e8c547';
  for (let x = 30; x < 43; x++) g.fillRect(x * PX, 7.8 * PX, PX / 2, 6);

  const floorTex = new THREE.CanvasTexture(fc);
  floorTex.colorSpace = THREE.SRGBColorSpace;
  floorTex.anisotropy = 4;
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(W, H), new THREE.MeshLambertMaterial({ map: floorTex }));
  floor.rotation.x = -Math.PI / 2;
  floor.position.set(W / 2, 0, H / 2);
  scene.add(floor);
  out.floorTex = floorTex;
  out.scorch = (x, y, a = 0.5) => {
    const cx = (x + 0.5) * PX, cy = (y + 0.5) * PX;
    const gr = g.createRadialGradient(cx, cy, 2, cx, cy, PX * 0.9);
    gr.addColorStop(0, `rgba(15,10,8,${a})`);
    gr.addColorStop(1, 'rgba(15,10,8,0)');
    g.fillStyle = gr;
    g.fillRect(cx - PX, cy - PX, PX * 2, PX * 2);
    floorTex.needsUpdate = true;
  };
  out.puddle = (x, y) => {
    const cx = (x + 0.5) * PX, cy = (y + 0.5) * PX;
    g.fillStyle = 'rgba(120,170,220,0.12)';
    g.beginPath();
    g.ellipse(cx, cy, PX * 0.5, PX * 0.35, Math.random() * 3, 0, Math.PI * 2);
    g.fill();
    floorTex.needsUpdate = true;
  };

  // Outside ground beyond the fence
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(200, 200), mat('#1c1f22'));
  ground.rotation.x = -Math.PI / 2;
  ground.position.set(W / 2, -0.01, H / 2);
  scene.add(ground);

  // ---------- walls ----------
  let nWall = 0, nFence = 0;
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) { if (grid[y][x] === '#') nWall++; else if (grid[y][x] === 'F') nFence++; }
  const wallMesh = new THREE.InstancedMesh(new THREE.BoxGeometry(1, 3, 1), mat('#e9e6df'), nWall);
  const fenceMesh = new THREE.InstancedMesh(new THREE.BoxGeometry(1, 1.1, 0.25), mat('#6b7178'), nFence);
  const dummy = new THREE.Object3D();
  let wi = 0, fi = 0;
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      if (grid[y][x] === '#') {
        dummy.position.set(x + 0.5, 1.5, y + 0.5);
        dummy.rotation.set(0, 0, 0);
        dummy.updateMatrix();
        wallMesh.setMatrixAt(wi++, dummy.matrix);
      } else if (grid[y][x] === 'F') {
        dummy.position.set(x + 0.5, 0.55, y + 0.5);
        dummy.rotation.set(0, y === H - 1 ? 0 : Math.PI / 2, 0);
        dummy.updateMatrix();
        fenceMesh.setMatrixAt(fi++, dummy.matrix);
      }
    }
  }
  scene.add(wallMesh, fenceMesh);
  // Skirting stripe on walls for readability
  const skirt = new THREE.InstancedMesh(new THREE.BoxGeometry(1.02, 0.18, 1.02), mat('#5d7d8f'), nWall);
  wi = 0;
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) if (grid[y][x] === '#') {
    dummy.position.set(x + 0.5, 0.09, y + 0.5); dummy.rotation.set(0, 0, 0); dummy.updateMatrix(); skirt.setMatrixAt(wi++, dummy.matrix);
  }
  scene.add(skirt);
  // Lintels above doorways so openings read as doors (and signs have a wall to sit on)
  for (const row of [8, 13, 25]) {
    for (let x = 1; x < W - 1; x++) {
      if (grid[row][x] === '#') continue;
      box(scene, 1, 0.8, 1, '#e9e6df', x + 0.5, 2.6, row + 0.5);
    }
  }

  // ---------- ceiling + light panels ----------
  const ceil = new THREE.Mesh(new THREE.PlaneGeometry(W, 25), mat('#cfd3d6'));
  ceil.rotation.x = Math.PI / 2;
  ceil.position.set(W / 2, 3, 12.5);
  scene.add(ceil);
  const panelMat = new THREE.MeshBasicMaterial({ color: '#fbfbf2' });
  out.panelMat = panelMat;
  for (let z = 2.5; z < 25; z += 4) {
    for (let x = 2.5; x < W; x += 4) {
      if (isWall(Math.floor(x), Math.floor(z))) continue;
      const p = new THREE.Mesh(new THREE.PlaneGeometry(1.2, 0.6), panelMat);
      p.rotation.x = Math.PI / 2;
      p.position.set(x, 2.99, z);
      scene.add(p);
    }
  }

  // ---------- lights ----------
  scene.add(new THREE.HemisphereLight(0xfffdf6, 0x5a6068, 1.15));
  scene.add(new THREE.AmbientLight(0xffffff, 0.3));
  const key = new THREE.DirectionalLight(0xfff4e0, 1.3);
  key.position.set(30, 40, 10);
  key.target.position.set(22, 0, 14);
  scene.add(key, key.target);
  const fill = new THREE.DirectionalLight(0xdfe8ff, 0.5);
  fill.position.set(-20, 25, 40);
  scene.add(fill);
  const sodium = new THREE.PointLight(0xffa04a, 18, 16, 1.6);
  sodium.position.set(20, 4.5, 27.5);
  scene.add(sodium);
  const monitorGlow = new THREE.PointLight(0x7fb2ff, 3, 5, 1.5);
  monitorGlow.position.set(3.2, 1.3, 2.2);
  scene.add(monitorGlow);
  out.alarmLight = new THREE.PointLight(0xff2020, 0, 60, 0.6);
  out.alarmLight.position.set(20, 2.8, 11);
  scene.add(out.alarmLight);

  // ---------- READING ROOM ----------
  furniture(scene, 1.05, 1.05, 5.4, 1.9, 0.75, '#6d5a47');
  const screens = [];
  for (const sx of [2.35, 3.95]) {
    box(scene, 0.08, 0.35, 0.08, '#222', sx, 0.95, 1.4);
    const frame = box(scene, 0.98, 0.62, 0.06, '#15171a', sx, 1.35, 1.38);
    const scr = new THREE.Mesh(new THREE.PlaneGeometry(0.9, 0.54), new THREE.MeshBasicMaterial({ color: '#000' }));
    scr.position.set(sx, 1.35, 1.415);
    scene.add(scr);
    screens.push(scr);
    frame.rotation.y = 0;
  }
  out.pacsScreens = screens;
  // Phone
  out.phone = box(scene, 0.25, 0.1, 0.2, '#2b2b2b', 4.9, 0.8, 1.5);
  box(scene, 0.1, 0.06, 0.22, '#111', 4.82, 0.87, 1.5);
  // Keyboard, coffee rings
  box(scene, 0.5, 0.03, 0.18, '#1d1d1d', 3.2, 0.77, 1.75);
  // Nap couch
  furniture(scene, 6.1, 5.9, 8.9, 6.9, 0.45, '#7a3b3b', 'flammable');
  box(scene, 2.8, 0.5, 0.25, '#6a3333', 7.5, 0.75, 6.85);
  // Old film lightbox on the wall
  const lb = new THREE.Mesh(new THREE.PlaneGeometry(1.6, 0.9), new THREE.MeshBasicMaterial({ color: '#dfe9f0' }));
  lb.position.set(1.02, 1.7, 4.2);
  lb.rotation.y = Math.PI / 2;
  scene.add(lb);
  sign(scene, 'RADIOLOGY\nON CALL', 1.03, 2.55, 4.2, Math.PI / 2, 1.4, 0.45, { bg: '#1d2733', fg: '#ffcf5a', font: 'bold 52px "Archivo Narrow", Arial' });
  out.interactables.push(
    { id: 'pacs', x: 3.2, z: 2.2, r: 1.5, label: 'Sit at PACS' },
    { id: 'phone', x: 4.9, z: 2.1, r: 1.3, label: 'Answer phone' },
    { id: 'couch', x: 7.5, z: 5.6, r: 1.5, label: 'Nap on the on-call couch' },
  );

  // ---------- TEA ROOM ----------
  furniture(scene, 10.05, 1.05, 15.6, 1.75, 0.92, '#d8d2c4');
  out.microwave = { x: 11.6, z: 1.4 };
  box(scene, 0.62, 0.36, 0.42, '#e6e6e6', 11.6, 1.1, 1.4);
  out.microwaveGlow = new THREE.Mesh(new THREE.PlaneGeometry(0.38, 0.24), new THREE.MeshBasicMaterial({ color: '#222' }));
  out.microwaveGlow.position.set(11.52, 1.1, 1.615);
  scene.add(out.microwaveGlow);
  box(scene, 0.32, 0.2, 0.2, '#b8b8b8', 13.2, 1.02, 1.4);
  box(scene, 0.2, 0.28, 0.2, '#333', 14.5, 1.06, 1.4);
  furniture(scene, 16.2, 1.05, 17.95, 1.95, 1.9, '#f0f0f0');
  furniture(scene, 12.6, 4.0, 14.8, 5.2, 0.75, '#a67c52', 'flammable');
  sign(scene, 'PLEASE CLEAN UP\nAFTER YOURSELF', 13, 2.1, 1.02, 0, 1.6, 0.5, { bg: '#fff9c4', fg: '#333', font: 'bold 40px "Caveat", cursive' });
  sign(scene, 'NO FOIL IN\nMICROWAVE!!!', 11.6, 1.75, 1.02, 0, 0.9, 0.35, { bg: '#fff', fg: '#c00', font: 'bold 40px "Caveat", cursive' });
  out.interactables.push(
    { id: 'microwave', x: 11.6, z: 2.1, r: 1.2, label: 'Use microwave' },
    { id: 'toaster', x: 13.2, z: 2.1, r: 1.0, label: 'Make toast' },
    { id: 'fridge', x: 17.0, z: 2.5, r: 1.2, label: 'Raid the staff fridge' },
    { id: 'kettle', x: 14.5, z: 2.1, r: 1.0, label: 'Make instant coffee' },
  );

  // ---------- CT ----------
  const gantry = new THREE.Mesh(new THREE.TorusGeometry(0.85, 0.38, 16, 40), mat('#f2f4f7'));
  gantry.position.set(23.5, 1.25, 3.5);
  gantry.rotation.y = Math.PI / 2;
  scene.add(gantry);
  box(scene, 0.8, 0.5, 2.2, '#dfe3e8', 23.5, 0.25, 3.5);
  addStatic(23.0, 2.2, 24.0, 4.8, 2.2);
  furniture(scene, 24.0, 3.15, 27.6, 3.85, 0.82, '#cfd6de');
  furniture(scene, 19.05, 3.0, 19.9, 5.4, 0.8, '#4a5663');
  box(scene, 0.05, 0.4, 0.7, '#0a0', 19.9, 1.1, 4.2).material = new THREE.MeshBasicMaterial({ color: '#1d3b52' });
  sign(scene, 'X-RAY ON', 23.5, 2.7, 1.03, 0, 1.2, 0.3, { bg: '#300', fg: '#f33', font: 'bold 60px Arial' });
  out.interactables.push({ id: 'ctconsole', x: 20.4, z: 4.2, r: 1.3, label: 'CT console: scan whatever is on the table' });
  out.ctTable = { x: 25.8, z: 3.5 };

  // ---------- MRI ----------
  furniture(scene, 35.0, 1.6, 38.2, 5.4, 2.5, '#eef0f4');
  const bore = new THREE.Mesh(new THREE.CircleGeometry(0.75, 32), mat('#9aa3ad'));
  bore.position.set(38.21, 1.2, 3.5);
  bore.rotation.y = Math.PI / 2;
  scene.add(bore);
  const boreInner = new THREE.Mesh(new THREE.CircleGeometry(0.55, 32), mat('#2a2f36'));
  boreInner.position.set(38.22, 1.2, 3.5);
  boreInner.rotation.y = Math.PI / 2;
  scene.add(boreInner);
  furniture(scene, 38.2, 3.15, 41.6, 3.85, 0.8, '#d7dce2');
  out.magnet = { x: 38.3, y: 1.2, z: 3.5 };
  const qb = box(scene, 0.25, 0.25, 0.08, '#d00', 31.2, 1.4, 7.94);
  qb.material = new THREE.MeshBasicMaterial({ color: '#e11' });
  sign(scene, 'EMERGENCY\nQUENCH', 31.2, 1.8, 7.95, Math.PI, 0.6, 0.3, { bg: '#fff', fg: '#c00', font: 'bold 44px Arial' });
  sign(scene, '⚠ ZONE 4: MAGNET IS ALWAYS ON', 36.5, 2.5, 8.99, 0, 2.8, 0.4, { bg: '#e8c547', fg: '#111', font: 'bold 38px Arial' });
  out.interactables.push({ id: 'quench', x: 31.2, z: 7.2, r: 1.2, label: 'Press EMERGENCY QUENCH' });

  // ---------- CORRIDOR ----------
  const tvC = document.createElement('canvas');
  tvC.width = 512; tvC.height = 288;
  out.tvCanvas = tvC;
  out.tvTex = new THREE.CanvasTexture(tvC);
  out.tvTex.colorSpace = THREE.SRGBColorSpace;
  box(scene, 1.75, 1.0, 0.08, '#111', 18.5, 2.25, 9.04);
  const tv = new THREE.Mesh(new THREE.PlaneGeometry(1.6, 0.9), new THREE.MeshBasicMaterial({ map: out.tvTex }));
  tv.position.set(18.5, 2.25, 9.09);
  scene.add(tv);
  sign(scene, 'RADIOLOGY', 5, 2.6, 9.02, 0, 1.6, 0.35);
  sign(scene, 'STAFF ONLY', 13.5, 2.6, 9.02, 0, 1.6, 0.35, { bg: '#555', fg: '#fff', font: 'bold 60px "Archivo Narrow", Arial' });
  sign(scene, 'CT', 24, 2.6, 9.02, 0, 1.0, 0.35);
  sign(scene, 'MRI', 35.5, 2.6, 9.02, 0, 1.0, 0.35);
  sign(scene, 'RESUS', 11, 2.6, 12.96, Math.PI, 2.0, 0.4, { bg: '#b01818', fg: '#fff', font: 'bold 70px "Archivo Narrow", Arial' });
  sign(scene, 'WAITING ROOM', 30, 2.6, 12.96, Math.PI, 2.2, 0.4);
  sign(scene, 'EMERGENCY', 10.5, 2.6, 26.04, 0, 3.6, 0.6, { bg: '#b01818', fg: '#fff', font: 'bold 90px "Archivo Narrow", Arial' });
  sign(scene, 'EMERGENCY', 32, 2.6, 26.04, 0, 3.6, 0.6, { bg: '#b01818', fg: '#fff', font: 'bold 90px "Archivo Narrow", Arial' });
  out.queueSpots = [{ x: 5, z: 9.8 }];
  for (let i = 0; i < 14; i++) out.queueSpots.push({ x: 6.5 + i * 0.85, z: 9.6 + (i % 2) * 0.35 });
  out.corridorBedSpots = [];
  for (let i = 0; i < 10; i++) out.corridorBedSpots.push({ x: 21 + i * 2.1, z: 12.3 });

  // ---------- RESUS ----------
  out.bays = [3, 8, 13, 18].map((x) => ({ x, z: 22.8 }));
  for (const bx of [5.5, 10.5, 15.5]) {
    const cur = new THREE.Mesh(new THREE.PlaneGeometry(4.6, 2.2), new THREE.MeshLambertMaterial({ color: '#7fb7c9', side: THREE.DoubleSide }));
    cur.position.set(bx, 1.25, 22.6);
    cur.rotation.y = Math.PI / 2;
    scene.add(cur);
    const cells = [];
    for (let z = 20; z <= 24; z++) cells.push(z * W + Math.floor(bx));
    out.burnables.push({ mesh: cur, cells, kind: 'curtain', fuel: 1.2, char: 0 });
  }
  for (const b of out.bays) {
    const mon = new THREE.Mesh(new THREE.PlaneGeometry(0.5, 0.35), new THREE.MeshBasicMaterial({ color: '#0b2a1a' }));
    mon.position.set(b.x + 1.2, 1.8, 24.97);
    mon.rotation.y = Math.PI;
    scene.add(mon);
  }
  out.ecgScreens = [];
  furniture(scene, 7, 15.4, 13, 16.5, 1.05, '#c9d4dc');
  box(scene, 0.5, 0.35, 0.05, '#111', 9, 1.3, 15.9);
  box(scene, 0.5, 0.35, 0.05, '#111', 11, 1.3, 15.9);
  sign(scene, 'NURSES STATION', 10, 1.6, 15.37, Math.PI, 1.8, 0.3, { bg: '#fff', fg: '#0b3d6b', font: 'bold 50px "Archivo Narrow", Arial' });
  furniture(scene, 1.1, 17.4, 1.9, 18.4, 1.0, '#c62828');
  // Whiteboard
  const wbC = textCanvas('BED  PT        STATUS\n1  ?appendix   waiting CT\n2  chest pain  trop pending\n3  ??????      radiology??\n4  fall        CT brain??', 512, 300, { bg: '#f7f7f7', fg: '#1a3f9c', font: '30px "Caveat", cursive' });
  const wb = new THREE.Mesh(new THREE.PlaneGeometry(2.4, 1.4), new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(wbC) }));
  wb.position.set(1.03, 1.6, 15.8);
  wb.rotation.y = Math.PI / 2;
  scene.add(wb);

  // ---------- WAITING ROOM ----------
  out.seats = [];
  for (const z of [17.2, 19.6, 22.0]) {
    for (const [x0, x1] of [[25, 31.5], [33, 39.5]]) {
      const m = furniture(scene, x0, z - 0.3, x1, z + 0.3, 0.46, '#3f6f8f', 'flammable');
      box(scene, x1 - x0, 0.5, 0.08, '#35607c', (x0 + x1) / 2, 0.7, z + 0.28);
      const cells = [];
      for (let x = x0; x < x1; x++) cells.push(Math.floor(z) * W + x);
      out.burnables.push({ mesh: m, cells, kind: 'bench', fuel: 1.4, char: 0 });
      for (let x = x0 + 0.4; x < x1 - 0.2; x += 0.9) out.seats.push({ x, z: z - 0.05 });
    }
  }
  furniture(scene, 22.2, 14.2, 24.8, 15.2, 1.1, '#9aa7b1');
  sign(scene, 'TRIAGE', 23.5, 2.2, 15.22, 0, 1.2, 0.3);
  furniture(scene, 41.4, 14.2, 42.95, 15.1, 1.9, '#2b4a8b');
  const vend = new THREE.Mesh(new THREE.PlaneGeometry(1.2, 1.2), new THREE.MeshBasicMaterial({ color: '#8fd3ff' }));
  vend.position.set(42.1, 1.2, 15.11);
  scene.add(vend);
  out.interactables.push({ id: 'vending', x: 42.1, z: 15.9, r: 1.2, label: 'Shake the vending machine' });
  const wtC = document.createElement('canvas');
  wtC.width = 512; wtC.height = 256;
  out.waitCanvas = wtC;
  out.waitTex = new THREE.CanvasTexture(wtC);
  out.waitTex.colorSpace = THREE.SRGBColorSpace;
  box(scene, 2.2, 1.2, 0.08, '#111', 32, 2.2, 14.04);
  const wtv = new THREE.Mesh(new THREE.PlaneGeometry(2.05, 1.05), new THREE.MeshBasicMaterial({ map: out.waitTex }));
  wtv.position.set(32, 2.2, 14.09);
  scene.add(wtv);

  // ---------- OUTSIDE ----------
  furniture(scene, 2.5, 26.1, 7.5, 28.1, 2.5, '#f4f4f4');
  box(scene, 5.02, 0.35, 2.02, '#e8c547', 5, 1.2, 27.1);
  const lightbar = box(scene, 1.2, 0.15, 1.2, '#f00', 3.2, 2.6, 27.1);
  lightbar.material = new THREE.MeshBasicMaterial({ color: '#ff2a2a' });
  out.ambulanceBar = lightbar;
  furniture(scene, 16, 27.9, 18.4, 28.5, 0.45, '#6b4f36', 'flammable');
  sign(scene, 'NO SMOKING\nwithin 5 m', 17.2, 1.4, 28.93, Math.PI, 1.0, 0.5, { bg: '#fff', fg: '#c00', font: 'bold 50px Arial' });
  box(scene, 0.08, 2.2, 0.08, '#666', 37, 1.1, 28.6);
  sign(scene, 'ASSEMBLY\nAREA', 37, 2.3, 28.55, Math.PI, 1.0, 0.6, { bg: '#1b8a3c', fg: '#fff', font: 'bold 60px Arial' });
  box(scene, 0.15, 4.5, 0.15, '#444', 20, 2.25, 28.7);

  // ---------- base fuel map ----------
  const fuel = new Float32Array(W * H);
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
    const z = zoneAt(x, y);
    fuel[y * W + x] = z ? z.fuel : 0;
  }
  for (const b of out.burnables) for (const c of b.cells) fuel[c] += b.fuel;
  // Reading room: decades of paper
  for (let y = 1; y <= 2; y++) for (let x = 1; x <= 5; x++) fuel[y * W + x] += 0.8;
  out.baseFuel = fuel;
  return out;
}
