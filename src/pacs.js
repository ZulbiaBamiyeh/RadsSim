// The PACS workstation: worklist, scrollable CT stack viewer with windowing, lesion marking, and reporting.
import * as THREE from 'three';
import { N, WINDOWS, windowSlice } from './ctgen.js';
import { FINDINGS, studyFor } from './cases.js';
import { showForm, minutesToClock } from './form.js';
import { sfx } from './audio.js';

const $ = (id) => document.getElementById(id);

export class Pacs {
  constructor(G) {
    this.G = G;
    this.el = $('pacs');
    this.view = $('pacs-view');
    this.vctx = this.view.getContext('2d');
    this.small = document.createElement('canvas');
    this.small.width = this.small.height = N;
    this.sctx = this.small.getContext('2d');
    this.img = this.sctx.createImageData(N, N);
    this.current = null;
    this.slice = 0;
    this.ww = 400; this.wl = 40;
    this.tool = 'scroll';
    this.mark = null;
    this.choice = null;

    // In-world monitors
    this.monA = document.createElement('canvas');
    this.monA.width = 640; this.monA.height = 384;
    this.monB = document.createElement('canvas');
    this.monB.width = 640; this.monB.height = 384;
    this.texA = new THREE.CanvasTexture(this.monA);
    this.texB = new THREE.CanvasTexture(this.monB);
    this.texA.colorSpace = this.texB.colorSpace = THREE.SRGBColorSpace;
    G.world.pacsScreens[0].material = new THREE.MeshBasicMaterial({ map: this.texA });
    G.world.pacsScreens[1].material = new THREE.MeshBasicMaterial({ map: this.texB });

    this.bind();
  }

  bind() {
    const v = this.view;
    let drag = null;
    v.addEventListener('wheel', (e) => { e.preventDefault(); this.scroll(Math.sign(e.deltaY)); }, { passive: false });
    v.addEventListener('contextmenu', (e) => e.preventDefault());
    v.addEventListener('pointerdown', (e) => {
      if (!this.current) return;
      const r = v.getBoundingClientRect();
      if (this.tool === 'mark' && e.button === 0) {
        const u = ((e.clientX - r.left) / r.width) * 2 - 1, w = ((e.clientY - r.top) / r.height) * 2 - 1;
        this.mark = { x: u, y: w, slice: this.slice };
        sfx.click();
        this.draw();
        this.updateMarkHint();
        return;
      }
      drag = { x: e.clientY, y: e.clientY, sx: e.clientX, mode: e.button === 2 || this.tool === 'wl' ? 'wl' : 'scroll', acc: 0 };
      v.setPointerCapture(e.pointerId);
    });
    v.addEventListener('pointermove', (e) => {
      if (!drag) return;
      const dy = e.clientY - drag.y, dx = e.clientX - drag.sx;
      if (drag.mode === 'scroll') {
        drag.acc += dy;
        while (Math.abs(drag.acc) > 6) { this.scroll(Math.sign(drag.acc)); drag.acc -= Math.sign(drag.acc) * 6; }
      } else {
        this.ww = Math.max(20, this.ww + dx * 4);
        this.wl = this.wl + dy * 2;
        this.draw();
      }
      drag.y = e.clientY; drag.sx = e.clientX;
    });
    v.addEventListener('pointerup', () => { drag = null; });
    $('pacs-slider').addEventListener('input', (e) => { this.slice = +e.target.value; this.draw(); });
    for (const b of document.querySelectorAll('[data-tool]')) b.onclick = () => this.setTool(b.dataset.tool);
    for (const b of document.querySelectorAll('[data-win]')) b.onclick = () => this.setWindow(b.dataset.win);
    $('pacs-close').onclick = () => this.G.closePacs();
    $('pacs-sign').onclick = () => this.sign();
    $('pacs-nad').onclick = () => this.speedReport();
    $('pacs-form').onclick = () => { if (this.current) showForm(this.current, { mode: 'view' }); };
    window.addEventListener('keydown', (e) => {
      if (this.el.hidden || !$('form-modal').hidden) return;
      if (e.code === 'ArrowUp' || e.code === 'PageUp') { this.scroll(-1); e.preventDefault(); }
      if (e.code === 'ArrowDown' || e.code === 'PageDown') { this.scroll(1); e.preventDefault(); }
      if (e.code === 'Digit1') this.setWindow('Soft tissue');
      if (e.code === 'Digit2') this.setWindow('Lung');
      if (e.code === 'Digit3') this.setWindow('Bone');
      if (e.code === 'Digit4') this.setWindow('Brain');
      if (e.code === 'KeyM') this.setTool(this.tool === 'mark' ? 'scroll' : 'mark');
      if ((e.code === 'Escape' || e.code === 'KeyE') && performance.now() - this.openedAt > 300) this.G.closePacs();
    });
  }

  open() {
    this.openedAt = performance.now();
    this.el.hidden = false;
    $('pacs-error').hidden = !(this.G.pacsWet > 0);
    const q = this.queue();
    if (!this.current || this.current.reported) this.select(q[0] || null);
    this.renderList();
    this.draw();
  }
  close() { this.el.hidden = true; }

