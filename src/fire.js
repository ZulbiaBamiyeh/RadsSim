// Cellular fire simulation on the floor-plan grid. Fire spreads through fuel (paper, curtains, chairs, beds),
// is blocked by walls, and can be knocked down by extinguishers, sprinklers and firefighters.
import { W, H, isWall, zoneAt } from './map.js';

const TICK = 0.2;

export class Fire {
  constructor(baseFuel) {
    this.fuel = Float32Array.from(baseFuel);
    this.heat = new Float32Array(W * H);
    this.int = new Float32Array(W * H);
    this.wet = new Float32Array(W * H);
    this.burnt = new Uint8Array(W * H);
    this.acc = 0;
    this.burning = [];
    this.total = 0;
    this.onIgnite = null;
    this.onBurnout = null;
  }

  idx(x, y) { return y * W + x; }
  at(wx, wz) {
    const x = Math.floor(wx), y = Math.floor(wz);
    if (x < 0 || y < 0 || x >= W || y >= H) return 0;
    return this.int[y * W + x];
  }

  ignite(wx, wz, amount = 0.35) {
    const x = Math.floor(wx), y = Math.floor(wz);
    if (isWall(x, y)) return false;
    const i = y * W + x;
    if (this.wet[i] > 0) return false;
    if (this.fuel[i] < 0.05) this.fuel[i] = 0.3; // whatever you lit burns briefly
    if (this.int[i] <= 0 && this.onIgnite) this.onIgnite(x, y);
    this.int[i] = Math.max(this.int[i], amount);
    return true;
  }

  addFuel(wx, wz, amount) {
    const x = Math.floor(wx), y = Math.floor(wz);
    if (isWall(x, y)) return;
    this.fuel[y * W + x] += amount;
  }

  // Knock down fire in a cone (extinguisher / fire hose).
  suppressCone(ox, oz, dx, dz, range, power, dt) {
    const x0 = Math.max(0, Math.floor(ox - range)), x1 = Math.min(W - 1, Math.floor(ox + range));
    const y0 = Math.max(0, Math.floor(oz - range)), y1 = Math.min(H - 1, Math.floor(oz + range));
    let hit = 0;
    for (let y = y0; y <= y1; y++) {
      for (let x = x0; x <= x1; x++) {
        const cx = x + 0.5 - ox, cz = y + 0.5 - oz;
        const d = Math.hypot(cx, cz);
        if (d > range) continue;
        if (d > 0.7 && (cx * dx + cz * dz) / d < 0.75) continue;
        const i = y * W + x;
        if (this.int[i] > 0) hit++;
        this.int[i] = Math.max(0, this.int[i] - power * dt);
        this.heat[i] = 0;
        this.wet[i] = Math.max(this.wet[i], 4);
      }
    }
    return hit;
  }

  soakZone(zone, dt) {
    for (let y = zone.y0; y <= zone.y1; y++) {
      for (let x = zone.x0; x <= zone.x1; x++) {
        const i = y * W + x;
        this.int[i] = Math.max(0, this.int[i] - 0.22 * dt);
        this.heat[i] *= 0.7;
        this.wet[i] = 8;
      }
    }
  }

  update(dt) {
    this.acc += dt;
    while (this.acc >= TICK) {
      this.acc -= TICK;
      this.tick(TICK);
    }
  }

  tick(dt) {
    const { fuel, heat, int, wet, burnt } = this;
    const burning = [];
    let total = 0;
    for (let i = 0; i < W * H; i++) {
      if (wet[i] > 0) wet[i] -= dt;
      heat[i] *= 0.94;
      if (int[i] > 0) burning.push(i);
    }
    for (const i of burning) {
      const x = i % W, y = (i / W) | 0;
      let I = int[i];
      if (fuel[i] > 0) {
        I = Math.min(1, I + 0.3 * dt, 0.25 + fuel[i]);
        fuel[i] = Math.max(0, fuel[i] - 0.06 * I * dt);
      } else {
        I -= 0.35 * dt;
      }
      if (I <= 0.02) {
        int[i] = 0;
        burnt[i] = 1;
        if (this.onBurnout) this.onBurnout(x, y);
        continue;
      }
      int[i] = I;
      total += I;
      for (let dy = -1; dy <= 1; dy++) {
        for (let dx = -1; dx <= 1; dx++) {
          if (!dx && !dy) continue;
          const nx = x + dx, ny = y + dy;
          if (isWall(nx, ny)) continue;
          heat[ny * W + nx] += I * (dx && dy ? 0.08 : 0.13);
        }
      }
      // Occasional ember jump.
      if (Math.random() < 0.012 * I) {
        const nx = x + Math.round((Math.random() - 0.5) * 5), ny = y + Math.round((Math.random() - 0.5) * 5);
        if (!isWall(nx, ny) && zoneAt(nx, ny) === zoneAt(x, y)) heat[ny * W + nx] += 1.2;
      }
    }
    for (let i = 0; i < W * H; i++) {
      if (int[i] > 0 || heat[i] < 1 || fuel[i] < 0.06 || wet[i] > 0) continue;
      int[i] = 0.15;
      if (this.onIgnite) this.onIgnite(i % W, (i / W) | 0);
    }
    this.burning = burning.filter((i) => int[i] > 0);
    this.total = total;
  }
}
