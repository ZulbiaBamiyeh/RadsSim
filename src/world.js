// Builds the ED: floor, walls, ceiling, furniture, signage. Returns handles the game logic needs.
import * as THREE from 'three';
import { W, H, grid, zoneAt, addStatic, removeStatic, isWall, DOOR_ROWS } from './map.js';

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
  g.clearRect(0, 0, fc.width, fc.height);
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      const z = zoneAt(x, y);
      if (!z) continue;
      g.fillStyle = z.floor;
      g.fillRect(x * PX, y * PX, PX, PX);
      if (z.id !== 'outside' && z.id !== 'roof') {
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
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(W, H), new THREE.MeshLambertMaterial({ map: floorTex, transparent: true, alphaTest: 0.5 }));
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

  // Outside ground beyond the fence (stops at the building's east edge; the roof and basement float in the dark)
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(200, 200), mat('#1c1f22'));
  ground.rotation.x = -Math.PI / 2;
  ground.position.set(64 - 100, -0.01, H / 2);
  scene.add(ground);
  const ground2 = new THREE.Mesh(new THREE.PlaneGeometry(64, 150), mat('#1c1f22'));
  ground2.rotation.x = -Math.PI / 2;
  ground2.position.set(32, -0.01, 30 + 75);
  scene.add(ground2);
  // City lights far below the roof
  const cityGeo = new THREE.BufferGeometry();
  const cityPts = [];
  for (let i = 0; i < 900; i++) cityPts.push(70 + Math.random() * 160 - 40, -40 - Math.random() * 5, -80 + Math.random() * 110);
  cityGeo.setAttribute('position', new THREE.Float32BufferAttribute(cityPts, 3));
  scene.add(new THREE.Points(cityGeo, new THREE.PointsMaterial({ color: '#ffcf7a', size: 0.5, fog: false })));

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
        const horiz = grid[y][x - 1] === 'F' || grid[y][x + 1] === 'F';
        dummy.rotation.set(0, horiz ? 0 : Math.PI / 2, 0);
        dummy.updateMatrix();
        fenceMesh.setMatrixAt(fi++, dummy.matrix);
      }
    }
  }
  scene.add(wallMesh, fenceMesh);
  // Lead-glass control-room windows: solid below and above, glass in the middle.
  const glassMat = new THREE.MeshLambertMaterial({ color: '#9fd0e8', transparent: true, opacity: 0.28, depthWrite: false });
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
    if (grid[y][x] !== 'G') continue;
    box(scene, 1, 1.0, 1, '#e9e6df', x + 0.5, 0.5, y + 0.5);
    box(scene, 1, 0.8, 1, '#e9e6df', x + 0.5, 2.6, y + 0.5);
    const gl = new THREE.Mesh(new THREE.BoxGeometry(0.06, 1.2, 1), glassMat);
    gl.position.set(x + 0.5, 1.6, y + 0.5);
    scene.add(gl);
  }
  // Skirting stripe on walls for readability
  const skirt = new THREE.InstancedMesh(new THREE.BoxGeometry(1.02, 0.18, 1.02), mat('#5d7d8f'), nWall);
  wi = 0;
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) if (grid[y][x] === '#') {
    dummy.position.set(x + 0.5, 0.09, y + 0.5); dummy.rotation.set(0, 0, 0); dummy.updateMatrix(); skirt.setMatrixAt(wi++, dummy.matrix);
  }
  scene.add(skirt);
  // Lintels above doorways so openings read as doors (and signs have a wall to sit on)
  for (const [row, xa, xb] of DOOR_ROWS) {
    for (let x = xa; x <= xb; x++) {
      if (grid[row][x] === '#') continue;
      box(scene, 1, 0.8, 1, '#e9e6df', x + 0.5, 2.6, row + 0.5);
    }
  }

  // ---------- ceiling + light panels ----------
  for (const [x0, z0, x1, z1, c] of [[0, 0, 64, 25, '#cfd3d6'], [65, 16, 96, 30, '#8d8b84']]) {
    const ceil = new THREE.Mesh(new THREE.PlaneGeometry(x1 - x0, z1 - z0), mat(c));
    ceil.rotation.x = Math.PI / 2;
    ceil.position.set((x0 + x1) / 2, 3, (z0 + z1) / 2);
    scene.add(ceil);
  }
  const panelMat = new THREE.MeshBasicMaterial({ color: '#fbfbf2' });
  out.panelMat = panelMat;
  for (let z = 2.5; z < H; z += 4) {
    for (let x = 2.5; x < W; x += 4) {
      const zz = zoneAt(Math.floor(x), Math.floor(z));
      if (isWall(Math.floor(x), Math.floor(z)) || !zz || zz.id === 'outside' || zz.outdoor) continue;
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
  // Side computer: RiskMann
  furniture(scene, 6.4, 1.05, 8.9, 1.8, 0.75, '#6d5a47');
  box(scene, 0.06, 0.3, 0.06, '#222', 7.6, 0.9, 1.35);
  box(scene, 0.72, 0.46, 0.05, '#15171a', 7.6, 1.25, 1.33);
  const rmC = textCanvas('RiskMann\nIncident Mgmt', 256, 160, { bg: '#0f6e6e', fg: '#fff', font: 'bold 34px Arial' });
  const rmScr = new THREE.Mesh(new THREE.PlaneGeometry(0.66, 0.4), new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(rmC) }));
  rmScr.position.set(7.6, 1.25, 1.36);
  scene.add(rmScr);
  out.interactables.push({ id: 'riskman', x: 7.6, z: 2.3, r: 1.2, label: 'Open RiskMann (file an incident report)' });
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

  // ---------- CT (scan room + control room behind lead glass) ----------
  const gantry = new THREE.Mesh(new THREE.TorusGeometry(0.85, 0.38, 16, 40), mat('#f2f4f7'));
  gantry.position.set(25, 1.25, 3.5);
  gantry.rotation.y = Math.PI / 2;
  scene.add(gantry);
  box(scene, 0.8, 0.5, 2.2, '#dfe3e8', 25, 0.25, 3.5);
  addStatic(24.5, 2.2, 25.5, 4.8, 2.2);
  furniture(scene, 25.5, 3.15, 28.8, 3.85, 0.82, '#cfd6de');
  furniture(scene, 19.05, 3.0, 19.9, 5.4, 0.8, '#4a5663');
  box(scene, 0.05, 0.4, 0.7, '#0a0', 19.9, 1.1, 4.2).material = new THREE.MeshBasicMaterial({ color: '#1d3b52' });
  furniture(scene, 21.2, 1.6, 21.9, 5.0, 0.8, '#4a5663');
  const ctLight = sign(scene, 'X-RAY ON', 25.5, 2.55, 1.03, 0, 1.2, 0.3, { bg: '#300', fg: '#f33', font: 'bold 60px Arial' });
  const ctDoorLight = sign(scene, 'X-RAY ON', 23.5, 2.2, 9.03, 0, 0.9, 0.22, { bg: '#300', fg: '#f33', font: 'bold 60px Arial' });
  sign(scene, 'CT CONTROL', 20.5, 2.6, 9.02, 0, 1.4, 0.3);
  out.interactables.push({ id: 'ctconsole', x: 20.6, z: 4.2, r: 1.3, label: 'CT console: scan whatever is on the table' });
  out.ctTable = { x: 27, z: 3.5 };

  // ---------- MRI ----------
  furniture(scene, 36.0, 1.6, 39.2, 5.4, 2.5, '#eef0f4');
  const bore = new THREE.Mesh(new THREE.CircleGeometry(0.75, 32), mat('#9aa3ad'));
  bore.position.set(39.21, 1.2, 3.5);
  bore.rotation.y = Math.PI / 2;
  scene.add(bore);
  const boreInner = new THREE.Mesh(new THREE.CircleGeometry(0.55, 32), mat('#2a2f36'));
  boreInner.position.set(39.22, 1.2, 3.5);
  boreInner.rotation.y = Math.PI / 2;
  scene.add(boreInner);
  furniture(scene, 39.2, 3.15, 41.9, 3.85, 0.8, '#d7dce2');
  out.magnet = { x: 39.3, y: 1.2, z: 3.5 };
  const qb = box(scene, 0.08, 0.25, 0.25, '#d00', 30.04, 1.4, 6.3);
  qb.material = new THREE.MeshBasicMaterial({ color: '#e11' });
  sign(scene, 'EMERGENCY\nQUENCH', 30.03, 1.8, 6.3, Math.PI / 2, 0.6, 0.3, { bg: '#fff', fg: '#c00', font: 'bold 44px Arial' });
  sign(scene, '⚠ ZONE 4: MAGNET IS ALWAYS ON', 36.5, 2.5, 8.99, 0, 2.8, 0.4, { bg: '#e8c547', fg: '#111', font: 'bold 38px Arial' });
  out.interactables.push({ id: 'quench', x: 30.8, z: 6.3, r: 1.2, label: 'Press EMERGENCY QUENCH' });
  furniture(scene, 30.1, 2.0, 30.9, 4.8, 0.8, '#4a5663');
  box(scene, 0.05, 0.4, 0.7, '#0a0', 30.9, 1.1, 3.4).material = new THREE.MeshBasicMaterial({ color: '#2a2150' });
  sign(scene, 'MRI CONTROL', 31.5, 2.6, 9.02, 0, 1.4, 0.3);
  const mriLight = sign(scene, 'SCANNING', 38.5, 2.5, 1.03, 0, 1.2, 0.3, { bg: '#1a1030', fg: '#b98cff', font: 'bold 60px Arial' });

  // ---------- X-RAY ROOM ----------
  furniture(scene, 44.4, 1.05, 45.6, 1.45, 1.9, '#d7dce2');            // wall bucky (chest stand)
  box(scene, 0.9, 0.9, 0.05, '#aeb6bf', 45, 1.4, 1.48);
  furniture(scene, 47.5, 3.9, 50.5, 4.9, 0.8, '#cfd6de');              // table
  box(scene, 0.15, 3, 0.15, '#9aa3ad', 49, 1.5, 2.2);                  // ceiling tube column
  box(scene, 1.6, 0.12, 0.12, '#9aa3ad', 48.2, 2.3, 2.2);
  const tube = box(scene, 0.5, 0.35, 0.45, '#eef0f4', 47.4, 2.05, 2.2);
  box(scene, 0.35, 0.05, 0.35, '#333', 47.4, 1.85, 2.2);
  // Control booth behind a lead screen
  furniture(scene, 51.4, 1.05, 51.55, 3.4, 2.1, '#8e99a3');
  const xg = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.6, 1.2), glassMat);
  xg.position.set(51.47, 1.55, 2.2);
  scene.add(xg);
  furniture(scene, 52.4, 1.05, 53.9, 1.75, 0.85, '#4a5663');
  box(scene, 0.6, 0.4, 0.05, '#111', 53.1, 1.25, 1.5);
  const xrLight = sign(scene, 'X-RAY ON', 46.5, 2.2, 9.03, 0, 0.9, 0.22, { bg: '#300', fg: '#f33', font: 'bold 60px Arial' });
  sign(scene, 'X-RAY', 47, 2.6, 9.02, 0, 1.2, 0.3);
  sign(scene, 'RADIATION\nAREA', 52.6, 2.4, 1.03, 0, 0.8, 0.45, { bg: '#e8c547', fg: '#111', font: 'bold 44px Arial' });
  out.interactables.push({ id: 'xrconsole', x: 53, z: 2.4, r: 1.2, label: 'X-ray console: expose whoever is at the chest stand' });
  out.xrStand = { x: 45, z: 2.1 };
  out.tube = tube;

  // Scanner status lights and patient positions used by the scanning simulation
  out.scanners = {
    ct: { lights: [ctLight, ctDoorLight], table: { x0: 28.4, x1: 25.2, y: 1.05, z: 3.5 }, zone: 'ct' },
    mri: { lights: [mriLight], table: { x0: 41.5, x1: 38.6, y: 1.03, z: 3.5 }, zone: 'mri' },
    xr: { lights: [xrLight], stand: { x: 45, z: 1.95 }, zone: 'xray' },
  };
  out.consoleSpots = { ct: { x: 20.5, z: 4.2 }, mri: { x: 31.6, z: 3.4 }, xr: { x: 52.9, z: 2.5 } };

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
  sign(scene, 'CT', 25, 2.6, 9.02, 0, 1.0, 0.35);
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

  // ======================================================================
  // EAST WING, ROOF, BASEMENT, HIDING SPOTS
  // ======================================================================
  const burnBox = (minX, minZ, maxX, maxZ, h, color, fuel, kind = 'bench') => {
    const m = furniture(scene, minX, minZ, maxX, maxZ, h, color, 'flammable');
    const cells = [];
    for (let y = Math.floor(minZ); y < Math.ceil(maxZ); y++) for (let x = Math.floor(minX); x < Math.ceil(maxX); x++) cells.push(y * W + x);
    out.burnables.push({ mesh: m, cells, kind, fuel, char: 0 });
    return m;
  };
  const plane = (w, h, color, x, y, z, ry = 0) => {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshLambertMaterial({ color }));
    m.position.set(x, y, z);
    m.rotation.y = ry;
    scene.add(m);
    return m;
  };

  // Reading-room door you can lock (registrars can't get in; they knock instead)
  const doorMesh = box(scene, 2, 2.2, 0.12, '#8a6a4a', 5, 1.1, 8.5, { mat: { unique: true } });
  box(scene, 0.4, 0.3, 0.02, '#f4f4f4', 5.5, 1.5, 8.43).visible = false;
  doorMesh.visible = false;
  let doorStatic = null;
  out.doorLocked = false;
  out.setDoorLocked = (on) => {
    out.doorLocked = on;
    doorMesh.visible = on;
    if (on && !doorStatic) doorStatic = addStatic(4, 8.4, 6, 8.6, 2.2, 'door');
    if (!on && doorStatic) { removeStatic(doorStatic); doorStatic = null; }
  };
  out.interactables.push({ id: 'door', x: 5, z: 8.5, r: 1.5, label: 'Lock the reading-room door' });

  // --- Staff toilets (south of the cafe) ---
  for (const zx of [54.45, 55.95]) furniture(scene, zx - 0.04, 22.7, zx + 0.04, 24.95, 2.0, '#9aa9b5');
  furniture(scene, 55.8, 21.05, 57.9, 21.7, 0.9, '#e8eef2');
  plane(1.8, 0.8, '#b8d6e6', 56.85, 1.7, 21.03, 0);
  sign(scene, 'TOILETS', 55.5, 2.6, 19.98, Math.PI, 1.2, 0.3);
  sign(scene, 'OUT OF\nORDER', 55.2, 1.3, 22.68, Math.PI, 0.5, 0.3, { bg: '#fff', fg: '#c00', font: 'bold 44px "Caveat", cursive' });
  out.interactables.push({ id: 'mirror', x: 56.8, z: 22.4, r: 1.0, label: 'Look in the mirror' });

  // --- Supply cupboard (south of the cafe) ---
  burnBox(62.3, 21.05, 62.95, 24.95, 2.2, '#7d7361', 1.5);
  burnBox(59.05, 23.4, 61.3, 24.0, 2.2, '#7d7361', 1.5);
  sign(scene, 'SUPPLY', 60.5, 2.6, 19.98, Math.PI, 1.2, 0.3, { bg: '#555', fg: '#fff', font: 'bold 60px "Archivo Narrow", Arial' });
  out.gelSpots = [{ x: 60, z: 22 }, { x: 61.5, z: 22.6 }, { x: 59.6, z: 22.9 }];

  // --- On-call room ---
  furniture(scene, 59, 1.2, 61.8, 3.2, 0.5, '#5b6e8c');
  box(scene, 0.8, 0.12, 0.5, '#fff', 61.2, 0.56, 2.2);
  furniture(scene, 55.1, 1.1, 56.3, 2.4, 2.0, '#6b4f36', 'flammable');
  furniture(scene, 61.9, 4.2, 62.9, 5.0, 0.6, '#6b4f36');
  const lamp = new THREE.PointLight(0xffc58a, 2.5, 6, 1.5);
  lamp.position.set(62.2, 1.2, 4.6);
  scene.add(lamp);
  sign(scene, 'ON-CALL ROOM', 58.5, 2.6, 9.02, 0, 1.8, 0.3);
  sign(scene, 'DO NOT\nDISTURB\n(please)', 58.5, 1.5, 8.02, Math.PI, 0.6, 0.5, { bg: '#fff9c4', fg: '#333', font: 'bold 36px "Caveat", cursive' });
  out.interactables.push({ id: 'bed', x: 58.3, z: 2.3, r: 1.1, label: 'Sleep in the on-call bed (90 min)' });

  // --- Chapel ---
  for (const z of [15.6, 17.1, 18.6, 20.1]) {
    burnBox(44.5, z, 47.05, z + 0.55, 0.5, '#6b4a2e', 1.2);
    burnBox(48.95, z, 51.5, z + 0.55, 0.5, '#6b4a2e', 1.2);
  }
  burnBox(46.2, 23.2, 49.8, 24.0, 1.0, '#e9e0c8', 1.4, 'altar');
  furniture(scene, 44.4, 23.3, 45.2, 24.0, 1.1, '#3b2d24');
  out.candles = [];
  for (let i = 0; i < 5; i++) {
    const c = box(scene, 0.05, 0.18, 0.05, '#f5f0e0', 44.55 + i * 0.13, 1.19, 23.65);
    const f = new THREE.Mesh(new THREE.SphereGeometry(0.03, 6, 4), new THREE.MeshBasicMaterial({ color: '#ffb347' }));
    f.position.set(44.55 + i * 0.13, 1.31, 23.65);
    f.visible = false;
    scene.add(f);
    out.candles.push(f);
    c.visible = true;
  }
  const glass = new THREE.Mesh(new THREE.PlaneGeometry(1.4, 2.0), new THREE.MeshBasicMaterial({ color: '#6a5acd' }));
  glass.position.set(48, 1.8, 24.97);
  glass.rotation.y = Math.PI;
  scene.add(glass);
  sign(scene, 'CHAPEL', 47.5, 2.6, 12.96, Math.PI, 1.4, 0.35, { bg: '#4b3a63', fg: '#fff', font: 'bold 60px "Archivo Narrow", Arial' });
  out.interactables.push({ id: 'candles', x: 45.1, z: 22.5, r: 1.0, label: 'Light a candle' });

  // --- Cafe (closed) ---
  furniture(scene, 53.1, 18.3, 58.8, 19.0, 1.0, '#8a5a3a');
  furniture(scene, 61.4, 18.9, 62.9, 19.95, 1.6, '#333');
  for (const [x, z] of [[55, 15.4], [58, 15.4], [61, 15.4], [60.5, 17.2]]) furniture(scene, x - 0.45, z - 0.45, x + 0.45, z + 0.45, 0.75, '#d9d2c3', 'flammable');
  out.cafeChairs = [[55, 16.5], [58, 16.5], [61, 16.5], [59.5, 17.2], [54, 15.4]];
  sign(scene, 'CAFE', 57.5, 2.6, 12.96, Math.PI, 1.2, 0.35, { bg: '#7a4b2a', fg: '#fff', font: 'bold 60px "Archivo Narrow", Arial' });
  sign(scene, 'CLOSED\n(opens 7:30)', 56, 1.4, 18.28, Math.PI, 1.0, 0.45, { bg: '#fff', fg: '#7a4b2a', font: 'bold 44px Arial' });
  out.interactables.push({ id: 'espresso', x: 62.1, z: 18.1, r: 1.1, label: 'Bash the cafe coffee machine' });

  // --- Corridor east: laundry hamper + lift ---
  furniture(scene, 53, 11.95, 54, 12.95, 1.0, '#4f7a8c', 'flammable');
  box(scene, 1.02, 0.1, 1.02, '#dcdcdc', 53.5, 1.02, 12.45);
  const liftDoor = (x, z, ry) => {
    plane(1.4, 2.2, '#9aa3ad', x, 1.1, z, ry);
    const s2 = sign(scene, 'LIFT', x, 2.5, z, ry, 0.8, 0.25, { bg: '#1d2733', fg: '#ffcf5a', font: 'bold 70px Arial' });
    s2.position.x += Math.sin(ry) * 0.01; s2.position.z += Math.cos(ry) * 0.01;
  };
  liftDoor(62.97, 10.5, -Math.PI / 2);
  out.lifts = {
    main: { x: 61.8, z: 10.5, yaw: Math.PI / 2 },
    roof: { x: 69.0, z: 7.5, yaw: -Math.PI / 2 },
    basement: { x: 67.6, z: 22.5, yaw: -Math.PI / 2 },
  };
  out.interactables.push({ id: 'lift', x: 62.2, z: 10.5, r: 1.3, label: 'Call the lift' });

  // --- Roof ---
  furniture(scene, 66.1, 6, 67.9, 9, 2.6, '#8d9299');
  liftDoor(67.92, 7.5, Math.PI / 2);
  out.interactables.push({ id: 'lift', x: 68.5, z: 7.5, r: 1.3, label: 'Call the lift' });
  // Helipad
  g.strokeStyle = '#f4f4f4'; g.lineWidth = 6;
  g.beginPath(); g.arc(81 * PX, 7 * PX, 4.2 * PX, 0, Math.PI * 2); g.stroke();
  g.fillStyle = '#f4f4f4'; g.font = `bold ${PX * 4}px Arial`; g.textAlign = 'center'; g.textBaseline = 'middle';
  g.fillText('H', 81 * PX, 7.2 * PX); g.textAlign = 'left'; g.textBaseline = 'alphabetic';
  floorTex.needsUpdate = true;
  const heli = new THREE.Group();
  const hb = new THREE.Mesh(new THREE.BoxGeometry(3.4, 1.5, 1.6), mat('#c62828'));
  hb.position.set(0, 1.05, 0); heli.add(hb);
  const hc = new THREE.Mesh(new THREE.SphereGeometry(0.8, 16, 10), new THREE.MeshLambertMaterial({ color: '#9fd3ff', transparent: true, opacity: 0.7 }));
  hc.position.set(-1.6, 1.05, 0); hc.scale.set(1, 0.9, 1); heli.add(hc);
  const tail = new THREE.Mesh(new THREE.BoxGeometry(3.2, 0.35, 0.3), mat('#c62828'));
  tail.position.set(3.2, 1.3, 0); heli.add(tail);
  for (const s of [-1, 1]) { const sk = new THREE.Mesh(new THREE.BoxGeometry(3.6, 0.08, 0.1), mat('#333')); sk.position.set(0, 0.15, s * 0.8); heli.add(sk); }
  const rotor = new THREE.Group();
  for (let i = 0; i < 2; i++) { const b = new THREE.Mesh(new THREE.BoxGeometry(8, 0.05, 0.25), mat('#222')); b.rotation.y = i * Math.PI / 2; rotor.add(b); }
  rotor.position.set(0, 2.0, 0); heli.add(rotor);
  heli.position.set(81, 0, 7);
  scene.add(heli);
  out.rotor = rotor;
  addStatic(79.2, 6.1, 82.8, 7.9, 1.8);
  addStatic(82.8, 6.8, 84.8, 7.2, 1.5);
  for (const [x, z] of [[72, 2.5], [74.5, 2.5], [90, 11], [90, 3]]) furniture(scene, x - 0.9, z - 0.7, x + 0.9, z + 0.7, 1.4, '#a4aab0');
  const beacon = new THREE.PointLight(0xff3030, 4, 10, 1.5);
  beacon.position.set(94, 2, 1);
  scene.add(beacon);
  out.beacon = beacon;
  const moon = new THREE.PointLight(0xaec6ff, 25, 40, 1.2);
  moon.position.set(80, 12, 7);
  scene.add(moon);
  sign(scene, 'NO THROWING THINGS\nOFF THE ROOF', 67.93, 1.8, 6.4, Math.PI / 2, 1.2, 0.5, { bg: '#fff', fg: '#c00', font: 'bold 38px Arial' });
  out.interactables.push({ id: 'heli', x: 80.5, z: 8.9, r: 1.3, label: 'Press buttons in the helicopter' });

  // --- Basement ---
  liftDoor(66.03, 22.5, Math.PI / 2);
  out.interactables.push({ id: 'lift', x: 66.9, z: 22.5, r: 1.3, label: 'Call the lift' });
  const drawers = document.createElement('canvas');
  drawers.width = 512; drawers.height = 200;
  const dg = drawers.getContext('2d');
  dg.fillStyle = '#b9c2c7'; dg.fillRect(0, 0, 512, 200);
  for (let i = 0; i < 8; i++) for (let j = 0; j < 3; j++) {
    dg.strokeStyle = '#6d777d'; dg.lineWidth = 3; dg.strokeRect(i * 64 + 4, j * 66 + 4, 56, 58);
    dg.fillStyle = '#8f999e'; dg.fillRect(i * 64 + 22, j * 66 + 28, 20, 6);
  }
  furniture(scene, 66.05, 17.05, 77.9, 17.7, 2.2, '#b9c2c7');
  const dw = new THREE.Mesh(new THREE.PlaneGeometry(11.8, 2.2), new THREE.MeshLambertMaterial({ map: new THREE.CanvasTexture(drawers) }));
  dw.position.set(72, 1.1, 17.71); scene.add(dw);
  furniture(scene, 73, 18.3, 75.2, 19.0, 0.9, '#c7cfd4');
  for (let x = 80; x < 94; x += 1.8) burnBox(x, 17.05, x + 1.6, 17.7, 2.3, '#5c4a30', 2.5, 'shelf');
  furniture(scene, 68, 25.4, 71, 27.6, 2.5, '#6e4b3a');
  const gauge = new THREE.Mesh(new THREE.CircleGeometry(0.2, 16), new THREE.MeshBasicMaterial({ color: '#f4f4f4' }));
  gauge.position.set(69.5, 1.6, 25.38); gauge.rotation.y = Math.PI; scene.add(gauge);
  out.gauge = gauge;
  furniture(scene, 84, 26, 86.5, 27.4, 1.6, '#6a6f5b');
  plane(1.6, 0.9, '#e8f0e0', 86.5, 1.6, 25.03);
  const darkroomLight = new THREE.PointLight(0xff2020, 3, 5, 1.5);
  darkroomLight.position.set(93.5, 2.4, 27.5);
  scene.add(darkroomLight);
  for (const [x, z] of [[72, 22], [86, 22]]) {
    const l = new THREE.PointLight(0xcfe8b0, 3, 10, 1.6);
    l.position.set(x, 2.7, z);
    scene.add(l);
  }
  sign(scene, 'MORGUE', 71.5, 2.6, 21.02, 0, 1.4, 0.3, { bg: '#2d3a40', fg: '#fff', font: 'bold 60px "Archivo Narrow", Arial' });
  sign(scene, 'FILM ARCHIVE', 86.5, 2.6, 21.02, 0, 2.0, 0.3, { bg: '#2d3a40', fg: '#fff', font: 'bold 60px "Archivo Narrow", Arial' });
  sign(scene, 'BOILER ROOM', 72.5, 2.6, 23.98, Math.PI, 1.8, 0.3, { bg: '#2d3a40', fg: '#ff9', font: 'bold 60px "Archivo Narrow", Arial' });
  sign(scene, 'RADIOLOGY 1972-1999', 88.5, 2.6, 23.98, Math.PI, 2.6, 0.3, { bg: '#5a4a2a', fg: '#fff', font: 'bold 54px "Archivo Narrow", Arial' });
  sign(scene, 'OLD FILMS\n1974-1998\n(highly flammable?)', 86, 2.55, 17.72, 0, 1.4, 0.55, { bg: '#fff9c4', fg: '#333', font: 'bold 34px "Caveat", cursive' });
  out.interactables.push(
    { id: 'boiler', x: 69.5, z: 25.2, r: 1.1, label: 'Crank up the boiler' },
    { id: 'oldbox', x: 86.5, z: 25.6, r: 1.2, label: 'Switch on the old lightbox' },
  );

  // --- Hiding spots ---
  const seat = out.seats[out.seats.length - 1];
  out.hideSpots = [
    { id: 'desk', label: 'under the reading-room desk', ix: 1.7, iz: 2.4, x: 1.6, z: 1.45, camY: 0.5, exit: { x: 1.8, z: 2.6 }, overlay: 'under', chance: 0.35, note: 'You curl up under the desk among 40 years of dust.' },
    { id: 'fridge', label: 'in the staff fridge', ix: 16.0, iz: 2.3, x: 17.05, z: 1.5, camY: 1.2, exit: { x: 16.8, z: 2.8 }, overlay: 'fridge', chance: 0.08, maxTime: 25, note: 'It is 4°C in here. The milk expired in March.' },
    { id: 'ct', label: 'inside the CT gantry', ix: 26.4, iz: 4.7, x: 25, z: 3.5, camY: 1.0, exit: { x: 26.5, z: 5.5 }, overlay: 'gantry', chance: 0.25, note: 'You lie on the CT table inside the gantry. Nobody would look here.' },
    { id: 'mri', label: 'inside the MRI bore', ix: 40.6, iz: 4.7, x: 39.9, z: 3.5, camY: 1.15, exit: { x: 41, z: 5.3 }, overlay: 'gantry', chance: 0.15, note: 'The magnet hums. Your bank cards are now blank.' },
    { id: 'blend', label: 'pretending to be a patient', ix: seat.x, iz: seat.z + 1.1, x: seat.x, z: seat.z, camY: 1.15, exit: { x: seat.x, z: seat.z + 1.1 }, overlay: 'blend', chance: 0.3, note: 'You slump in a waiting-room chair and moan convincingly.' },
    { id: 'stall', label: 'in a toilet stall', ix: 53.7, iz: 22.3, x: 53.7, z: 24.2, camY: 1.2, exit: { x: 54.2, z: 21.8 }, overlay: 'stall', chance: 0.05, note: 'You lock the stall. Surely they wouldn\'t...' },
    { id: 'supply', label: 'behind the supply shelves', ix: 60.2, iz: 22.8, x: 59.6, z: 24.5, camY: 1.0, exit: { x: 60.3, z: 22.2 }, overlay: 'shelves', chance: 0.15, note: 'You squeeze behind a pallet of size-S gloves.' },
    { id: 'underbed', label: 'under the on-call bed', ix: 60.2, iz: 3.9, x: 60.4, z: 2.2, camY: 0.3, exit: { x: 59.5, z: 4.2 }, overlay: 'under', chance: 0.3, note: 'Under the bed: a sock, a 2011 BNF and a pager that still beeps.' },
    { id: 'wardrobe', label: 'in the wardrobe', ix: 56.1, iz: 3.1, x: 55.7, z: 1.75, camY: 1.55, exit: { x: 56.2, z: 3.4 }, overlay: 'slats', chance: 0.2, note: 'You hide among abandoned scrubs. Narnia is not back here.' },
    { id: 'altar', label: 'behind the altar', ix: 48, iz: 22.4, x: 48, z: 24.5, camY: 0.9, exit: { x: 48, z: 22.2 }, overlay: 'dark', chance: 0.12, note: 'You crouch behind the altar and consider your choices.' },
    { id: 'counter', label: 'behind the cafe counter', ix: 56, iz: 17.6, x: 56, z: 19.5, camY: 0.8, exit: { x: 56, z: 17.4 }, overlay: 'dark', chance: 0.25, note: 'You hide behind the counter next to a sad tray of muffins.' },
    { id: 'hamper', label: 'in the laundry hamper', ix: 53.5, iz: 11.3, x: 53.5, z: 12.45, camY: 0.75, exit: { x: 53.5, z: 11.2 }, overlay: 'laundry', chance: 0.2, note: 'You burrow into the laundry. Some of it is damp. Don\'t think about it.' },
    { id: 'heli', label: 'in the helicopter', ix: 78.3, iz: 7, x: 80, z: 7, camY: 1.3, exit: { x: 77.6, z: 7 }, overlay: 'heli', chance: 0.1, note: 'You sit in the pilot\'s seat. You do not know how to fly.' },
    { id: 'drawer', label: 'in a morgue drawer', ix: 70.5, iz: 18.7, x: 70.5, z: 17.35, camY: 0.9, exit: { x: 70.5, z: 19.2 }, overlay: 'drawer', chance: 0.02, note: 'The drawer next to yours is labelled "RESERVED: NIGHT RADIOLOGIST".' },
    { id: 'films', label: 'between the film shelves', ix: 93, iz: 18.9, x: 93.8, z: 17.9, camY: 1.2, exit: { x: 92.5, z: 19.2 }, overlay: 'shelves', chance: 0.3, note: 'You hide among 30,000 unreported films. Some are yours.' },
    { id: 'boiler', label: 'behind the boiler', ix: 72.2, iz: 27, x: 67, z: 28.3, camY: 1.0, exit: { x: 72.4, z: 27 }, overlay: 'dark', chance: 0.15, note: 'It\'s warm and clanky back here.' },
    { id: 'darkroom', label: 'in the old darkroom', ix: 92.3, iz: 27.2, x: 93.6, z: 27.6, camY: 1.4, exit: { x: 91.6, z: 26.6 }, overlay: 'red', chance: 0.1, note: 'The red safelight still works. It smells of fixer and regret.' },
  ];
  for (const h of out.hideSpots) out.interactables.push({ id: 'hide:' + h.id, x: h.ix, z: h.iz, r: 1.0, label: 'Hide ' + h.label, hide: h });

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