  queue() { return this.G.openCases(); }

  setTool(t) {
    this.tool = t;
    for (const b of document.querySelectorAll('[data-tool]')) b.classList.toggle('on', b.dataset.tool === t);
    this.view.style.cursor = t === 'mark' ? 'crosshair' : t === 'wl' ? 'move' : 'ns-resize';
  }
  setWindow(name) {
    const w = WINDOWS[name];
    this.ww = w.ww; this.wl = w.wl;
    for (const b of document.querySelectorAll('[data-win]')) b.classList.toggle('on', b.dataset.win === name);
    this.draw();
  }

  select(c) {
    if (this.current && this.current !== c && this.current.study3d) this.current.study3d.cache.clear();
    this.current = c;
    this.mark = null;
    this.choice = null;
    if (c) {
      const S = studyFor(c);
      this.slice = Math.floor(S.n * 0.3);
      $('pacs-slider').max = S.n - 1;
      $('pacs-slider').value = this.slice;
      this.setWindow(S.defaultWindow);
    }
    this.setTool('scroll');
    this.renderReport();
    this.renderList();
    this.draw();
  }

  scroll(d) {
    if (!this.current) return;
    const S = studyFor(this.current);
    const s = Math.max(0, Math.min(S.n - 1, this.slice + d));
    if (s !== this.slice) { this.slice = s; $('pacs-slider').value = s; this.draw(); }
  }

  renderList() {
    const rows = $('pacs-rows');
    const q = this.queue();
    $('pacs-count').textContent = q.length;
    const now = this.G.time;
    rows.innerHTML = '';
    if (!q.length) rows.innerHTML = '<div class="pacs-empty">Worklist clear. Enjoy it while it lasts.</div>';
    for (const c of q) {
      const wait = Math.floor(now - c.arrived);
      const d = document.createElement('button');
      d.className = 'pacs-row' + (c === this.current ? ' sel' : '') + (wait > 120 ? ' late' : wait > 60 ? ' warn' : '');
      d.innerHTML = `<span class="pr-dot"></span><span class="pr-main"><b>${c.patient}</b><small>${c.study} · ${c.location}</small></span><span class="pr-wait">${Math.floor(wait / 60)}h${String(wait % 60).padStart(2, '0')}</span>`;
      d.onclick = () => this.select(c);
      rows.appendChild(d);
    }
  }

  renderReport() {
    const c = this.current;
    const req = $('pacs-req'), fl = $('pacs-findings');
    fl.innerHTML = '';
    $('pacs-feedback').textContent = '';
    if (!c) { req.innerHTML = '<p class="muted">No study selected.</p>'; $('pacs-sign').disabled = true; return; }
    req.innerHTML = `<p><b>${c.study}</b></p><p class="hand-sm">${c.clinical}</p><p><span class="muted">Q:</span> ${c.question}</p><p class="muted">From ${c.requester} · ${c.location}</p>`;
    const opts = Object.entries(FINDINGS[c.modality]).filter(([k]) => c.modality !== 'abdo' || !['fork', 'pager', 'sandwich'].includes(k) || c.joke);
    for (const [k, label] of opts) {
      const id = 'f-' + k;
      const l = document.createElement('label');
      l.className = 'finding';
      l.innerHTML = `<input type="radio" name="finding" id="${id}" value="${k}"> <span>${label}</span>`;
      l.querySelector('input').onchange = () => { this.choice = k; $('pacs-sign').disabled = false; this.updateMarkHint(); };
      fl.appendChild(l);
    }
    $('pacs-sign').disabled = true;
    this.updateMarkHint();
  }

  updateMarkHint() {
    const h = $('pacs-markhint');
    if (!this.current) { h.textContent = ''; return; }
    h.textContent = this.mark ? `Lesion marked on image ${this.mark.slice + 1}. Bonus if it's right.` : 'Optional: press M (or Mark) and click the abnormality for bonus points.';
  }

  sign() {
    const c = this.current;
    if (!c || !this.choice) return;
    const S = studyFor(c);
    const correct = this.choice === c.path;
    let nailed = false;
    if (correct && S.lesion && this.mark) {
      const L = S.lesion;
      const inZ = this.mark.slice >= L.s0 - 2 && this.mark.slice <= L.s1 + 2;
      nailed = inZ && Math.hypot(this.mark.x - L.x, this.mark.y - L.y) < L.r + 0.1;
    }
    this.G.onReport(c, this.choice, correct, nailed);
    const fb = $('pacs-feedback');
    fb.textContent = correct ? (nailed ? 'Signed. Nailed it, lesion and all.' : 'Signed. Diagnosis correct.') : 'Signed. (Hmm. Hope that was right.)';
    const next = this.queue()[0] || null;
    setTimeout(() => { if (!this.el.hidden) this.select(next); }, 700);
    this.renderList();
  }

