// Floor plan of the hospital as a grid. 1 cell = 1 metre. Cell (x, y) spans world X [x, x+1], world Z [y, y+1].
//   '#' wall   'G' lead-glass window wall   'F' fence / roof parapet   '.' indoor floor   'o' outdoor asphalt   'r' roof   ' ' void (nothing there)
// Three disconnected regions share the grid, joined only by the lift:
//   main building + ambulance bay (x 0-63), roof (x 65-95, y 0-14), basement (x 65-95, y 16-29).
export const W = 96;
export const H = 44;

export const grid = [];
for (let y = 0; y < H; y++) grid.push(new Array(W).fill(' '));
const fill = (x0, y0, x1, y1, c) => { for (let y = y0; y <= y1; y++) for (let x = x0; x <= x1; x++) grid[y][x] = c; };

// ---- Main building ----
fill(0, 0, 63, 25, '#');
fill(1, 1, 8, 7, '.');    // reading room
fill(10, 1, 17, 7, '.');  // tea room
fill(19, 1, 21, 7, '.');  // CT control room
fill(23, 1, 28, 7, '.');  // CT scan room
fill(30, 1, 32, 7, '.');  // MRI control room
fill(34, 1, 42, 7, '.');  // MRI scan room
fill(44, 1, 53, 7, '.');  // X-ray room
fill(55, 1, 62, 7, '.');  // on-call room
fill(1, 9, 62, 12, '.');  // corridor (runs the full width)
fill(1, 14, 20, 24, '.'); // resus
fill(22, 14, 42, 24, '.'); // waiting room
fill(44, 14, 51, 24, '.'); // chapel
fill(53, 14, 62, 19, '.'); // cafe
fill(53, 21, 57, 24, '.'); // staff toilets (through the cafe)
fill(59, 21, 62, 24, '.'); // supply cupboard (through the cafe)
fill(0, 26, 63, 43, 'F');          // fence box around the whole outdoor area
fill(1, 26, 62, 28, 'o');          // ambulance bay
fill(1, 31, 62, 42, 'o');          // staff car park
for (let y = 29; y <= 30; y++) for (let x = 27; x <= 35; x++) grid[y][x] = 'o'; // driveway ramp between them
const punch = (y, x0, x1) => { for (let x = x0; x <= x1; x++) grid[y][x] = '.'; };
punch(8, 4, 5);   // reading room door
punch(8, 13, 14); // tea room
punch(8, 20, 20); // CT control room
punch(8, 23, 24); // CT scan room
punch(8, 31, 31); // MRI control room
punch(8, 35, 36); // MRI scan room
punch(8, 46, 47); // X-ray room
punch(8, 58, 59); // on-call room
punch(13, 4, 17); // resus (open plan)
punch(13, 28, 31); // waiting room
punch(13, 47, 48); // chapel
punch(13, 57, 58); // cafe
punch(20, 55, 55); // toilets
punch(20, 60, 60); // supply
// Control rooms look into the scan rooms through lead glass, with a door beside the window.
for (const x of [22, 33]) { for (let y = 2; y <= 4; y++) grid[y][x] = 'G'; grid[6][x] = '.'; }
punch(25, 8, 12); // ambulance doors
punch(25, 30, 33); // front doors

// ---- Roof (lift from the east end of the corridor) ----
fill(65, 0, 95, 14, 'F');
fill(66, 1, 94, 13, 'r');

// ---- Basement ----
fill(65, 16, 95, 29, '#');
fill(66, 17, 77, 19, '.'); // morgue
fill(79, 17, 94, 19, '.'); // film archive
fill(66, 21, 94, 23, '.'); // basement corridor
fill(66, 25, 80, 28, '.'); // boiler room
fill(82, 25, 94, 28, '.'); // old radiology dept
punch(20, 71, 72); punch(20, 86, 87); punch(24, 72, 73); punch(24, 88, 89);

export const DOOR_ROWS = [[8, 1, 62], [13, 1, 62], [25, 1, 62], [20, 53, 62], [20, 66, 94], [24, 66, 94]];

