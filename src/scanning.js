// The imaging department actually scans people. Requests queue for the right machine, a radiographer
// runs the scan (patient slides through the CT gantry / into the MRI bore / stands at the chest stand),
// and only then does the study appear on your worklist. No radiographer, a fire, sprinklers or a
// quenched magnet means that machine is down and its queue stops moving.
import * as THREE from 'three';
import { sfx } from './audio.js';
import { zoneAtWorld } from './map.js';

const pick = (a) => a[Math.floor(Math.random() * a.length)];
const DUR = { ct: 14, mri: 28, xr: 6 };
const NAMES = { ct: 'CT', mri: 'MRI', xr: 'X-ray' };
export const scannerFor = (c) => ({ abdo: 'ct', head: 'ct', chest: 'ct', mr: 'mri', xr: 'xr' })[c.modality] || null;

function patientMesh(scene, lying) {
  const g = new THREE.Group();
  const gown = new THREE.MeshLambertMaterial({ color: '#a9cbe8' });
  const skin = new THREE.MeshLambertMaterial({ color: pick(['#f1c9a5', '#e0ac69', '#c68642', '#8d5524']) });
  const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.22, 1.0, 4, 10), gown);
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.2, 12, 10), skin);
  if (lying) {
    body.rotation.z = Math.PI / 2; body.position.set(0.1, 0.2, 0);
    head.position.set(-0.75, 0.25, 0);
  } else {
    body.position.y = 0.95; head.position.y = 1.72;
    for (const s of [-1, 1]) { const arm = new THREE.Mesh(new THREE.CapsuleGeometry(0.07, 0.45, 4, 6), gown); arm.position.set(s * 0.3, 1.45, 0.05); arm.rotation.z = s * 2.6; g.add(arm); }
  }
  g.add(body, head);
  g.visible = false;
  scene.add(g);
  return g;
}

export class Scanning {
  constructor(G) {
    this.G = G;
    this.q = { ct: [], mri: [], xr: [] };
    this.busy = { ct: null, mri: null, xr: null };
    this.downSince = { ct: 0, mri: 0, xr: 0 };
    this.lastReason = {};
    this.meshes = { ct: patientMesh(G.scene, true), mri: patientMesh(G.scene, true), xr: patientMesh(G.scene, false) };
    this.setLights('ct', false); this.setLights('mri', false); this.setLights('xr', false);
  }

  enqueue(c, front = false) {
    const id = scannerFor(c);
    if (!id) return false;
    c.status = 'toScan';
    c.scanner = id;
    front ? this.q[id].unshift(c) : this.q[id].push(c);
    return true;
  }

  // A metal object reached the bore mid-scan: the scan is ruined (and the patient is not happy).
  onMetalInBore(p) {
    const job = this.busy.mri;
    if (!job || job.t < job.dur * 0.2) return;
    job.t = 0;
    this.G.stats.scansRuined = (this.G.stats.scansRuined || 0) + 1;
    this.radiographer('mri')?.say(`A ${p.T.name.toLowerCase()} just flew into the bore! Starting again!`, 3, true);
    this.G.toast(`A ${p.T.name.toLowerCase()} flew into the MRI mid-scan. The patient screamed. The scan restarts.`, 'bad');
  }

  queued(id) { return this.q[id].length + (this.busy[id] ? 1 : 0); }

  radiographer(id) {
    return this.G.npcs.find((n) => n.role === 'radiographer' && n.scanner === id && !n.remove);
  }

  // Why a machine can't scan right now (or null if it can).
  downReason(id) {
    const G = this.G;
    const S = G.world.scanners[id];
    if (id === 'mri' && G.quenched) return 'the magnet was quenched';
    const zf = G.zoneFire?.[S.zone];
    if (zf && zf.sprinkle > 0) return 'the sprinklers are going off';
    const p = S.table ? { x: (S.table.x0 + S.table.x1) / 2, z: S.table.z } : S.stand;
    if (G.fire.at(p.x, p.z) > 0.05 || (zf && zf.t > 0)) return 'it\'s on fire';
    const r = this.radiographer(id);
    if (!r) return 'there\'s no radiographer';
    if (['knocked', 'panic', 'assembled', 'onfire', 'meeting', 'leave'].includes(r.state)) return r.state === 'meeting' ? 'the radiographer is in a meeting' : 'the radiographer is indisposed';
    return null;
  }

