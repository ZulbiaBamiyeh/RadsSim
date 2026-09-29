// Floor plan of the ED as a grid. 1 cell = 1 metre. Cell (x, y) spans world X [x, x+1], world Z [y, y+1].
//   '#' wall   'F' outdoor fence   '.' indoor floor   'o' outdoor asphalt
export const W = 44;
export const H = 30;

const rows = [];
const rep = (c, n) => c.repeat(n);
rows.push(rep('#', W));
for (let y = 1; y <= 7; y++) rows.push('#' + rep('.', 8) + '#' + rep('.', 8) + '#' + rep('.', 10) + '#' + rep('.', 13) + '#');
rows.push(rep('#', W)); // y = 8, doors punched below
for (let y = 9; y <= 12; y++) rows.push('#' + rep('.', 42) + '#');
rows.push(rep('#', W)); // y = 13
for (let y = 14; y <= 24; y++) rows.push('#' + rep('.', 20) + '#' + rep('.', 21) + '#');
rows.push(rep('#', 8) + rep('.', 5) + rep('#', 17) + rep('.', 4) + rep('#', 10)); // y = 25
for (let y = 26; y <= 28; y++) rows.push('F' + rep('o', 42) + 'F');
rows.push(rep('F', W));

export const grid = rows.map((r) => r.split(''));
const punch = (y, x0, x1) => { for (let x = x0; x <= x1; x++) grid[y][x] = '.'; };
punch(8, 4, 5);   // reading room door
punch(8, 13, 14); // tea room
punch(8, 23, 24); // CT
punch(8, 35, 36); // MRI
punch(13, 4, 17); // resus (open plan)
punch(13, 28, 31); // waiting room

export const ZONES = [
  { id: 'reading', name: 'Radiology Reading Room', x0: 1, y0: 1, x1: 8, y1: 7, floor: '#39424e', fuel: 0.7 },
  { id: 'tea', name: 'Staff Tea Room', x0: 10, y0: 1, x1: 17, y1: 7, floor: '#b9a47e', fuel: 0.55 },
  { id: 'ct', name: 'CT', x0: 19, y0: 1, x1: 28, y1: 7, floor: '#a9c4d6', fuel: 0.3 },
  { id: 'mri', name: 'MRI (Zone 4)', x0: 30, y0: 1, x1: 42, y1: 7, floor: '#b8b0d0', fuel: 0.3 },
  { id: 'corridor', name: 'Main Corridor', x0: 1, y0: 8, x1: 42, y1: 13, floor: '#9fb89a', fuel: 0.3 },
  { id: 'resus', name: 'Resus', x0: 1, y0: 14, x1: 20, y1: 24, floor: '#9fc0cf', fuel: 0.5 },
  { id: 'waiting', name: 'Waiting Room', x0: 22, y0: 14, x1: 42, y1: 25, floor: '#8fbab3', fuel: 0.6 },
  { id: 'outside', name: 'Ambulance Bay', x0: 1, y0: 25, x1: 42, y1: 28, floor: '#3d3f44', fuel: 0 },
];
export const ZONE_BY_ID = Object.fromEntries(ZONES.map((z) => [z.id, z]));

const zoneGrid = [];
for (let y = 0; y < H; y++) {
  zoneGrid.push([]);
  for (let x = 0; x < W; x++) {
    let z = null;
    if (!isWallChar(grid[y][x])) {
      z = ZONES.find((zz) => x >= zz.x0 && x <= zz.x1 && y >= zz.y0 && y <= zz.y1) || ZONE_BY_ID.corridor;
    }
    zoneGrid[y].push(z);
  }
}

function isWallChar(c) { return c === '#' || c === 'F'; }

export function inBounds(x, y) { return x >= 0 && y >= 0 && x < W && y < H; }
export function isWall(x, y) { return !inBounds(x, y) || isWallChar(grid[y][x]); }
export function zoneAt(x, y) { return inBounds(x, y) ? zoneGrid[y][x] : null; }
export function zoneAtWorld(wx, wz) { return zoneAt(Math.floor(wx), Math.floor(wz)); }
export function isOutside(x, y) { return inBounds(x, y) && grid[y][x] === 'o'; }

// Static furniture (axis-aligned boxes). Also blocks NPC pathing on covered cells.
export const statics = [];
const blocked = new Uint8Array(W * H);
export function addStatic(minX, minZ, maxX, maxZ, h, tag) {
  const s = { minX, minZ, maxX, maxZ, h, tag };
  statics.push(s);
  for (let y = Math.floor(minZ); y < Math.ceil(maxZ); y++) {
    for (let x = Math.floor(minX); x < Math.ceil(maxX); x++) {
      if (!inBounds(x, y)) continue;
      // Only block a cell if the box covers its centre.
      if (x + 0.5 > minX && x + 0.5 < maxX && y + 0.5 > minZ && y + 0.5 < maxZ) blocked[y * W + x] = 1;
    }
  }
  return s;
}
export function walkable(x, y) { return !isWall(x, y) && !blocked[y * W + x]; }

// Height of the highest furniture top under (x, z) that something at height `fromY` could stand on.
export function groundAt(x, z, fromY = 0) {
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