export const ZONES = [
  { id: 'reading', name: 'Radiology Reading Room', x0: 1, y0: 1, x1: 8, y1: 7, floor: '#39424e', fuel: 0.7 },
  { id: 'tea', name: 'Staff Tea Room', x0: 10, y0: 1, x1: 17, y1: 7, floor: '#b9a47e', fuel: 0.55 },
  { id: 'ctctl', name: 'CT Control Room', x0: 19, y0: 1, x1: 22, y1: 7, floor: '#6f8ea3', fuel: 0.4 },
  { id: 'ct', name: 'CT', x0: 23, y0: 1, x1: 28, y1: 7, floor: '#a9c4d6', fuel: 0.3 },
  { id: 'mrictl', name: 'MRI Control Room', x0: 30, y0: 1, x1: 33, y1: 7, floor: '#7d7699', fuel: 0.4 },
  { id: 'mri', name: 'MRI (Zone 4)', x0: 34, y0: 1, x1: 42, y1: 7, floor: '#b8b0d0', fuel: 0.3 },
  { id: 'xray', name: 'X-ray Room', x0: 44, y0: 1, x1: 53, y1: 7, floor: '#b5c9b0', fuel: 0.3 },
  { id: 'toilets', name: 'Staff Toilets', x0: 53, y0: 21, x1: 57, y1: 24, floor: '#dfe6ea', fuel: 0.2 },
  { id: 'supply', name: 'Supply Cupboard', x0: 59, y0: 21, x1: 62, y1: 24, floor: '#a89f8a', fuel: 1.3 },
  { id: 'oncall', name: 'On-call Room', x0: 55, y0: 1, x1: 62, y1: 7, floor: '#8c7b6b', fuel: 0.7 },
  { id: 'corridor', name: 'Main Corridor', x0: 1, y0: 8, x1: 62, y1: 13, floor: '#9fb89a', fuel: 0.3 },
  { id: 'resus', name: 'Resus', x0: 1, y0: 14, x1: 20, y1: 24, floor: '#9fc0cf', fuel: 0.5 },
  { id: 'waiting', name: 'Waiting Room', x0: 22, y0: 14, x1: 42, y1: 25, floor: '#8fbab3', fuel: 0.6 },
  { id: 'chapel', name: 'Chapel', x0: 44, y0: 14, x1: 51, y1: 24, floor: '#7d6a8c', fuel: 0.9 },
  { id: 'cafe', name: 'Cafe (closed)', x0: 53, y0: 14, x1: 62, y1: 20, floor: '#c9b27c', fuel: 0.5 },
  { id: 'outside', name: 'Ambulance Bay', x0: 1, y0: 25, x1: 62, y1: 28, floor: '#3d3f44', fuel: 0 },
  { id: 'carpark', name: 'Staff Car Park', x0: 1, y0: 29, x1: 62, y1: 42, floor: '#44474d', fuel: 0, outdoor: true },
  { id: 'roof', name: 'Roof / Helipad', x0: 66, y0: 1, x1: 94, y1: 13, floor: '#4a4d52', fuel: 0, outdoor: true },
  { id: 'morgue', name: 'Morgue', x0: 66, y0: 17, x1: 77, y1: 19, floor: '#b8c4c8', fuel: 0.2 },
  { id: 'archive', name: 'Film Archive', x0: 79, y0: 17, x1: 94, y1: 19, floor: '#7a6848', fuel: 2.0 },
  { id: 'boiler', name: 'Boiler Room', x0: 66, y0: 25, x1: 80, y1: 28, floor: '#5a5550', fuel: 0.4 },
  { id: 'olddept', name: 'Old Radiology Dept (1972-1999)', x0: 82, y0: 25, x1: 94, y1: 28, floor: '#4a3d3d', fuel: 0.8 },
  { id: 'basement', name: 'Basement Corridor', x0: 66, y0: 20, x1: 94, y1: 24, floor: '#6d6a5e', fuel: 0.3 },
];
export const ZONE_BY_ID = Object.fromEntries(ZONES.map((z) => [z.id, z]));

