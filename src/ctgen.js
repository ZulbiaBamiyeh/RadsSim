// Procedural CT generator. Each study is a stack of 256x256 slices of Hounsfield units, painted from
// simple analytic anatomy (ellipses, rings, boxes) plus pathology overlays. Slices are generated lazily and cached.
export const N = 256;
const H2 = N / 2;

export function mulberry32(seed) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function hash3(x, y, z) {
  let h = Math.imul(x | 0, 374761393) + Math.imul(y | 0, 668265263) + Math.imul(z | 0, 1442695041);
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  h ^= h >>> 16;
  return (h >>> 0) / 4294967296;
}

const smooth = (a, b, x) => { const t = Math.max(0, Math.min(1, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
// Ellipsoid profile: 0 outside [z0, z1], 1 at the middle.
const prof = (z, z0, z1) => {
  if (z < z0 || z > z1) return 0;
  const t = (2 * (z - z0)) / (z1 - z0) - 1;
  return Math.sqrt(1 - t * t);
};
const inR = (z, z0, z1) => z >= z0 && z <= z1;

// ---------- raster primitives (normalised coords: -1..1, +y = anterior at top of image) ----------
function E(b, cx, cy, rx, ry, rot, val, clip) {
  if (rx <= 0.002 || ry <= 0.002) return;
  const R = Math.max(rx, ry);
  const x0 = Math.max(0, Math.floor((cx - R + 1) * H2)), x1 = Math.min(N - 1, Math.ceil((cx + R + 1) * H2));
  const y0 = Math.max(0, Math.floor((cy - R + 1) * H2)), y1 = Math.min(N - 1, Math.ceil((cy + R + 1) * H2));
  const c = Math.cos(rot), s = Math.sin(rot);
  const fn = typeof val === 'function';
  for (let py = y0; py <= y1; py++) {
    const v = (py + 0.5) / H2 - 1;
    for (let px = x0; px <= x1; px++) {
      const u = (px + 0.5) / H2 - 1;
      const dx = u - cx, dy = v - cy;
      const lx = (dx * c + dy * s) / rx, ly = (-dx * s + dy * c) / ry;
      const d2 = lx * lx + ly * ly;
      if (d2 > 1) continue;
      if (clip) {
        const qx = (u - clip.cx) / clip.rx, qy = (v - clip.cy) / clip.ry;
        if (qx * qx + qy * qy > 1) continue;
      }
      const i = py * N + px;
      b[i] = fn ? val(b[i], u, v, lx, ly, Math.sqrt(d2)) : val;
    }
  }
}
// Bone-like: cortical ring + marrow.
function bone(b, cx, cy, rx, ry, rot, cort = 900, marrow = 280, t = 0.25) {
  E(b, cx, cy, rx, ry, rot, (o, u, v, lx, ly, d) => (d > 1 - t ? cort : marrow));
}
function box(b, cx, cy, hw, hh, rot, val) {
  const R = Math.hypot(hw, hh);
  const x0 = Math.max(0, Math.floor((cx - R + 1) * H2)), x1 = Math.min(N - 1, Math.ceil((cx + R + 1) * H2));
  const y0 = Math.max(0, Math.floor((cy - R + 1) * H2)), y1 = Math.min(N - 1, Math.ceil((cy + R + 1) * H2));
  const c = Math.cos(rot), s = Math.sin(rot);
  const fn = typeof val === 'function';
  for (let py = y0; py <= y1; py++) {
    const v = (py + 0.5) / H2 - 1;
    for (let px = x0; px <= x1; px++) {
      const u = (px + 0.5) / H2 - 1;
      const dx = u - cx, dy = v - cy;
      const lx = dx * c + dy * s, ly = -dx * s + dy * c;
      if (Math.abs(lx) > hw || Math.abs(ly) > hh) continue;
      const i = py * N + px;
      b[i] = fn ? val(b[i], u, v, lx / hw, ly / hh) : val;
    }
  }
}
// Radial streaks from metal (beam hardening), the classic foreign-body look.
function streaks(b, cx, cy, strength, seed) {
  const ph = seed * 6.28;
  for (let py = 0; py < N; py++) {
    const v = (py + 0.5) / H2 - 1;
    for (let px = 0; px < N; px++) {
      const u = (px + 0.5) / H2 - 1;
      const dx = u - cx, dy = v - cy;
      const d = Math.sqrt(dx * dx + dy * dy);
      if (d < 0.02 || b[py * N + px] < -800) continue;
      const a = Math.atan2(dy, dx);
      const s = Math.sin(a * 9 + ph) * Math.sin(a * 5 - ph * 2);
      b[py * N + px] += strength * s * Math.exp(-d * 6);
    }
  }
}

function finish(b, sliceIdx, seed, amp = 22) {
  // 3x3 box blur (partial volume) then quantum noise.
  const o = new Float32Array(N * N);
  for (let y = 0; y < N; y++) {
    for (let x = 0; x < N; x++) {
      let s = 0, n = 0;
      for (let dy = -1; dy <= 1; dy++) {
        const yy = y + dy;
        if (yy < 0 || yy >= N) continue;
        for (let dx = -1; dx <= 1; dx++) {
          const xx = x + dx;
          if (xx < 0 || xx >= N) continue;
          s += b[yy * N + xx]; n++;
        }
      }
      const base = s / n;
      const nz = base > -950 ? (hash3(x, y, sliceIdx * 7919 + seed) + hash3(y, x, sliceIdx + seed * 3) - 1) * amp : 0;
      o[y * N + x] = base + nz;
    }
  }
  return o;
}

const newBuf = () => new Float32Array(N * N).fill(-1000);

// ---------- ABDOMEN / PELVIS ----------
function setupAbdo(S, rng) {
  S.loops = [];
  const sbo = S.path === 'sbo';
  const count = sbo ? 11 : 24;
  for (let i = 0; i < count; i++) {
    const r = sbo ? 0.1 + rng() * 0.045 : 0.035 + rng() * 0.035;
    S.loops.push({
      x: -0.4 + rng() * 0.8, y: -0.33 + rng() * (sbo ? 0.33 : 0.45), r,
      z0: sbo ? 0.26 + rng() * 0.28 : 0.34 + rng() * 0.5, len: sbo ? 0.16 + rng() * 0.16 : 0.07 + rng() * 0.14,
      dx: (rng() - 0.5) * 0.4, dy: (rng() - 0.5) * 0.3,
      content: sbo ? 'level' : rng() < 0.5 ? 'fluid' : rng() < 0.7 ? 'level' : 'air',
    });
  }
  if (sbo) {
    for (let i = 0; i < 8; i++) S.loops.push({ x: -0.3 + rng() * 0.6, y: -0.2 + rng() * 0.3, r: 0.025, z0: 0.72 + rng() * 0.12, len: 0.08, dx: 0, dy: 0, content: 'collapsed' });
  }
  S.liverVessels = [];
  for (let i = 0; i < 7; i++) S.liverVessels.push({ x: -0.45 + rng() * 0.3, y: -0.2 + rng() * 0.3, r: 0.012 + rng() * 0.02, z0: rng() * 0.3, len: 0.06 + rng() * 0.1 });
  S.side = rng() < 0.5 ? -1 : 1;
  S.metalSeed = rng();
  const L = {
    freeair: { x: 0, y: -0.38, r: 0.12, z0: 0.08, z1: 0.5 },
    collection: { x: -0.32, y: 0, r: 0.14, z0: 0.58, z1: 0.74 },
    sbo: { x: 0.05, y: -0.1, r: 0.3, z0: 0.3, z1: 0.68 },
    aaa: { x: 0.04, y: 0.2, r: 0.18, z0: 0.36, z1: 0.68 },
    appendicitis: { x: -0.37, y: 0.05, r: 0.09, z0: 0.64, z1: 0.8 },
    renal_stone: { x: 0.13 * S.side, y: 0.25, r: 0.06, z0: 0.62, z1: 0.7 },
    fork: { x: 0.24, y: -0.12, r: 0.15, z0: 0.08, z1: 0.26 },
    pager: { x: 0.24, y: -0.12, r: 0.1, z0: 0.12, z1: 0.22 },
    sandwich: { x: 0.24, y: -0.12, r: 0.13, z0: 0.08, z1: 0.24 },
    necfasc: { x: -0.62, y: -0.2, r: 0.25, z0: 0.62, z1: 0.98 },
  };
  S.lesionN = L[S.path] || null;
}

function drawAbdo(S, z) {
  const b = newBuf();
  const p = S.path;
  const pel = smooth(0.6, 0.92, z);
  const bx = 0.8 + 0.05 * pel, by = 0.58 - 0.02 * pel, cy = 0.06;
  E(b, 0, cy, bx, by, 0, 40);
  E(b, 0, cy, bx - 0.025, by - 0.025, 0, -105);
  E(b, 0, cy + 0.01, bx - 0.1, by - 0.09, 0, 55);
  const cav = { cx: 0, cy: cy + 0.015, rx: bx - 0.14, ry: by - 0.13 };
  E(b, cav.cx, cav.cy, cav.rx, cav.ry, 0, (o, u, v) => -95 + (hash3(u * 90, v * 90, 3) < 0.04 ? 60 : 0));

  // Paraspinal + psoas
  E(b, -0.16, 0.5, 0.12, 0.1, 0.2, 52);
  E(b, 0.16, 0.5, 0.12, 0.1, -0.2, 52);
  if (z > 0.38) {
    const ps = 0.03 + 0.07 * smooth(0.38, 0.8, z);
    const off = 0.13 + 0.12 * smooth(0.75, 1, z);
    E(b, -off, 0.3, ps, 0.06 + ps * 0.3, 0, 55);
    E(b, off, 0.3, ps, 0.06 + ps * 0.3, 0, 55);
  }

  // Spine / sacrum
  if (z < 0.64) {
    const disc = ((z * 11) % 1) < 0.18;
    bone(b, 0, 0.33, 0.1, 0.09, 0, disc ? 90 : 850, disc ? 90 : 260, 0.22);
    E(b, 0, 0.46, 0.045, 0.04, 0, 10);
    bone(b, -0.06, 0.52, 0.04, 0.05, 0.6, 850, 300, 0.4);
    bone(b, 0.06, 0.52, 0.04, 0.05, -0.6, 850, 300, 0.4);
    bone(b, 0, 0.57, 0.02, 0.05, 0, 850, 300, 0.5);
  } else {
    bone(b, 0, 0.4, 0.15 - 0.05 * pel, 0.07, 0, 700, 250, 0.3);
  }
  // Iliac wings then acetabula / femoral heads
  if (inR(z, 0.58, 0.88)) {
    const t = smooth(0.58, 0.88, z);
    const ex = 0.5 - 0.05 * t, ey = 0.26 - 0.12 * t;
    bone(b, -ex, ey, 0.2 - 0.06 * t, 0.045, 0.9 - 0.4 * t, 800, 250, 0.35);
    bone(b, ex, ey, 0.2 - 0.06 * t, 0.045, -0.9 + 0.4 * t, 800, 250, 0.35);
  }
  if (z > 0.88) {
    bone(b, -0.46, 0.12, 0.11, 0.11, 0, 800, 330, 0.18);
    bone(b, 0.46, 0.12, 0.11, 0.11, 0, 800, 330, 0.18);
  }

  // Aorta / IVC / iliacs
  if (z < 0.72) {
    if (p === 'aaa' && inR(z, 0.36, 0.68)) {
      const r = 0.06 + 0.12 * prof(z, 0.36, 0.68);
      E(b, 0.04, 0.2, r, r * 0.95, 0, 45, cav);
      E(b, 0.04 - r * 0.25, 0.2 - r * 0.15, Math.max(0.05, r * 0.5), Math.max(0.05, r * 0.45), 0, 190);
      E(b, 0.04, 0.2, r, r * 0.95, 0, (o, u, v, lx, ly, d) => (d > 0.93 ? 250 : o));
    } else {
      E(b, 0.04, 0.2, 0.055, 0.055, 0, 190);
    }
    E(b, -0.09, 0.19, 0.06, 0.045, 0.2, 135);
  } else if (z < 0.93) {
    const t = (z - 0.72) * 1.3;
    E(b, -0.06 - t, 0.22 - t * 0.2, 0.035, 0.035, 0, 190);
    E(b, 0.08 + t, 0.22 - t * 0.2, 0.035, 0.035, 0, 190);
    E(b, -0.08 - t, 0.28 - t * 0.2, 0.04, 0.035, 0, 135);
    E(b, 0.12 + t, 0.28 - t * 0.2, 0.04, 0.035, 0, 135);
  }

  // Liver + vessels + GB
  const lv = prof(z, -0.12, 0.44);
  if (lv > 0) {
    E(b, -0.3, -0.02, 0.42 * lv, 0.38 * lv, 0.1, 108, cav);
    if (z < 0.22) E(b, -0.02, -0.18, 0.24 * lv, 0.12 * lv, -0.2, 108, cav);
    for (const v of S.liverVessels) if (inR(z, v.z0, v.z0 + v.len)) E(b, v.x, v.y, v.r, v.r, 0, 165, cav);
    if (inR(z, 0.22, 0.37)) E(b, -0.22, -0.1, 0.07 * prof(z, 0.2, 0.39), 0.06 * prof(z, 0.2, 0.39), 0.3, 12, cav);
  }
  // Spleen
  const sp = prof(z, -0.05, 0.3);
  if (sp > 0) E(b, 0.46, 0.18, 0.13 * sp, 0.22 * sp, -0.5, 112, cav);
  // Stomach
  const st = prof(z, 0.0, 0.32);
  if (st > 0) {
    E(b, 0.24, -0.12, 0.2 * st, 0.15 * st, -0.3, 50, cav);
    const lvl = -0.12 - 0.02;
    E(b, 0.24, -0.12, 0.17 * st, 0.12 * st, -0.3, (o, u, v) => (v < lvl ? -950 : 18), cav);
  }
  // Pancreas
  if (inR(z, 0.26, 0.37)) E(b, 0.08, 0.1, 0.25 * prof(z, 0.24, 0.39), 0.05, -0.15, 95, cav);
  // Kidneys
  for (const side of [-1, 1]) {
    const k0 = side < 0 ? 0.3 : 0.27;
    const kp = prof(z, k0, k0 + 0.27);
    if (kp <= 0) continue;
    const hydro = p === 'renal_stone' && S.side === side;
    const kx = 0.31 * side, ky = 0.24;
    E(b, kx, ky, 0.09 * kp, 0.13 * kp, 0.45 * side, 165);
    E(b, kx - 0.03 * side, ky - 0.01, (hydro ? 0.06 : 0.035) * kp, (hydro ? 0.08 : 0.05) * kp, 0.45 * side, hydro ? 8 : -60);
  }
  // Ureter + stone
  if (p === 'renal_stone') {
    if (inR(z, 0.52, 0.67)) E(b, 0.14 * S.side, 0.26, 0.025, 0.025, 0, (o, u, v, lx, ly, d) => (d > 0.6 ? 60 : 8));
    if (inR(z, 0.665, 0.69)) E(b, 0.14 * S.side, 0.26, 0.022, 0.02, 0, 1100);
  }

  // Colon
  const stool = (o, u, v, lx, ly, d) => (d > 0.85 ? 50 : hash3(u * 70, v * 70, 11) < 0.4 ? -750 : 25);
  if (inR(z, 0.38, 0.8)) E(b, -0.48, 0.02, 0.085, 0.08, 0, stool, cav);
  if (inR(z, 0.28, 0.8)) E(b, 0.5, 0.1, 0.07, 0.065, 0, stool, cav);
  if (inR(z, 0.32, 0.42)) E(b, 0, -0.3, 0.46, 0.07, 0, stool, cav);
  if (inR(z, 0.78, 0.9)) E(b, 0.2 - (z - 0.78) * 1.5, 0.12 + (z - 0.78), 0.07, 0.06, 0.4, stool, cav);
  if (z > 0.88) E(b, 0, 0.34, 0.06, 0.05, 0, stool);

  // Small bowel
  for (const l of S.loops) {
    if (!inR(z, l.z0, l.z0 + l.len)) continue;
    const t = (z - l.z0) / l.len;
    const x = l.x + l.dx * t, y = l.y + l.dy * t;
    const r = l.r * (0.75 + 0.25 * Math.sin(t * Math.PI));
    if (l.content === 'collapsed') { E(b, x, y, r, r, 0, 60, cav); continue; }
    E(b, x, y, r, r, 0, 60, cav);
    const lvl = y - r * 0.35;
    const ir = r * (S.path === 'sbo' ? 0.9 : 0.72);
    E(b, x, y, ir, ir, 0, l.content === 'fluid' ? 15 : l.content === 'air' ? -900 : (o, u, v) => (v < lvl ? -920 : 15), cav);
  }

  // Bladder
  const bl = prof(z, 0.78, 1.08);
  if (bl > 0) E(b, 0, -0.08, 0.2 * bl, 0.15 * bl, 0, 8, cav);

  // Pathology overlays
  if (p === 'freeair' && inR(z, 0.05, 0.55)) {
    const top = cav.cy - cav.ry;
    const depth = 0.05 + 0.06 * prof(z, 0.05, 0.55);
    E(b, cav.cx, cav.cy, cav.rx, cav.ry, 0, (o, u, v) => (v < top + depth * (1 - (u * u) / (cav.rx * cav.rx) * 0.9) ? -980 : o));
    if (inR(z, 0.15, 0.3)) E(b, -0.12, -0.28, 0.02, 0.015, 0, -980, cav);
  }
  if (p === 'collection' && inR(z, 0.56, 0.76)) {
    const k = prof(z, 0.56, 0.76);
    E(b, -0.32, 0, 0.19 * k, 0.17 * k, 0.3, (o, u, v) => (o < -60 ? o + 45 + (hash3(u * 80, v * 80, 5) - 0.5) * 60 : o), cav);
    E(b, -0.32, 0, 0.11 * k, 0.09 * k, 0.3, (o, u, v, lx, ly, d) => (d > 0.82 ? 130 : ly < -0.55 && d < 0.7 ? -900 : 20), cav);
  }
  if (p === 'appendicitis' && inR(z, 0.64, 0.8)) {
    const t = (z - 0.64) / 0.16;
    const x = -0.37 + 0.05 * t, y = 0.05 - 0.04 * t;
    E(b, x, y, 0.11, 0.1, 0, (o, u, v) => (o < -60 ? o + 50 + (hash3(u * 80, v * 80, 9) - 0.5) * 70 : o), cav);
    E(b, x, y, 0.045, 0.045, 0, (o, u, v, lx, ly, d) => (d > 0.6 ? 125 : 22));
    if (inR(z, 0.69, 0.71)) E(b, x, y, 0.016, 0.016, 0, 950);
  }
  if (p === 'necfasc' && inR(z, 0.62, 0.98)) {
    // Gas tracking through the subcutaneous fat and fascia of the right flank/groin, with fat stranding.
    const k = prof(z, 0.62, 0.98);
    E(b, -0.6, -0.18, 0.32 * k + 0.08, 0.36 * k + 0.08, 0.5, (o, u, v) => {
      const q = ((u - cav.cx) / cav.rx) ** 2 + ((v - cav.cy) / cav.ry) ** 2;
      if (q <= 1 || o < -500) return o;
      const h = hash3(u * 110, v * 110, 31);
      if (h < 0.09) return -950;
      if (h < 0.13) return -600;
      return o < -50 ? -35 + (hash3(u * 60, v * 60, 32) - 0.5) * 50 : o + 15;
    });
  }
  if (p === 'fork' && inR(z, 0.08, 0.26)) {
    const k = (z - 0.08) / 0.18;
    const cx = 0.14 + 0.2 * k, cy2 = -0.12;
    if (k < 0.6) box(b, cx, cy2, 0.013, 0.013, 0, 3000);
    else for (let i = 0; i < 4; i++) box(b, cx + (i - 1.5) * 0.02, cy2, 0.006, 0.006, 0, 3000);
    streaks(b, cx, cy2, 450, S.metalSeed);
  }
  if (p === 'pager' && inR(z, 0.12, 0.22)) {
    box(b, 0.24, -0.12, 0.07, 0.035, 0.3, (o, u, v, a, c) => (Math.abs(a) > 0.85 || Math.abs(c) > 0.7 ? 2500 : 400));
    streaks(b, 0.24, -0.12, 380, S.metalSeed);
  }
  if (p === 'sandwich' && inR(z, 0.08, 0.24)) {
    box(b, 0.24, -0.12, 0.12, 0.07, -0.25, (o, u, v, a, c) => {
      if (Math.abs(c) > 0.55) return hash3(u * 90, v * 90, 21) < 0.35 ? -600 : -150; // bread
      if (Math.abs(c) > 0.3) return 170; // cheese
      return hash3(u * 40, v * 40, 22) < 0.5 ? 55 : -80; // mystery filling
    });
  }
  return b;
}

// ---------- HEAD ----------
function setupHead(S, rng) {
  S.sulci = [];
  for (let i = 0; i < 70; i++) S.sulci.push({ a: rng() * Math.PI * 2, rr: 0.86 + rng() * 0.1, z0: rng() * 0.75, len: 0.05 + rng() * 0.12 });
  S.side = rng() < 0.5 ? -1 : 1;
  const L = {
    edh: { x: 0.5 * S.side, y: -0.15, r: 0.2, z0: 0.25, z1: 0.55 },
    sdh: { x: 0.52 * S.side, y: 0.05, r: 0.25, z0: 0.12, z1: 0.66 },
    infarct: { x: 0.3 * S.side, y: -0.05, r: 0.28, z0: 0.3, z1: 0.62 },
    sah: { x: 0, y: -0.05, r: 0.25, z0: 0.6, z1: 0.8 },
  };
  S.lesionN = L[S.path] || null;
}

function drawHead(S, z) {
  const b = newBuf();
  const p = S.path;
  const sk = z < 0.45 ? 0.45 + 0.55 * Math.sin((Math.min(1, (z + 0.03) / 0.48) * Math.PI) / 2) : z < 0.78 ? 1 : 1 - (z - 0.78) * 0.5;
  const ax = 0.7 * sk, ay = 0.86 * sk;
  E(b, 0, 0, ax + 0.04, ay + 0.04, 0, 35);
  E(b, 0, 0, ax, ay, 0, 1300);
  const brain = { cx: 0, cy: 0, rx: ax - 0.06, ry: ay - 0.06 };
  E(b, 0, 0, brain.rx, brain.ry, 0, 38);
  const shift = p === 'edh' || p === 'sdh' ? -0.07 * S.side * prof(z, 0.05, 0.75) : 0;
  if (z < 0.74) {
    E(b, shift * 0.6, 0, brain.rx * 0.78, brain.ry * 0.8, 0, (o, u, v) => 28 + (hash3(u * 40, v * 40, 2) - 0.5) * 4, brain);
    for (const s of S.sulci) {
      if (!inR(z, s.z0, s.z0 + s.len)) continue;
      E(b, Math.cos(s.a) * brain.rx * s.rr, Math.sin(s.a) * brain.ry * s.rr, 0.035, 0.012, s.a + Math.PI / 2, 8, brain);
    }
    box(b, shift, 0, 0.006, brain.ry * 0.95, 0, 65);
  }
  if (inR(z, 0.32, 0.62)) {
    const k = prof(z, 0.3, 0.64);
    E(b, -0.09 + shift, -0.05, 0.055 * k + 0.01, 0.3 * k, 0.18, 6);
    E(b, 0.09 + shift, -0.05, 0.055 * k + 0.01, 0.3 * k, -0.18, 6);
  }
  if (inR(z, 0.56, 0.68)) E(b, shift, 0.05, 0.014, 0.09, 0, 6);
  if (z > 0.72) {
    E(b, 0, 0.36, 0.42 * sk, 0.3 * sk, 0, 40, brain);
    E(b, 0, 0.08, 0.1, 0.09, 0, 34);
    E(b, 0, 0.22, 0.03, 0.025, 0, 6);
    if (z > 0.8) {
      E(b, -0.3, 0.12, 0.28, 0.05, 0.7, 1500);
      E(b, 0.3, 0.12, 0.28, 0.05, -0.7, 1500);
    }
    if (inR(z, 0.76, 0.95)) {
      for (const sx of [-0.3, 0.3]) {
        E(b, sx, -0.72, 0.15, 0.14, 0, -85);
        E(b, sx, -0.74, 0.11, 0.11, 0, 12);
        E(b, sx, -0.84, 0.035, 0.015, 0, 70);
      }
      E(b, 0, -0.35, 0.1, 0.09, 0, -950);
    }
  }
  if (inR(z, 0.6, 0.74)) E(b, 0, -ay + 0.03, 0.08, 0.035, 0, -950);

  // Pathology
  if (p === 'edh' && inR(z, 0.25, 0.55)) {
    const k = prof(z, 0.25, 0.55);
    E(b, brain.rx * 0.92 * S.side, -0.15, 0.13 * k, 0.32 * k, 0, 72, brain);
  }
  if (p === 'sdh' && inR(z, 0.12, 0.66)) {
    const k = prof(z, 0.12, 0.66);
    E(b, 0, 0, brain.rx, brain.ry, 0, (o, u, v, lx, ly, d) => (d > 1 - 0.13 * k && u * S.side > 0.05 ? 66 : o));
  }
  if (p === 'infarct' && inR(z, 0.3, 0.62)) {
    const k = prof(z, 0.3, 0.62);
    E(b, 0.34 * S.side, -0.05, 0.26 * k, 0.33 * k, 0.3 * S.side, (o) => (o > 10 && o < 50 ? 17 : o), brain);
  }
  if (p === 'sah' && inR(z, 0.6, 0.8)) {
    E(b, 0, -0.05, 0.2, 0.2, 0, (o, u, v, lx, ly, d) => (d > 0.55 && d < 0.8 ? 68 : o));
    box(b, -0.2, -0.12, 0.16, 0.012, 0.35, 68);
    box(b, 0.2, -0.12, 0.16, 0.012, -0.35, 68);
    box(b, 0, -0.3, 0.012, 0.1, 0, 68);
  }
  return b;
}

// ---------- CHEST (CTPA) ----------
function setupChest(S, rng) {
  S.dots = [];
  for (let i = 0; i < 220; i++) {
    const side = i % 2 ? 1 : -1;
    const a = rng() * Math.PI * 2, rr = Math.sqrt(rng()) * 0.95;
    S.dots.push({ side, ux: Math.cos(a) * rr, uy: Math.sin(a) * rr, z0: rng() * 1.0, len: 0.04 + rng() * 0.08, r: 0.008 + 0.018 * (1 - rr) });
  }
  S.side = rng() < 0.5 ? -1 : 1;
  const L = {
    ptx: { x: -0.55, y: -0.05, r: 0.2, z0: 0.05, z1: 0.8 },
    pe: { x: -0.12, y: 0.02, r: 0.12, z0: 0.35, z1: 0.47 },
    mass: { x: 0.4, y: -0.12, r: 0.1, z0: 0.24, z1: 0.38 },
    consolidation: { x: -0.36, y: 0.28, r: 0.2, z0: 0.6, z1: 0.92 },
  };
  S.lesionN = L[S.path] || null;
}

function drawChest(S, z) {
  const b = newBuf();
  const p = S.path;
  E(b, 0, 0.05, 0.9, 0.58, 0, 35);
  E(b, 0, 0.05, 0.87, 0.55, 0, -100);
  E(b, 0, 0.06, 0.8, 0.49, 0, 50);
  E(b, 0, 0.07, 0.74, 0.44, 0, -90);
  const lf = z < 0.35 ? 0.4 + 0.6 * Math.sin(((z / 0.35) * Math.PI) / 2) : z < 0.8 ? 1 : 1 - (z - 0.8) * 2.2;
  const lungs = [
    { side: -1, cx: -0.36, cy: 0.07, rx: 0.33 * lf, ry: 0.4 * Math.min(1, lf + 0.2) },
    { side: 1, cx: 0.36, cy: 0.07, rx: 0.31 * lf, ry: 0.4 * Math.min(1, lf + 0.2) },
  ];
  for (const L of lungs) {
    if (p === 'ptx' && L.side === -1) {
      E(b, L.cx, L.cy, L.rx, L.ry, 0, -1000);
      L.cx += 0.1; L.rx *= 0.62; L.ry *= 0.75;
    }
    E(b, L.cx, L.cy, L.rx, L.ry, 0, (o, u, v) => -860 + (hash3(u * 120, v * 120, 4) - 0.5) * 40);
  }
  for (const d of S.dots) {
    if (!inR(z, d.z0, d.z0 + d.len)) continue;
    const L = lungs[d.side < 0 ? 0 : 1];
    E(b, L.cx + d.ux * L.rx, L.cy + d.uy * L.ry, d.r, d.r, 0, 40, L);
  }
  // Liver dome invades the right base
  if (z > 0.82) E(b, -0.32, 0.12, 0.36 * smooth(0.82, 1, z), 0.3 * smooth(0.82, 1, z), 0, 105, { cx: 0, cy: 0.07, rx: 0.74, ry: 0.44 });
  // Ribs
  for (let i = 0; i < 18; i++) {
    const a = (i / 18) * Math.PI * 2 + z * 0.8;
    E(b, Math.cos(a) * 0.77, 0.07 + Math.sin(a) * 0.47, 0.035, 0.02, a, (o, u, v, lx, ly, d) => (d > 0.6 ? 800 : 250));
  }
  if (z < 0.45) {
    bone(b, -0.55, 0.38, 0.2, 0.025, 0.35, 700, 300, 0.5);
    bone(b, 0.55, 0.38, 0.2, 0.025, -0.35, 700, 300, 0.5);
  }
  // Spine
  bone(b, 0, 0.42, 0.085, 0.075, 0, 850, 260, 0.22);
  E(b, 0, 0.53, 0.04, 0.035, 0, 10);
  bone(b, 0, 0.6, 0.02, 0.05, 0, 850, 300, 0.5);
  // Mediastinum
  E(b, 0.02, 0.02, 0.17, 0.3, 0, -70);
  if (z < 0.33) E(b, 0, -0.08, 0.05, 0.045, 0, -1000);
  else if (z < 0.46) { E(b, -0.1, 0.03, 0.03, 0.03, 0, -1000); E(b, 0.1, 0.03, 0.03, 0.03, 0, -1000); }
  if (inR(z, 0.12, 0.2)) E(b, 0.05, 0.02, 0.17, 0.05, 0.5, 170);
  if (inR(z, 0.2, 0.48)) E(b, 0.0, -0.1, 0.07, 0.07, 0, 170);
  if (z > 0.15) E(b, 0.14, 0.3, 0.055, 0.055, 0, 170);
  if (inR(z, 0.08, 0.42)) E(b, -0.11, -0.08, 0.04, 0.04, 0, 320);
  // Pulmonary arteries: bright on CTPA
  if (inR(z, 0.3, 0.44)) E(b, 0.08, -0.12, 0.075, 0.075, 0, 330);
  if (inR(z, 0.36, 0.47)) E(b, -0.14, 0.02, 0.18, 0.042, 0.12, 330);
  if (inR(z, 0.33, 0.42)) E(b, 0.2, 0.02, 0.1, 0.045, -0.2, 330);
  const hp = prof(z, 0.42, 0.95);
  if (hp > 0) {
    E(b, 0.1, -0.06, 0.31 * hp, 0.24 * hp, 0.4, 48);
    E(b, 0.02, -0.14, 0.12 * hp, 0.09 * hp, 0.4, 300);
    E(b, 0.2, -0.02, 0.1 * hp, 0.1 * hp, 0.4, 150);
  }
  // Pathology
  if (p === 'pe' && inR(z, 0.36, 0.47)) {
    E(b, -0.13, 0.02, 0.05, 0.028, 0.12, 35);
    if (inR(z, 0.36, 0.42)) E(b, 0.21, 0.02, 0.035, 0.025, -0.2, 35);
  }
  if (p === 'mass' && inR(z, 0.24, 0.38)) {
    const k = prof(z, 0.24, 0.38);
    E(b, 0.4, -0.12, 0.08 * k, 0.07 * k, 0.4, 40);
    for (let i = 0; i < 7; i++) {
      const a = i * 0.9;
      box(b, 0.4 + Math.cos(a) * 0.09 * k, -0.12 + Math.sin(a) * 0.08 * k, 0.04 * k, 0.004, a, 30);
    }
  }
  if (p === 'consolidation' && inR(z, 0.6, 0.92)) {
    const k = prof(z, 0.6, 0.92);
    E(b, -0.36, 0.26, 0.26 * k, 0.18 * k, 0, (o, u, v) => (o < -500 ? 32 + (hash3(u * 60, v * 60, 8) - 0.5) * 20 : o), lungs[0]);
    box(b, -0.33, 0.22, 0.12 * k, 0.008, 0.5, (o) => (o > 0 && o < 60 ? -900 : o));
    box(b, -0.4, 0.3, 0.1 * k, 0.008, -0.3, (o) => (o > 0 && o < 60 ? -900 : o));
  }
  return b;
}

// ---------- ULTRASOUND (hip, for the joint aspirate requests) ----------
function setupUS(S, rng) {
  S.lesionN = S.path === 'effusion' ? { x: 0, y: 0.02, r: 0.3, z0: 0.12, z1: 0.88 } : null;
  S.tilt = (rng() - 0.5) * 0.2;
}
function drawUS(S, z) {
  const b = new Float32Array(N * N).fill(0);
  const eff = S.path === 'effusion' ? prof(z, 0.1, 0.9) : 0;
  const shift = (z - 0.5) * 0.12;
  for (let py = 0; py < N; py++) {
    const v = (py + 0.5) / H2 - 1;
    for (let px = 0; px < N; px++) {
      const u = (px + 0.5) / H2 - 1;
      const a = Math.atan2(u, v + 1.05), d = Math.hypot(u, v + 1.05);
      if (Math.abs(a) > 0.62 || d < 0.1 || d > 1.95) continue;
      const sp = 0.55 + hash3(px * 3, py * 2, 71 + Math.floor(z * 23)) * 0.9; // speckle
      const x = u + S.tilt * v;
      const bone = 0.12 + 0.2 * x * x + shift;
      const cap = bone - 0.05 - 0.2 * eff * Math.exp(-x * x * 5);
      let val;
      if (v < -0.9) val = 150; // skin
      else if (v < -0.8) val = 45; // subcutaneous
      else if (v < cap) val = 62 + 12 * Math.sin(v * 95 + x * 9) + 8 * Math.sin(v * 31 - x * 4); // muscle striations
      else if (v < cap + 0.025) val = 170; // capsule
      else if (v < bone - 0.02) val = eff > 0.05 ? 6 + (hash3(px, py, 9) < 0.03 ? 40 : 0) : 70; // effusion (or thin synovium)
      else if (v < bone + 0.03) val = 235; // cortex
      else val = 8; // acoustic shadow
      b[py * N + px] = val * sp * (1 - d * 0.18);
    }
  }
  return b;
}

// ---------- study factory ----------
const MODALITIES = {
  abdo: { n: 64, setup: setupAbdo, draw: drawAbdo, fov: 420, window: 'Soft tissue', noise: 22 },
  head: { n: 36, setup: setupHead, draw: drawHead, fov: 230, window: 'Brain', noise: 6 },
  chest: { n: 56, setup: setupChest, draw: drawChest, fov: 380, window: 'Soft tissue', noise: 18 },
  us: { n: 24, setup: setupUS, draw: drawUS, fov: 60, window: 'US', noise: 6 },
};

export const WINDOWS = {
  'Soft tissue': { ww: 400, wl: 40 },
  Lung: { ww: 1500, wl: -600 },
  Bone: { ww: 2000, wl: 500 },
  Brain: { ww: 80, wl: 40 },
  US: { ww: 256, wl: 128 },
};

export function createStudy({ modality, path, seed }) {
  const M = MODALITIES[modality];
  const rng = mulberry32(seed);
  const S = { modality, path, seed, n: M.n, fov: M.fov, defaultWindow: M.window, cache: new Map() };
  M.setup(S, rng);
  if (S.lesionN) {
    const L = S.lesionN;
    S.lesion = { x: L.x, y: L.y, r: L.r, s0: Math.floor(L.z0 * (S.n - 1)), s1: Math.ceil(L.z1 * (S.n - 1)) };
  }
  S.get = (i) => {
    let s = S.cache.get(i);
    if (!s) {
      s = finish(M.draw(S, i / (S.n - 1)), i, seed, M.noise);
      S.cache.set(i, s);
    }
    return s;
  };
  return S;
}

// Paint one slice to a 256x256 ImageData with the given window.
export function windowSlice(buf, ww, wl, img) {
  const lo = wl - ww / 2;
  const k = 255 / ww;
  const d = img.data;
  for (let i = 0, j = 0; i < buf.length; i++, j += 4) {
    let g = (buf[i] - lo) * k;
    g = g < 0 ? 0 : g > 255 ? 255 : g;
    d[j] = d[j + 1] = d[j + 2] = g;
    d[j + 3] = 255;
  }
  return img;
}
