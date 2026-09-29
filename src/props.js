// Throwable / pushable physics props. Deliberately simple physics: circles on a grid, gravity, bounces.
import * as THREE from 'three';
import { collideCircle, groundAt } from './map.js';
import { mat } from './world.js';
import { sfx } from './audio.js';

function add(g, geo, color, x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0, material) {
  const m = new THREE.Mesh(geo, material || mat(color));
  m.position.set(x, y, z);
  m.rotation.set(rx, ry, rz);
  g.add(m);
  return m;
}
const B = (w, h, d) => new THREE.BoxGeometry(w, h, d);
const C = (r, h, s = 12) => new THREE.CylinderGeometry(r, r, h, s);

export const PROP_TYPES = {
  chair: { name: 'Office chair', r: 0.32, h: 1.0, mass: 8, metal: 0.5, fuel: 0.9, build(g) {
    add(g, B(0.5, 0.08, 0.5), '#25282c', 0, -0.02);
    add(g, B(0.5, 0.5, 0.07), '#25282c', 0, 0.25, 0.22);
    add(g, C(0.03, 0.4), '#888', 0, -0.25);
    add(g, B(0.55, 0.04, 0.08), '#555', 0, -0.47);
    add(g, B(0.08, 0.04, 0.55), '#555', 0, -0.47);
  } },
  bin: { name: 'Clinical waste bin', r: 0.22, h: 0.55, mass: 3, fuel: 1.2, build(g) {
    add(g, C(0.22, 0.55, 14), '#d4b21f');
    add(g, C(0.23, 0.04, 14), '#b89a18', 0, 0.28);
  } },
  paper: { name: 'Stack of request forms', r: 0.2, h: 0.06, mass: 0.3, fuel: 0.9, build(g) {
    add(g, B(0.3, 0.06, 0.22), '#f6f6f0');
    add(g, B(0.28, 0.005, 0.2), '#ffd6e0', 0, 0.032, 0, 0, 0.2);
  } },
  extinguisher: { name: 'Fire extinguisher', r: 0.13, h: 0.62, mass: 6, metal: 1, use: 'spray', build(g) {
    add(g, C(0.1, 0.5), '#c41e1e', 0, -0.05);
    add(g, C(0.03, 0.1), '#222', 0, 0.25);
    add(g, B(0.16, 0.03, 0.04), '#222', 0.05, 0.3);
    add(g, C(0.015, 0.25), '#111', -0.09, 0.15, 0, 0, 0, 0.4);
  } },
  o2: { name: 'Oxygen cylinder', r: 0.11, h: 0.95, mass: 7, metal: 1, explosive: true, build(g) {
    add(g, C(0.09, 0.8), '#1f6b3a', 0, -0.05);
    add(g, C(0.09, 0.1), '#f2f2f2', 0, 0.39);
    add(g, C(0.03, 0.08), '#999', 0, 0.46);
  } },
  ivpole: { name: 'IV pole', r: 0.22, h: 1.9, mass: 4, metal: 1, build(g) {
    add(g, C(0.02, 1.8), '#bbb', 0, 0);
    add(g, B(0.4, 0.02, 0.04), '#bbb', 0, 0.85);
    add(g, B(0.12, 0.2, 0.05), '#e8f4ff', 0.15, 0.7, 0, 0, 0, 0, new THREE.MeshLambertMaterial({ color: '#e8f4ff', transparent: true, opacity: 0.8 }));
    add(g, B(0.45, 0.03, 0.06), '#999', 0, -0.93);
    add(g, B(0.06, 0.03, 0.45), '#999', 0, -0.93);
  } },
  foil: { name: 'Foil tray of leftover curry', r: 0.13, h: 0.07, mass: 0.4, metal: 1, build(g) {
    add(g, B(0.25, 0.06, 0.18), '#c9ccd1', 0, 0, 0, 0, 0, 0, new THREE.MeshLambertMaterial({ color: '#d4d8de', emissive: '#222' }));
    add(g, B(0.22, 0.01, 0.15), '#b8742a', 0, 0.03);
  } },
  lighter: { name: 'Lighter (confiscated)', r: 0.06, h: 0.09, mass: 0.05, use: 'ignite', build(g) {
    add(g, B(0.03, 0.08, 0.015), '#e3342f');
    add(g, B(0.03, 0.015, 0.015), '#aaa', 0, 0.045);
  } },
  sandwich: { name: 'Someone else\'s sandwich', r: 0.1, h: 0.07, mass: 0.2, fuel: 0.4, use: 'eat', build(g) {
    add(g, B(0.18, 0.02, 0.12), '#e8c98f', 0, -0.025);
    add(g, B(0.19, 0.02, 0.13), '#6fae4a', 0, 0);
    add(g, B(0.18, 0.02, 0.12), '#e8c98f', 0, 0.025);
  } },
  coffee: { name: 'Cold coffee', r: 0.06, h: 0.13, mass: 0.3, use: 'drink', build(g) {
    add(g, C(0.045, 0.12), '#f4efe6');
    add(g, C(0.047, 0.03), '#6b4a2e', 0, 0.045);
  } },
  box: { name: 'Box of gloves (size S, again)', r: 0.15, h: 0.12, mass: 0.4, fuel: 0.7, build(g) {
    add(g, B(0.25, 0.12, 0.13), '#8ab4f8');
  } },
  wheelchair: { name: 'Wheelchair', r: 0.42, h: 0.95, mass: 15, metal: 1, fuel: 0.3, build(g) {
    add(g, B(0.5, 0.05, 0.45), '#333', 0, -0.05);
    add(g, B(0.5, 0.45, 0.05), '#333', 0, 0.2, 0.22);
    for (const s of [-1, 1]) {
      add(g, new THREE.TorusGeometry(0.28, 0.03, 8, 20), '#777', s * 0.29, -0.18, 0.05, 0, Math.PI / 2, 0);
      add(g, C(0.05, 0.03), '#222', s * 0.2, -0.42, -0.25, 0, 0, Math.PI / 2);
    }
  } },
  bed: { name: 'Hospital bed', r: 0.75, h: 1.0, mass: 60, metal: 0.6, fuel: 1.6, bed: true, build(g) {
    add(g, B(0.92, 0.12, 2.0), '#aeb6bf', 0, 0.02);
    add(g, B(0.86, 0.14, 1.9), '#e9f1f7', 0, 0.15);
    add(g, B(0.6, 0.1, 0.35), '#ffffff', 0, 0.26, -0.72);
    add(g, B(0.92, 0.35, 0.05), '#aeb6bf', 0, 0.3, -1.0);
    add(g, B(0.92, 0.25, 0.05), '#aeb6bf', 0, 0.25, 1.0);
    for (const sx of [-0.4, 0.4]) for (const sz of [-0.9, 0.9]) {
      add(g, C(0.03, 0.4), '#888', sx, -0.25, sz);
      add(g, C(0.06, 0.04), '#222', sx, -0.45, sz, 0, 0, Math.PI / 2);
    }
  } },
};