const zoneGrid = [];
for (let y = 0; y < H; y++) {
  zoneGrid.push([]);
  for (let x = 0; x < W; x++) {
    let z = null;
    if (!isWallChar(grid[y][x]) && grid[y][x] !== ' ') {
      z = ZONES.find((zz) => x >= zz.x0 && x <= zz.x1 && y >= zz.y0 && y <= zz.y1) || ZONE_BY_ID.corridor;
    }
    zoneGrid[y].push(z);
  }
}

function isWallChar(c) { return c === '#' || c === 'F' || c === 'G'; }

export function inBounds(x, y) { return x >= 0 && y >= 0 && x < W && y < H; }
export function isWall(x, y) { return !inBounds(x, y) || isWallChar(grid[y][x]); }
export function isVoid(x, y) { return inBounds(x, y) && grid[y][x] === ' '; }
export function zoneAt(x, y) { return inBounds(x, y) ? zoneGrid[y][x] : null; }
export function zoneAtWorld(wx, wz) { return zoneAt(Math.floor(wx), Math.floor(wz)); }
export function isOutside(x, y) { return inBounds(x, y) && grid[y][x] === 'o'; }
export function regionAt(wx, wz) { return wx < 64.5 ? 'main' : wz < 15 ? 'roof' : 'basement'; }

// Static furniture (axis-aligned boxes). Also blocks NPC pathing on covered cells.
export const statics = [];
const blocked = new Uint8Array(W * H);
function markStatic(s, d) {
  for (let y = Math.floor(s.minZ); y < Math.ceil(s.maxZ); y++) {
    for (let x = Math.floor(s.minX); x < Math.ceil(s.maxX); x++) {
      if (!inBounds(x, y)) continue;
      // Block a cell if the box comes within an NPC's radius of its centre (otherwise NPCs path to a
      // cell centre they can never physically reach and get stuck against the furniture).
      const m = 0.22;
      if (s.minX < x + 1 - m && s.maxX > x + m && s.minZ < y + 1 - m && s.maxZ > y + m) blocked[y * W + x] += d;
    }
  }
}
export function addStatic(minX, minZ, maxX, maxZ, h, tag) {
  const s = { minX, minZ, maxX, maxZ, h, tag };
  statics.push(s);
  markStatic(s, 1);
  return s;
}
export function removeStatic(s) {
  const i = statics.indexOf(s);
  if (i < 0) return;
  statics.splice(i, 1);
  markStatic(s, -1);
}
export function walkable(x, y) { return !isWall(x, y) && !isVoid(x, y) && !blocked[y * W + x]; }

// Height of the highest furniture top under (x, z) that something at height `fromY` could stand on.
export function groundAt(x, z, fromY = 0) {
  const cx = Math.floor(x), cz = Math.floor(z);
  if (!inBounds(cx, cz) || grid[cz][cx] === ' ') return -100;
  let g = 0;
  for (const s of statics) {
    if (s.h > fromY + 0.05 || s.h <= g) continue;
    if (x > s.minX && x < s.maxX && z > s.minZ && z < s.maxZ) g = s.h;
  }
  return g;
}

// Push a circle out of walls and static furniture. Furniture lower than `aboveY` is ignored (you're on top of it).
// Returns true if it collided.
export function collideCircle(p, r, aboveY = 0) {
  let hit = false;
  const cx = Math.floor(p.x), cz = Math.floor(p.z);
  for (let y = cz - 1; y <= cz + 1; y++) {
    for (let x = cx - 1; x <= cx + 1; x++) {
      if (!isWall(x, y)) continue;
      if (inBounds(x, y) && grid[y][x] === 'F' && aboveY > 1.15) continue;
      if (pushOutBox(p, r, x, y, x + 1, y + 1)) hit = true;
    }
  }
  for (const s of statics) {
    if (s.h <= aboveY + 0.05) continue;
    if (p.x + r < s.minX || p.x - r > s.maxX || p.z + r < s.minZ || p.z - r > s.maxZ) continue;
    if (pushOutBox(p, r, s.minX, s.minZ, s.maxX, s.maxZ)) hit = true;
  }
  return hit;
}

