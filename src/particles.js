import * as THREE from 'three';

// Pooled GPU point particles (soft round sprites). One instance per blend mode.
export class Particles {
  constructor(scene, { max = 4000, additive = false } = {}) {
    this.max = max;
    this.n = 0;
    this.d = new Float32Array(max * 16); // x y z vx vy vz life maxLife s0 s1 r g b a grav drag
    this.pos = new Float32Array(max * 3);
    this.col = new Float32Array(max * 4);
    this.size = new Float32Array(max);
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(this.pos, 3).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('color', new THREE.BufferAttribute(this.col, 4).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('size', new THREE.BufferAttribute(this.size, 1).setUsage(THREE.DynamicDrawUsage));
    this.uniforms = { uScale: { value: 400 } };
    const m = new THREE.ShaderMaterial({
      uniforms: this.uniforms,
      vertexShader: `
        attribute float size; attribute vec4 color; varying vec4 vC; uniform float uScale;
        void main(){ vC = color; vec4 mv = modelViewMatrix * vec4(position,1.0);
          gl_PointSize = size * uScale / max(0.1, -mv.z); gl_Position = projectionMatrix * mv; }`,
      fragmentShader: `
        varying vec4 vC;
        void main(){ float d = length(gl_PointCoord - 0.5); float a = smoothstep(0.5, 0.05, d);
          if (a * vC.a < 0.01) discard; gl_FragColor = vec4(vC.rgb, a * vC.a); }`,
      transparent: true,
      depthWrite: false,
      blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending,
    });
    this.points = new THREE.Points(g, m);
    this.points.frustumCulled = false;
    this.points.renderOrder = additive ? 3 : 2;
    scene.add(this.points);
  }

  emit(x, y, z, vx, vy, vz, life, s0, s1, r, g, b, a, grav = 0, drag = 0) {
    if (this.n >= this.max) return;
    const o = this.n++ * 16, d = this.d;
    d[o] = x; d[o + 1] = y; d[o + 2] = z; d[o + 3] = vx; d[o + 4] = vy; d[o + 5] = vz;
    d[o + 6] = 0; d[o + 7] = life; d[o + 8] = s0; d[o + 9] = s1;
    d[o + 10] = r; d[o + 11] = g; d[o + 12] = b; d[o + 13] = a; d[o + 14] = grav; d[o + 15] = drag;
  }

  update(dt, ceiling = 2.95) {
    const d = this.d;
    let i = 0;
    while (i < this.n) {
      const o = i * 16;
      d[o + 6] += dt;
      if (d[o + 6] >= d[o + 7]) {
        const last = (this.n - 1) * 16;
        for (let k = 0; k < 16; k++) d[o + k] = d[last + k];
        this.n--;
        continue;
      }
      const drag = 1 - d[o + 15] * dt;
      d[o + 3] *= drag; d[o + 4] = (d[o + 4] - d[o + 14] * dt) * drag; d[o + 5] *= drag;
      d[o] += d[o + 3] * dt; d[o + 1] += d[o + 4] * dt; d[o + 2] += d[o + 5] * dt;
      if (d[o + 1] > ceiling) { d[o + 1] = ceiling; d[o + 4] = 0; }
      if (d[o + 1] < 0.02) { d[o + 1] = 0.02; d[o + 4] *= -0.2; }
      const t = d[o + 6] / d[o + 7];
      this.pos[i * 3] = d[o]; this.pos[i * 3 + 1] = d[o + 1]; this.pos[i * 3 + 2] = d[o + 2];
      this.col[i * 4] = d[o + 10]; this.col[i * 4 + 1] = d[o + 11]; this.col[i * 4 + 2] = d[o + 12];
      this.col[i * 4 + 3] = d[o + 13] * (t < 0.15 ? t / 0.15 : 1 - (t - 0.15) / 0.85);
      this.size[i] = d[o + 8] + (d[o + 9] - d[o + 8]) * t;
      i++;
    }
    const g = this.points.geometry;
    g.setDrawRange(0, this.n);
    g.attributes.position.needsUpdate = true;
    g.attributes.color.needsUpdate = true;
    g.attributes.size.needsUpdate = true;
  }
}