export class Props {
  constructor(scene) {
    this.scene = scene;
    this.list = [];
  }

  spawn(type, x, y, z, opts = {}) {
    const T = PROP_TYPES[type];
    const g = new THREE.Group();
    T.build(g);
    g.traverse((o) => { if (o.isMesh) { o.material = o.material.clone(); o.userData.baseColor = o.material.color.clone(); } });
    this.scene.add(g);
    const p = {
      type, T, mesh: g,
      pos: new THREE.Vector3(x, y ?? T.h / 2, z),
      vel: new THREE.Vector3(),
      yaw: opts.yaw ?? Math.random() * Math.PI * 2,
      tilt: 0, spin: 0,
      held: false, pushed: false, stuck: false,
      fuel: T.fuel || 0, char: 0,
      rider: null,
      lastSpeed: 0,
    };
    this.list.push(p);
    this.sync(p);
    return p;
  }

  remove(p) {
    this.scene.remove(p.mesh);
    const i = this.list.indexOf(p);
    if (i >= 0) this.list.splice(i, 1);
  }

  sync(p) {
    p.mesh.position.copy(p.pos);
    p.mesh.rotation.set(p.tilt, p.yaw, p.tilt * 0.3, 'YXZ');
  }

  charTo(p, amount) {
    p.char = Math.min(1, amount);
    const black = new THREE.Color('#1a1512');
    p.mesh.traverse((o) => { if (o.isMesh && o.userData.baseColor) o.material.color.copy(o.userData.baseColor).lerp(black, p.char * 0.9); });
  }