function pushOutBox(p, r, minX, minZ, maxX, maxZ) {
  const qx = Math.max(minX, Math.min(p.x, maxX));
  const qz = Math.max(minZ, Math.min(p.z, maxZ));
  let dx = p.x - qx, dz = p.z - qz;
  const d2 = dx * dx + dz * dz;
  if (d2 >= r * r) return false;
  if (d2 > 1e-8) {
    const d = Math.sqrt(d2);
    p.x = qx + (dx / d) * r;
    p.z = qz + (dz / d) * r;
    p.nx = dx / d; p.nz = dz / d;
  } else {
    // Centre inside the box: push out along the shallowest axis.
    const l = p.x - minX, rr = maxX - p.x, t = p.z - minZ, b = maxZ - p.z;
    const m = Math.min(l, rr, t, b);
    if (m === l) { p.x = minX - r; p.nx = -1; p.nz = 0; }
    else if (m === rr) { p.x = maxX + r; p.nx = 1; p.nz = 0; }
    else if (m === t) { p.z = minZ - r; p.nx = 0; p.nz = -1; }
    else { p.z = maxZ + r; p.nx = 0; p.nz = 1; }
  }
  return true;
}

// Breadth-first search on the grid (8-connected, no corner cutting). Returns world-space waypoints.
export function findPath(fx, fz, tx, tz) {
  let sx = Math.floor(fx), sy = Math.floor(fz);
  let gx = Math.floor(tx), gy = Math.floor(tz);
  if (!walkable(gx, gy)) {
    const n = nearestWalkable(gx, gy);
    if (!n) return null;
    gx = n.x; gy = n.y;
  }
  if (!walkable(sx, sy)) {
    const n = nearestWalkable(sx, sy);
    if (!n) return null;
    sx = n.x; sy = n.y;
  }
  const start = sy * W + sx, goal = gy * W + gx;
  const prev = new Int32Array(W * H).fill(-1);
  prev[start] = start;
  const q = [start];
  let qi = 0;
  while (qi < q.length) {
    const cur = q[qi++];
    if (cur === goal) break;
    const cx = cur % W, cy = (cur / W) | 0;
    for (let dy = -1; dy <= 1; dy++) {
      for (let dx = -1; dx <= 1; dx++) {
        if (!dx && !dy) continue;
        const nx = cx + dx, ny = cy + dy;
        if (!walkable(nx, ny)) continue;
        if (dx && dy && (!walkable(cx + dx, cy) || !walkable(cx, cy + dy))) continue;
        const ni = ny * W + nx;
        if (prev[ni] !== -1) continue;
        prev[ni] = cur;
        q.push(ni);
      }
    }
  }
  if (prev[goal] === -1) return null;
  const path = [];
  for (let c = goal; c !== start; c = prev[c]) path.push({ x: (c % W) + 0.5, z: ((c / W) | 0) + 0.5 });
  path.reverse();
  if (path.length) { path[path.length - 1] = { x: tx, z: tz }; }
  return path;
}

export function nearestWalkable(x, y) {
  for (let r = 0; r < 6; r++) {
    for (let dy = -r; dy <= r; dy++) {
      for (let dx = -r; dx <= r; dx++) {
        if (Math.max(Math.abs(dx), Math.abs(dy)) !== r) continue;
        if (walkable(x + dx, y + dy)) return { x: x + dx, y: y + dy };
      }
    }
  }
  return null;
}

export function randomCellIn(zoneId, rng = Math.random) {
  const z = ZONE_BY_ID[zoneId];
  for (let i = 0; i < 60; i++) {
    const x = z.x0 + Math.floor(rng() * (z.x1 - z.x0 + 1));
    const y = z.y0 + Math.floor(rng() * (z.y1 - z.y0 + 1));
    if (walkable(x, y) && zoneAt(x, y) === z) return { x: x + 0.5, z: y + 0.5 };
  }
  return { x: (z.x0 + z.x1) / 2 + 0.5, z: (z.y0 + z.y1) / 2 + 0.5 };
}

// March a ray along the floor plane and report the distance to the first wall (for line of sight / aiming).
export function wallDistance(ox, oz, dx, dz, maxD) {
  const step = 0.05;
  for (let d = 0; d < maxD; d += step) {
    if (isWall(Math.floor(ox + dx * d), Math.floor(oz + dz * d))) return d;
  }
  return maxD;
}
