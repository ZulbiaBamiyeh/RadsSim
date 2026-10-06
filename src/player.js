// First-person controller: mouse look (pointer lock), WASD, sprint, jump, carry/throw, bed pushing.
import * as THREE from 'three';
import { collideCircle, groundAt } from './map.js';

export class Player {
  constructor(camera, dom) {
    this.camera = camera;
    this.dom = dom;
    this.pos = { x: 3.2, z: 4.2 };
    this.y = 0;
    this.vy = 0;
    this.yaw = Math.PI; // facing +z (toward the door)
    this.pitch = -0.05;
    this.vel = { x: 0, z: 0 };
    this.keys = new Set();
    this.held = null;
    this.pushing = null;
    this.locked = false;
    this.mouse = { left: false, right: false, leftPressed: false };
    this.onFire = 0;
    this.enabled = true;
    this.freeLook = false;
    this.dragMoved = 0;

    document.addEventListener('pointerlockchange', () => { this.locked = document.pointerLockElement === dom; if (this.locked) this.everLocked = true; });
    document.addEventListener('mousemove', (e) => {
      if (!this.enabled) return;
      // Without pointer lock (e.g. embedded frames) you look around by dragging with the left button.
      const drag = this.freeLook && (e.buttons & 1);
      if (!this.locked && !drag) return;
      if (drag) this.dragMoved += Math.abs(e.movementX) + Math.abs(e.movementY);
      this.yaw -= e.movementX * (drag ? 0.004 : 0.0022);
      this.pitch = Math.max(-1.45, Math.min(1.45, this.pitch - e.movementY * (drag ? 0.004 : 0.0022)));
    });
    window.addEventListener('keydown', (e) => { this.keys.add(e.code); });
    window.addEventListener('keyup', (e) => { this.keys.delete(e.code); });
    window.addEventListener('blur', () => this.keys.clear());
    dom.addEventListener('mousedown', (e) => {
      if (this.locked) {
        if (e.button === 0) { this.mouse.left = true; this.mouse.leftPressed = true; }
      } else if (this.freeLook && e.button === 0) this.dragMoved = 0;
      if ((this.locked || this.freeLook) && e.button === 2) this.mouse.right = true;
    });
    window.addEventListener('mouseup', (e) => {
      if (e.button === 0) {
        this.mouse.left = false;
        if (this.freeLook && !this.locked && this.dragMoved < 6 && e.target === dom) this.mouse.leftPressed = true;
      }
      if (e.button === 2) this.mouse.right = false;
    });
    dom.addEventListener('contextmenu', (e) => e.preventDefault());
  }

  lock() { try { const r = this.dom.requestPointerLock(); if (r && r.catch) r.catch(() => {}); } catch { /* pointer lock unavailable */ } }
  unlock() { if (document.pointerLockElement) document.exitPointerLock(); }

  forward() { return { x: -Math.sin(this.yaw), z: -Math.cos(this.yaw) }; }
  lookDir() {
    const cp = Math.cos(this.pitch);
    return new THREE.Vector3(-Math.sin(this.yaw) * cp, Math.sin(this.pitch), -Math.cos(this.yaw) * cp);
  }
  eye() { return new THREE.Vector3(this.pos.x, this.y + 1.65, this.pos.z); }

  update(dt, G) {
    const k = this.keys;
    if (this.hidden) {
      const h = this.hidden;
      this.pos.x = h.x; this.pos.z = h.z; this.y = 0; this.vy = 0; this.vel.x = 0; this.vel.z = 0;
      this.camera.position.set(h.x, h.camY, h.z);
      this.camera.rotation.set(this.pitch, this.yaw, 0, 'YXZ');
      return;
    }
    if (this.inCar) {
      // Position and heading are driven by Cars.update; place the camera at the driver's eye.
      this.y = 0;
      this.camera.position.set(this.pos.x, this.inCar.seatY || 1.4, this.pos.z);
      this.camera.rotation.set(this.pitch, this.yaw, 0, 'YXZ');
      return;
    }
    let mx = 0, mz = 0;
    if (this.enabled) {
      if (k.has('KeyW') || k.has('ArrowUp')) mz += 1;
      if (k.has('KeyS') || k.has('ArrowDown')) mz -= 1;
      if (k.has('KeyA') || k.has('ArrowLeft')) mx -= 1;
      if (k.has('KeyD') || k.has('ArrowRight')) mx += 1;
      if (this.touchMove) { mx += this.touchMove.x; mz += this.touchMove.y; }
    }
    const f = this.forward();
    const rx = -f.z, rz = f.x;
    const touchSprint = this.touchMove && Math.hypot(this.touchMove.x, this.touchMove.y) > 0.92;
    let speed = k.has('ShiftLeft') || k.has('ShiftRight') || touchSprint ? 6.2 : 3.4;
    if (this.onFire > 0) speed *= 1.35;
    if (this.pushing) speed *= this.pushing.rider ? 0.85 : 0.95;
    const len = Math.max(1, Math.hypot(mx, mz)); // analog stick below full tilt walks slower
    const tx = ((f.x * mz + rx * mx) / len) * speed, tz = ((f.z * mz + rz * mx) / len) * speed;
    const acc = this.y > groundAt(this.pos.x, this.pos.z, this.y) + 0.01 ? 2 : 12;
    this.vel.x += (tx - this.vel.x) * Math.min(1, acc * dt);
    this.vel.z += (tz - this.vel.z) * Math.min(1, acc * dt);

    // Jump / gravity / extinguisher jetpack
    if (this.enabled && k.has('Space') && Math.abs(this.vy) < 0.01 && this.y <= groundAt(this.pos.x, this.pos.z, this.y) + 0.01) this.vy = 5.2;
    this.vy -= 15 * dt;
    if (G.jetpack) this.vy += 26 * dt;
    this.y += this.vy * dt;
    const ground = groundAt(this.pos.x, this.pos.z, this.y);
    if (this.y < ground) { this.y = ground; this.vy = 0; }
    const ceil = this.pos.z < 25 ? 3 - 1.8 : 6;
    if (this.y > ceil) { this.y = ceil; this.vy = Math.min(0, this.vy); }

    this.pos.x += this.vel.x * dt;
    this.pos.z += this.vel.z * dt;
    collideCircle(this.pos, 0.3, this.y);

    if (this.pushing) {
      const b = this.pushing;
      const D = 1.75;
      b.pos.x = this.pos.x + f.x * D;
      b.pos.z = this.pos.z + f.z * D;
      b.pos.y = b.T.h / 2;
      b.yaw = this.yaw;
      const c = { x: b.pos.x, z: b.pos.z };
      if (collideCircle(c, b.T.r)) {
        b.pos.x = c.x; b.pos.z = c.z;
        this.pos.x = b.pos.x - f.x * D;
        this.pos.z = b.pos.z - f.z * D;
        collideCircle(this.pos, 0.3);
      }
      b.vel.set(this.vel.x, 0, this.vel.z);
    }

    const cam = this.camera;
    cam.position.set(this.pos.x, this.y + 1.65 + (this.onFire > 0 ? Math.sin(performance.now() / 40) * 0.02 : 0), this.pos.z);
    cam.rotation.set(this.pitch, this.yaw, 0, 'YXZ');

    if (this.held) {
      const d = this.lookDir();
      const h = this.held;
      h.pos.set(cam.position.x + d.x * 0.75 + rx * 0.28, cam.position.y + d.y * 0.75 - 0.28, cam.position.z + d.z * 0.75 + rz * 0.28);
      h.mesh.position.copy(h.pos);
      h.mesh.rotation.set(0, this.yaw, 0);
    }
  }
}