  speedReport() {
    const q = this.queue();
    if (!q.length) return;
    for (const c of q) {
      const choice = 'normal';
      this.G.onReport(c, choice, c.path === 'normal', false, true);
    }
    this.G.toast(`Speed-reported ${q.length} studies as "No acute abnormality". Bold.`);
    this.select(null);
  }

  draw() {
    const g = this.vctx;
    const W = this.view.width;
    g.fillStyle = '#000';
    g.fillRect(0, 0, W, W);
    const c = this.current;
    if (c) {
      const S = studyFor(c);
      windowSlice(S.get(this.slice), this.ww, this.wl, this.img);
      this.sctx.putImageData(this.img, 0, 0);
      g.imageSmoothingEnabled = true;
      g.drawImage(this.small, 0, 0, W, W);
      g.font = '15px "IBM Plex Mono", monospace';
      g.fillStyle = '#f5b041';
      g.textBaseline = 'top';
      g.fillText(c.patient, 10, 10);
      g.fillText(`${c.urn}  ${c.age}${c.sex}`, 10, 28);
      g.fillStyle = '#7fd3ff';
      g.textAlign = 'right';
      g.fillText('RadsSim General', W - 10, 10);
      g.fillText(c.study, W - 10, 28);
      g.fillText(`Acq ${minutesToClock(c.arrived)}`, W - 10, 46);
      g.textBaseline = 'bottom';
      g.fillText(c.modality === 'us' ? `Depth ${S.fov} mm` : `${S.fov} mm FOV`, W - 10, W - 10);
      g.textAlign = 'left';
      g.fillStyle = '#f5b041';
      g.fillText(c.modality === 'us' ? `Frame ${this.slice + 1}/${S.n}   R hip, long.   5 MHz` : `Im: ${this.slice + 1}/${S.n}   Ax 2.0mm`, 10, W - 28);
      g.fillText(`W: ${Math.round(this.ww)}  L: ${Math.round(this.wl)}`, 10, W - 10);
      g.fillStyle = '#ccc';
      g.textAlign = 'center';
      g.textBaseline = 'middle';
      if (c.modality !== 'us') {
        g.fillText('A', W / 2, 60);
        g.fillText('R', 16, W / 2);
        g.fillText('L', W - 16, W / 2);
      }
      g.textAlign = 'left';
      if (this.mark && Math.abs(this.mark.slice - this.slice) <= 2) {
        const mx = ((this.mark.x + 1) / 2) * W, my = ((this.mark.y + 1) / 2) * W;
        g.strokeStyle = '#ffe600';
        g.lineWidth = 2;
        g.beginPath(); g.arc(mx, my, 18, 0, Math.PI * 2); g.stroke();
        g.beginPath(); g.moveTo(mx - 26, my); g.lineTo(mx - 12, my); g.moveTo(mx + 12, my); g.lineTo(mx + 26, my); g.stroke();
      }
    } else {
      g.fillStyle = '#556';
      g.font = '18px "IBM Plex Mono", monospace';
      g.textAlign = 'center';
      g.fillText('No study loaded', W / 2, W / 2);
      g.textAlign = 'left';
    }
    this.drawMonitors();
  }

  // Mirror to the in-world monitors (also called periodically when nobody is at the desk).
  drawMonitors() {
    const a = this.monA.getContext('2d');
    a.fillStyle = '#000';
    a.fillRect(0, 0, 640, 384);
    if (this.G.pacsWet > 0) {
      a.fillStyle = '#1537a8';
      a.fillRect(0, 0, 640, 384);
      a.fillStyle = '#fff';
      a.font = 'bold 28px monospace';
      a.fillText(':(', 40, 80);
      a.font = '20px monospace';
      a.fillText('PACS has encountered water.', 40, 140);
      a.fillText('Please contact IT (they are asleep).', 40, 175);
    } else if (this.current) {
      a.drawImage(this.view, 128, 0, 384, 384);
    } else {
      a.fillStyle = '#0b1622';
      a.fillRect(0, 0, 640, 384);
      a.fillStyle = '#7fd3ff';
      a.font = '26px monospace';
      a.fillText('NightPACS', 30, 50);
    }
    const b = this.monB.getContext('2d');
    b.fillStyle = '#0b1622';
    b.fillRect(0, 0, 640, 384);
    const q = this.queue();
    b.font = 'bold 26px monospace';
    b.fillStyle = q.length >= 20 ? '#ff4d4d' : q.length >= 10 ? '#ffb347' : '#7fd3ff';
    b.fillText(`WORKLIST: ${q.length} UNREPORTED`, 20, 40);
    b.font = '18px monospace';
    q.slice(0, 13).forEach((c, i) => {
      const wait = Math.floor(this.G.time - c.arrived);
      b.fillStyle = wait > 120 ? '#ff6b6b' : '#d6e6f2';
      b.fillText(`${c.study.padEnd(24).slice(0, 24)} ${c.location.padEnd(12).slice(0, 12)} ${Math.floor(wait / 60)}h${String(wait % 60).padStart(2, '0')}`, 20, 80 + i * 23);
    });
    this.texA.needsUpdate = true;
    this.texB.needsUpdate = true;
  }
}