  setLights(id, on) {
    for (const l of this.G.world.scanners[id].lights) l.material.color.set(on ? '#ffffff' : '#3a3a3a');
  }

  update(dt) {
    const G = this.G;
    for (const id of ['ct', 'mri', 'xr']) {
      const S = G.world.scanners[id];
      const mesh = this.meshes[id];
      const reason = this.downReason(id);
      // Down: tell people about it now and then.
      if (reason && this.queued(id)) {
        this.downSince[id] += dt;
        if (this.lastReason[id] !== reason) { this.lastReason[id] = reason; G.toast(`${NAMES[id]} is down: ${reason}. ${this.queued(id)} waiting.`, 'bad'); }
        if (this.downSince[id] > 50) { this.downSince[id] = 0; G.page?.(`ED: "Why is ${NAMES[id]} down?! ${this.queued(id)} patients waiting!"`); }
      } else { this.downSince[id] = 0; this.lastReason[id] = null; }

      let job = this.busy[id];
      if (!job) {
        if (reason || !this.q[id].length) { mesh.visible = false; this.setLights(id, false); continue; }
        job = this.busy[id] = { c: this.q[id].shift(), t: 0, dur: DUR[id] * (0.8 + Math.random() * 0.4) };
        const r = this.radiographer(id);
        r?.say(pick(id === 'xr' ? ['Next patient! Stand here for me.', 'Chin up, deep breath in...'] : id === 'mri' ? ['Any metal on you? No? Good.', 'It\'ll be loud. Very loud.'] : ['Arms up above your head for me.', 'Just a little scratch for the contrast.']), 3);
      }
      if (reason) { this.setLights(id, false); continue; } // paused mid-scan
      job.t += dt;
      const k = job.t / job.dur;
      mesh.visible = true;
      let exposing = false;
      if (id === 'xr') {
        mesh.position.set(S.stand.x, 0, S.stand.z + 0.35);
        mesh.rotation.y = Math.PI;
        exposing = k > 0.5 && k < 0.6;
        if (exposing && !job.beeped) { job.beeped = true; sfx.ding(); }
      } else {
        const T = S.table;
        const inAmt = k < 0.25 ? k / 0.25 : k > 0.75 ? (1 - k) / 0.25 : 1;
        mesh.position.set(T.x0 + (T.x1 - T.x0) * inAmt, T.y - 0.22, T.z);
        exposing = k > 0.3 && k < 0.7;
        // CT runs quietly; MRI keeps its clatter.
        if (id === 'mri') {
          job.snd = (job.snd || 0) - dt;
          if (exposing && job.snd <= 0) { sfx.thud(0.35); job.snd = 0.28; }
        }
      }
      this.setLights(id, exposing || (id === 'mri' && k > 0.25 && k < 0.75));
      // Standing in the room while it's exposing earns you a telling-off (and restarts the scan).
      if (exposing && id !== 'mri') {
        const P = G.player;
        const inRoom = zoneAtWorld(P.pos.x, P.pos.z)?.id === S.zone && !(id === 'xr' && P.pos.x > 51.4) && !P.hidden;
        if (inRoom) {
          job.t = 0; job.beeped = false;
          G.stats.radiationDoses++;
          const r = this.radiographer(id);
          r?.say('GET OUT OF THE ROOM! I\'m restarting the scan!', 3, true);
          G.toast(`You were standing in the ${NAMES[id]} room during an exposure. The radiographer is not impressed.`, 'bad');
          if (G.stats.radiationDoses === 3) G.reportAboutYou?.(r?.name || 'Radiographer', 'Radiation safety breach', '"Stood in the room. THREE TIMES."');
        }
      }
      if (job.t >= job.dur) {
        this.busy[id] = null;
        mesh.visible = false;
        this.setLights(id, false);
        G.onScanned(job.c);
      }
    }
  }
}