  update(dt, G) {
    const list = this.list;
    const mag = G.world.magnet;
    for (const p of list) {
      if (p.held || p.pushed || p.stuck) { p.lastSpeed = 0; if (!p.held) this.sync(p); continue; }
      const T = p.T;
      // MRI: metal flies to the bore
      if (T.metal && !G.quenched) {
        const dx = mag.x - p.pos.x, dy = mag.y - p.pos.y, dz = mag.z - p.pos.z;
        const d2 = dx * dx + dy * dy + dz * dz;
        if (d2 < 81 && p.pos.z < 8.6 && p.pos.x > 29.5) {
          p.pulled = true;
          const d = Math.sqrt(d2);
          if (d < 0.7) {
            p.stuck = true;
            p.vel.set(0, 0, 0);
            p.pos.set(mag.x + 0.1, mag.y + (Math.random() - 0.5) * 0.9, mag.z + (Math.random() - 0.5) * 0.9);
            p.tilt = Math.random() * 2;
            this.sync(p);
            sfx.clang();
            G.onStuck?.(p);
            continue;
          }
          const f = (T.metal * 450) / Math.max(1, d2) / (T.mass / 5 + 0.5);
          p.vel.x += (dx / d) * f * dt; p.vel.y += (dy / d) * f * dt + 18 * dt * Math.min(1, f / 8); p.vel.z += (dz / d) * f * dt;
        } else p.pulled = false;
      }
      p.vel.y -= 18 * dt;
      p.pos.addScaledVector(p.vel, dt);
      const half = T.h / 2;
      const floor = groundAt(p.pos.x, p.pos.z, p.pos.y - half + 0.1) + half;
      const grounded = p.pos.y <= floor + 0.001;
      if (p.pos.y < floor) {
        if (p.vel.y < -3) sfx.thud(-p.vel.y / 10);
        p.pos.y = floor;
        p.vel.y = p.vel.y < -1.5 ? -p.vel.y * 0.3 : 0;
      }
      if (p.pos.y > 2.98 - half && p.pos.z < 25) { p.pos.y = 2.98 - half; p.vel.y = Math.min(0, p.vel.y); }
      if (grounded) {
        const fr = p.pulled ? 0.3 : T.bed || p.type === 'wheelchair' || p.type === 'chair' ? 0.9 : 6;
        const k = Math.max(0, 1 - fr * dt);
        p.vel.x *= k; p.vel.z *= k;
        p.spin *= Math.max(0, 1 - 8 * dt);
        p.tilt *= Math.max(0, 1 - 6 * dt);
      } else {
        p.tilt += p.spin * dt;
      }
      const c = { x: p.pos.x, z: p.pos.z };
      if (collideCircle(c, T.r, p.pos.y - half)) {
        const vn = p.vel.x * c.nx + p.vel.z * c.nz;
        if (vn < 0) {
          if (vn < -3) { sfx.thud(-vn / 8); G.onImpact?.(p, -vn); }
          p.vel.x -= 1.4 * vn * c.nx;
          p.vel.z -= 1.4 * vn * c.nz;
        }
        p.pos.x = c.x; p.pos.z = c.z;
      }
      p.lastSpeed = Math.hypot(p.vel.x, p.vel.z);
    }
    // Prop-prop separation (cheap, only for things on the floor)
    for (let i = 0; i < list.length; i++) {
      const a = list[i];
      if (a.held || a.stuck || a.T.r < 0.12) continue;
      for (let j = i + 1; j < list.length; j++) {
        const b = list[j];
        if (b.held || b.stuck || b.T.r < 0.12) continue;
        const dx = b.pos.x - a.pos.x, dz = b.pos.z - a.pos.z;
        const rr = a.T.r + b.T.r;
        const d2 = dx * dx + dz * dz;
        if (d2 >= rr * rr || d2 < 1e-6) continue;
        if (Math.abs(a.pos.y - b.pos.y) > (a.T.h + b.T.h) / 2) continue;
        const d = Math.sqrt(d2), nx = dx / d, nz = dz / d, pen = rr - d;
        const ma = a.pushed ? 1e3 : a.T.mass, mb = b.pushed ? 1e3 : b.T.mass;
        const wa = mb / (ma + mb), wb = ma / (ma + mb);
        if (!a.pushed) { a.pos.x -= nx * pen * wa; a.pos.z -= nz * pen * wa; }
        if (!b.pushed) { b.pos.x += nx * pen * wb; b.pos.z += nz * pen * wb; }
        const rv = (b.vel.x - a.vel.x) * nx + (b.vel.z - a.vel.z) * nz;
        if (rv < 0) {
          const jv = -1.5 * rv;
          if (!a.pushed) { a.vel.x -= nx * jv * wa; a.vel.z -= nz * jv * wa; }
          if (!b.pushed) { b.vel.x += nx * jv * wb; b.vel.z += nz * jv * wb; }
        }
      }
    }
    for (const p of list) if (!p.held && !p.stuck) this.sync(p);
  }

  // Nearest prop hit by a ray (sphere test). Returns { prop, dist }.
  raycast(o, d, maxD, filter) {
    let best = null, bd = maxD;
    for (const p of this.list) {
      if (p.held || (filter && !filter(p))) continue;
      const r = Math.max(0.22, Math.max(p.T.r, p.T.h / 2) * 0.95 + 0.08);
      const lx = p.pos.x - o.x, ly = p.pos.y - o.y, lz = p.pos.z - o.z;
      const t = lx * d.x + ly * d.y + lz * d.z;
      if (t < 0) continue;
      const q = lx * lx + ly * ly + lz * lz - t * t;
      if (q > r * r) continue;
      const hit = t - Math.sqrt(r * r - q);
      if (hit < bd) { bd = hit; best = p; }
    }
    return best ? { prop: best, dist: bd } : null;
  }
}
