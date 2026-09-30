// ED inhabitants: patients, nurses, registrars who want their scans, security, firefighters, a cat.
import * as THREE from 'three';
import { collideCircle, findPath, randomCellIn, zoneAtWorld, ZONE_BY_ID, regionAt, walkable, nearestWalkable, W } from './map.js';
import { mat } from './world.js';
import { sfx } from './audio.js';

const pick = (a) => a[Math.floor(Math.random() * a.length)];

const ROLES = {
  patient: { body: '#a9cbe8', title: 'Patient', speed: 1.1 },
  nurse: { body: '#1f3a68', title: 'ED Nurse', speed: 1.5 },
  nic: { body: '#0d1b3a', title: 'Nurse in Charge', speed: 1.6 },
  registrar: { body: '#7a1f3d', title: 'ED Registrar', speed: 1.7 },
  surgreg: { body: '#2f6b4f', title: 'Surgical Registrar', speed: 1.9 },
  consultant: { body: '#3b3b58', title: 'ED Consultant', speed: 1.3 },
  security: { body: '#15161a', title: 'Security', speed: 1.4 },
  firefighter: { body: '#b58a2c', title: 'Firefighter', speed: 2.4 },
  dms: { body: '#5a5f66', title: 'Director of Medical Services', speed: 1.5 },
  chaplain: { body: '#4b3a63', title: 'Hospital Chaplain', speed: 1.0 },
  radiographer: { body: '#2a7f8f', title: 'Radiographer', speed: 1.3 },
  cleaner: { body: '#5f7f6a', title: 'Night Cleaner', speed: 1.1 },
  ghost: { body: '#e8f0ff', title: 'Ghost of a Patient (unreported since 1987)', speed: 0.8 },
  cat: { body: '#e08a2e', title: 'Hospital cat', speed: 1.6 },
};
const SKIN = ['#f1c9a5', '#e0ac69', '#c68642', '#8d5524', '#ffdbac', '#a0673c'];

export const LINES = {
  nag: ['Any chance you\'ve looked at bed 4?', 'Is the CT reported yet?', 'The surgeons are asking...', 'Just a quick question!', 'I\'ve paged you like six times', 'My consultant wants it NOW', 'Is it... bad?', 'Can you just have a quick look?', 'It\'s been four hours!', 'Bed block is insane, we need that report'],
  queue: ['Hey! Got a sec?', 'Oh! You\'re here!', 'Can I grab you for one?', '*holding a form hopefully*', 'Quick one...'],
  panic: ['FIRE!!!', 'AAAAAAH', 'EVERYBODY OUT!', 'Not again!', 'WHO MICROWAVED FOIL?!', 'MY CANNULA!', 'Is this a drill?!', 'I\'M TOO YOUNG TO DIE (I\'m 84)'],
  miracle: ['I CAN WALK!', 'I\'m cured!! RUN!', 'Forget my hip!'],
  ow: ['OW!', 'HEY!', 'What the—', 'Seriously?!', 'I\'m writing an incident report', 'OOF', 'My back!'],
  patient: ['How long is the wait?', 'I\'ve been here 9 hours', 'Can I get a sandwich?', 'Is the doctor coming?', 'Is that the radiologist? I thought they were a myth', 'My pain is 11/10', 'Can I have a warm blanket?', 'I googled my symptoms...'],
  nurse: ['Bed 7 needs a cannula', 'Who took my pen?!', 'Obs are due', 'Has anyone seen the bladder scanner?', 'Resus 2 is kicking off'],
  consultant: ['...', 'Just checking in on the CT from four hours ago.', 'I\'ll wait.', 'No rush. (There is a rush.)', 'I trained with your consultant, you know.'],
  dms: ['Let\'s circle back on turnaround times.', 'Have you considered a KPI?', 'We need to be more agile.', 'Per my last email...', 'I\'m going to need a root cause analysis.', 'Let\'s take this offline.'],
  sandwich: ['*munch*', 'Mmm.', 'Mind your own business.', '*continues eating*'],
  security: ['OI! STOP RIGHT THERE!', 'Come back here!', 'Radiologist! Freeze!', 'Not in my ED!'],
  firefighter: ['Stand back!', 'Who\'s the idiot with the microwave?', 'Knockdown!', 'Hose it!'],
  cat: ['mrrp', 'mrow?', '*judges you*', 'mew'],
  search: ['Where did they go?', 'Doctor? Hellooo?', 'I KNOW you\'re in here', 'Their coffee is still warm...', 'Come out, it\'s just ONE scan!', 'Radiologist? Ollie ollie oxen free?', 'I can hear breathing...'],
  giveup: ['Guess they went home.', 'Fine. FINE.', 'I\'ll page them again.', 'Must be in the toilet. Again.'],
  found: ['FOUND YOU!', 'Aha! There you are!', 'Nice try.', 'Really? In THERE?'],
  lift: ['They took the lift!', 'The LIFT? Seriously?', 'I\'m not chasing them to the roof.'],
  knock: ['*knock knock*', 'I can see the light under the door!', 'I can hear you scrolling!', 'Open up, it\'s urgent!', 'Is this door... locked?', 'I\'ll slide the form under.'],
  chaplain: ['Would you like to talk?', 'Rough night?', 'I won\'t tell them you\'re here.', 'Bless this worklist.', 'Even radiologists need rest.'],
  cleaner: ['Mind the wet floor.', 'Who microwaved foil AGAIN?', 'I\'ve seen things in this hospital.', 'Don\'t step there. Just... don\'t.'],
  ghost: ['Did... you... report... my scan...?', 'It was... a pneumothorax...', 'Woooo. (unreported since 1987)', 'The lightbox... is still on...', 'Is it... morning yet...?'],
  thanks: ['Thanks!!', 'Legend!', 'You\'re the best', 'Finally!'],
  bounce: ['Ugh... fine.', 'My consultant said you\'d say that', 'I\'ll be back.', 'Rude.'],
};

function bubbleSprite() {
  const c = document.createElement('canvas');
  c.width = 512; c.height = 160;
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: t, depthTest: false, transparent: true }));
  s.scale.set(1.8, 0.56, 1);
  s.renderOrder = 10;
  s.visible = false;
  return { sprite: s, canvas: c, tex: t };
}

function drawBubble(b, text, shout) {
  const g = b.canvas.getContext('2d');
  g.clearRect(0, 0, 512, 160);
  g.font = `${shout ? 'bold ' : ''}34px "Archivo Narrow", Arial, sans-serif`;
  const words = text.split(' ');
  const lines = [];
  let cur = '';
  for (const w of words) {
    const t = cur ? cur + ' ' + w : w;
    if (g.measureText(t).width > 440 && cur) { lines.push(cur); cur = w; } else cur = t;
  }
  lines.push(cur);
  const lh = 38, h = lines.length * lh + 24;
  const wmax = Math.max(...lines.map((l) => g.measureText(l).width)) + 40;
  const x0 = 256 - wmax / 2, y0 = 130 - h;
  g.fillStyle = shout ? '#ffe45c' : '#ffffff';
  g.strokeStyle = '#111';
  g.lineWidth = 4;
  g.beginPath();
  g.roundRect(x0, y0, wmax, h, 18);
  g.moveTo(246, y0 + h); g.lineTo(256, 156); g.lineTo(270, y0 + h);
  g.fill();
  g.stroke();
  g.fillStyle = '#111';
  g.textAlign = 'center';
  g.textBaseline = 'middle';
  lines.forEach((l, i) => g.fillText(l, 256, y0 + 12 + lh * (i + 0.5)));
  b.tex.needsUpdate = true;
}

let uid = 0;

export class NPC {
  constructor(G, { role, name, x, z, home, special }) {
    this.G = G;
    this.id = ++uid;
    this.role = role;
    this.R = ROLES[role];
    this.name = name;
    this.special = special || null;
    this.pos = new THREE.Vector2(x, z);
    this.vel = new THREE.Vector2();
    this.face = Math.random() * 6;
    this.home = home || { zone: 'corridor' };
    this.state = 'idle';
    this.stateT = Math.random() * 3;
    this.path = null;
    this.pathT = 0;
    this.sayT = 0;
    this.nagT = Math.random() * 5;
    this.anger = 0;
    this.sooty = 0;
    this.fireT = 0;
    this.cooldown = 0;
    this.bed = null;
    this.seat = null;
    this.walkT = Math.random() * 10;
    this.returnDelay = 0;
    this.buildMesh();
    if (role === 'ghost') for (const m of this.mats) { m.transparent = true; m.opacity = 0.45; m.emissive = new THREE.Color('#8fb0ff'); }
    this.bubble = bubbleSprite();
    this.mesh.add(this.bubble.sprite);
    this.bubble.sprite.position.y = role === 'cat' ? 1.0 : 2.3;
    G.scene.add(this.mesh);
  }

  get title() { return this.R.title; }

  buildMesh() {
    const g = new THREE.Group();
    this.mesh = g;
    const body = new THREE.Group();
    g.add(body);
    this.body = body;
    this.mats = [];
    const m = (c) => { const mm = mat(c, { unique: true }); this.mats.push(mm); mm.userData.base = new THREE.Color(c); return mm; };
    if (this.role === 'cat') {
      const fur = m(this.R.body);
      const torso = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.2, 0.5), fur); torso.position.y = 0.25; body.add(torso);
      const head = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.18, 0.18), fur); head.position.set(0, 0.38, 0.3); body.add(head);
      for (const s of [-1, 1]) {
        const ear = new THREE.Mesh(new THREE.ConeGeometry(0.04, 0.08, 4), fur); ear.position.set(s * 0.06, 0.5, 0.3); body.add(ear);
        for (const zz of [-0.18, 0.18]) { const leg = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.16, 0.05), fur); leg.position.set(s * 0.08, 0.08, zz); body.add(leg); }
      }
      const tail = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.04, 0.35), fur); tail.position.set(0, 0.4, -0.35); tail.rotation.x = -0.7; body.add(tail);
      this.hitH = 0.5;
      return;
    }
    const cloth = m(this.R.body);
    const skin = m(pick(SKIN));
    const torso = new THREE.Mesh(new THREE.CapsuleGeometry(0.26, 0.55, 4, 10), cloth);
    torso.position.y = 0.95;
    body.add(torso);
    const legs = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.17, 0.55, 10), m(this.role === 'patient' ? '#e7eef4' : this.role === 'dms' ? '#2b2e33' : this.R.body));
    legs.position.y = 0.3;
    body.add(legs);
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.24, 16, 12), skin);
    head.position.y = 1.62;
    body.add(head);
    this.head = head;
    for (const s of [-1, 1]) {
      const eye = new THREE.Mesh(new THREE.SphereGeometry(0.035, 8, 6), mat('#111'));
      eye.position.set(s * 0.08, 1.66, 0.21);
      body.add(eye);
    }
    this.arms = [];
    for (const s of [-1, 1]) {
      const pivot = new THREE.Group();
      pivot.position.set(s * 0.33, 1.28, 0);
      const arm = new THREE.Mesh(new THREE.CapsuleGeometry(0.07, 0.42, 4, 6), cloth);
      arm.position.y = -0.26;
      pivot.add(arm);
      const hand = new THREE.Mesh(new THREE.SphereGeometry(0.075, 8, 6), skin);
      hand.position.y = -0.55;
      pivot.add(hand);
      body.add(pivot);
      this.arms.push(pivot);
    }
    // Hair / role accessories
    const hairC = pick(['#2b1b10', '#4a2f1b', '#111', '#8a6a3a', '#c8c8c8', '#6b2a12']);
    this.hairColor = hairC;
    if (this.role !== 'firefighter' && this.role !== 'security') {
      const hair = new THREE.Mesh(new THREE.SphereGeometry(0.25, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2), mat(hairC));
      hair.position.y = 1.65;
      hair.rotation.x = -0.25;
      body.add(hair);
    }
    const acc = (geo, c, x, y, z, rx = 0) => { const a = new THREE.Mesh(geo, mat(c)); a.position.set(x, y, z); a.rotation.x = rx; body.add(a); return a; };
    if (this.role === 'registrar' || this.role === 'surgreg' || this.role === 'consultant') {
      acc(new THREE.TorusGeometry(0.16, 0.015, 6, 16, Math.PI), '#222', 0, 1.35, 0.1, Math.PI / 2 + 0.3);
      const cb = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.32, 0.02), mat('#8b5a2b'));
      cb.position.set(0, -0.55, 0.12);
      const sheet = new THREE.Mesh(new THREE.BoxGeometry(0.21, 0.26, 0.005), mat('#fafafa'));
      sheet.position.z = 0.012;
      cb.add(sheet);
      this.arms[1].add(cb);
      this.arms[1].rotation.x = -0.6;
    }
    if (this.role === 'consultant') acc(new THREE.BoxGeometry(0.16, 0.06, 0.03), '#b0122d', 0, 1.38, 0.25);
    if (this.role === 'dms') { acc(new THREE.BoxGeometry(0.07, 0.35, 0.02), '#b0122d', 0, 1.15, 0.27); acc(new THREE.BoxGeometry(0.3, 0.05, 0.02), '#f0f0f0', 0, 1.37, 0.24); }
    if (this.role === 'security') { acc(new THREE.CylinderGeometry(0.26, 0.26, 0.1, 12), '#0b0b0e', 0, 1.82, 0); acc(new THREE.BoxGeometry(0.32, 0.03, 0.18), '#0b0b0e', 0, 1.78, 0.18); acc(new THREE.BoxGeometry(0.2, 0.07, 0.02), '#ddd', 0, 1.15, 0.27); }
    if (this.role === 'firefighter') { acc(new THREE.SphereGeometry(0.29, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2), '#f2c21b', 0, 1.7, 0); acc(new THREE.BoxGeometry(0.56, 0.05, 0.6), '#dcdcdc', 0, 0.95, 0).visible = true; }
    if (this.role === 'nic') acc(new THREE.BoxGeometry(0.12, 0.08, 0.02), '#ffd400', 0.12, 1.2, 0.27);
    if (this.role === 'patient') acc(new THREE.TorusGeometry(0.075, 0.015, 6, 12), '#fff', 0.33, 0.73, 0, Math.PI / 2);
    // Soot "afro": sits on top of and behind the head so the face stays visible.
    this.afro = new THREE.Mesh(new THREE.SphereGeometry(0.3, 10, 8), mat('#111'));
    this.afro.position.set(0, 1.86, -0.06);
    this.afro.scale.set(1, 0.75, 1);
    this.afro.visible = false;
    body.add(this.afro);
    this.hitH = 1.9;
  }

  say(text, dur = 3, shout = false) {
    drawBubble(this.bubble, text, shout);
    this.bubble.sprite.visible = true;
    this.sayT = dur;
  }

  goTo(x, z) {
    this.path = findPath(this.pos.x, this.pos.y, x, z);
    this.pathT = 0;
    return !!this.path;
  }

  setState(s, t = 0) { this.state = s; this.stateT = t; }

  knock(vx, vz, fromPlayer = true, up = 0, shout) {
    if (!this.kv) { this.kv = new THREE.Vector2(); this.air = 0; this.vy = 0; }
    if (this.state === 'knocked') { this.kv.x += vx * 0.5; this.kv.y += vz * 0.5; this.vy = Math.max(this.vy, up); return; }
    this.detachBed();
    this.prevState = this.state === 'lie' ? 'return' : this.state;
    this.setState('knocked', 2.6 + up * 0.15);
    this.kv.set(vx, vz);
    this.vy = up;
    this.say(shout || (this.role === 'cat' ? 'MRRROW!' : pick(LINES.ow)), 2, true);
    this.role === 'cat' ? sfx.meow() : sfx.ow();
    if (fromPlayer) { this.anger++; this.G.stats.hits++; this.G.onAssault?.(this); }
  }

  ignite() {
    if (this.state === 'onfire' || this.fireT > 0) return;
    this.detachBed();
    this.fireT = 5;
    this.setState('onfire', 5);
    this.say(this.role === 'cat' ? 'MREEEOW' : 'AAAAH I\'M ON FIRE', 2.5, true);
    sfx.scream();
    this.G.stats.npcsIgnited++;
  }

  // Defibrillated: hair stands on end, they fly backwards.
  zap(dx, dz) {
    // Hair stands on end: a crown of spikes in their own hair colour.
    if (!this.frizz && this.head) {
      this.frizz = new THREE.Group();
      const m = mat(this.hairColor || '#2b1b10');
      for (let i = 0; i < 14; i++) {
        const a = (i / 14) * Math.PI * 2, tilt = 0.35 + (i % 3) * 0.2;
        const spike = new THREE.Mesh(new THREE.ConeGeometry(0.035, 0.28, 5), m);
        spike.position.set(Math.cos(a) * 0.13, 0.12, Math.sin(a) * 0.13 - 0.02);
        spike.rotation.set(Math.sin(a) * tilt, 0, -Math.cos(a) * tilt);
        this.frizz.add(spike);
      }
      const top = new THREE.Mesh(new THREE.ConeGeometry(0.04, 0.32, 5), m);
      top.position.set(0, 0.2, -0.02);
      this.frizz.add(top);
      this.frizz.position.y = 1.72;
      this.body.add(this.frizz);
    }
    this.knock(dx * 7, dz * 7, true, 5, this.role === 'cat' ? 'MRRRZZZT' : pick(['BZZZZT', 'AAAARGH', 'I DON\'T HAVE A PULSE PROBLEM!', 'My fillings!']));
  }

  soot() {
    this.sooty = 1;
    const black = new THREE.Color('#1c1a18');
    for (const m of this.mats) m.color.copy(m.userData.base).lerp(black, 0.7);
    if (this.afro) this.afro.visible = true;
  }

  attachBed(bed) {
    this.bed = bed;
    bed.rider = this;
    this.setState('lie');
  }
  detachBed() {
    if (this.bed) { this.bed.rider = null; this.homeBed = this.bed; this.bed = null; }
  }

  distToPlayer() { const p = this.G.player.pos; return Math.hypot(p.x - this.pos.x, p.z - this.pos.y); }
  region() { return regionAt(this.pos.x, this.pos.y); }
  canSee() { return this.G.playerVisible() && this.G.playerRegion() === this.region(); }

  // Lost sight of the player (hid, took the lift, or locked a door): go look where they were last seen.
  startSearch() {
    const G = this.G;
    this.resumeState = this.state;
    this.searchT = 14 + Math.random() * 10;
    this.checkT = 1.5;
    this.pathT = 0;
    if (G.lastSeen.region !== this.region()) {
      // Chased them to the lift
      this.goTo(61.2, 10.5);
      this.say(G.lastSeen.lift ? pick(LINES.lift) : pick(LINES.search), 3);
    } else this.say(pick(LINES.search), 3);
    this.setState('search');
  }
  giveUp() {
    this.say(pick(LINES.giveup), 3);
    this.cooldown = 35 + Math.random() * 20;
    this.G.stats.searchesEvaded++;
    this.setState('idle', 1);
  }

  // Decide what to do next (roles).
  think() {
    const G = this.G;
    switch (this.role) {
      case 'patient':
        if (this.homeBed) { this.goTo(this.homeBed.pos.x, this.homeBed.pos.z); this.setState('toBed'); return; }
        if (this.seat) { this.goTo(this.seat.x, this.seat.z); this.setState('toSeat'); return; }
        break;
      case 'registrar':
      case 'surgreg': {
        const pending = G.pendingFor(this);
        if (this.cooldown <= 0 && pending.length) {
          if (G.list() >= G.T.chase && this.canSee()) { this.setState('chase'); return; }
          if (G.list() >= G.T.queue) { this.setState('toQueue'); return; }
        }
        break;
      }
      case 'consultant':
      case 'dms':
        if (this.dismiss) { this.goTo(10.5, 27); this.setState('leave'); return; }
        if (this.canSee() && this.cooldown <= 0) { this.setState('stalk'); return; }
        break;
      case 'radiographer': {
        // Stand at the console while a scan is running; otherwise potter about the department.
        const spot = G.world.consoleSpots[this.scanner];
        if (G.scan?.busy[this.scanner] || Math.random() < 0.6) { this.goTo(spot.x + (Math.random() - 0.5) * 0.4, spot.z + (Math.random() - 0.5) * 0.4); this.setState('walk'); return; }
        break;
      }
      case 'ghost': {
        const t = randomCellIn(Math.random() < 0.5 ? 'basement' : pick(['morgue', 'archive', 'olddept']));
        this.goTo(t.x, t.z);
        this.setState('walk');
        return;
      }
      case 'security':
        if (G.wanted > 0 && this.cooldown <= 0) { this.setState('hunt'); this.say(pick(LINES.security), 2.5, true); return; }
        this.goTo(23.5 + Math.random(), 16 + Math.random());
        this.setState('walk', 0);
        return;
      case 'firefighter':
        this.setState('fight');
        return;
    }
    const zone = this.home.zone || 'corridor';
    const t = randomCellIn(Math.random() < 0.7 ? zone : 'corridor');
    this.goTo(t.x, t.z);
    this.setState('walk');
  }

  follow(dt, speed, arrive = 0.25) {
    if (!this.path || !this.path.length) return true;
    const wp = this.path[0];
    const dx = wp.x - this.pos.x, dz = wp.z - this.pos.y;
    const d = Math.hypot(dx, dz);
    if (d < arrive) { this.path.shift(); this.progT = 0; return !this.path.length; }
    // Stuck detection: no progress toward the waypoint for a while (pinned against furniture or a crowd).
    if (this.wpRef !== wp || d < (this.bestD ?? Infinity) - 0.05) { this.wpRef = wp; this.bestD = d; this.progT = 0; }
    else this.progT = (this.progT || 0) + dt;
    if (this.progT > 0.9) {
      this.progT = 0;
      this.bestD = Infinity;
      this.stuckN = (this.stuckN || 0) + 1;
      const last = this.path[this.path.length - 1];
      if (this.path.length === 1 && d < 1.4) { this.path.shift(); this.stuckN = 0; return true; } // close enough
      // Re-plan from where we actually are; if that keeps failing, step to the nearest open cell.
      this.path = findPath(this.pos.x, this.pos.y, last.x, last.z);
      if (this.stuckN > 2) {
        const n = nearestWalkable(Math.floor(this.pos.x), Math.floor(this.pos.y));
        if (n) { this.pos.set(n.x + 0.5, n.y + 0.5); this.path = findPath(this.pos.x, this.pos.y, last.x, last.z); }
        this.stuckN = 0;
      }
      return !this.path || !this.path.length;
    }
    this.vel.set((dx / d) * speed, (dz / d) * speed);
    this.face = Math.atan2(dx, dz);
    return false;
  }

  update(dt) {
    const G = this.G;
    this.walkT += dt;
    this.stateT -= dt;
    this.cooldown -= dt;
    if (this.sayT > 0) { this.sayT -= dt; if (this.sayT <= 0) this.bubble.sprite.visible = false; }
    this.vel.set(0, 0);
    const P = G.player.pos;
    const dP = this.distToPlayer();

    // Fire overrides
    if (this.state !== 'onfire' && this.role !== 'firefighter' && this.role !== 'ghost' && G.fire.at(this.pos.x, this.pos.y) > 0.35) this.ignite();

    // Evacuation override
    const evacuates = !['firefighter', 'security', 'dms', 'ghost'].includes(this.role) && this.special !== 'sandwich' && this.region() === 'main';
    if (G.alarm && evacuates && !['panic', 'assembled', 'knocked', 'onfire'].includes(this.state)) {
      if (this.state === 'lie' && Math.random() < 0.5) this.say(pick(LINES.miracle), 2.5, true);
      this.detachBed();
      this.startPanic();
    }

    switch (this.state) {
      case 'idle':
        if (this.stateT <= 0) this.think();
        break;
      case 'walk':
        if (this.follow(dt, this.R.speed)) this.setState('idle', 1 + Math.random() * 4);
        if (this.role === 'patient' && Math.random() < 0.002 && dP < 6) this.say(pick(LINES.patient));
        if (this.role === 'nurse' && Math.random() < 0.0015 && dP < 8) this.say(pick(LINES.nurse));
        if ((this.role === 'chaplain' || this.role === 'cleaner' || this.role === 'ghost') && Math.random() < 0.004 && dP < 7) this.say(pick(LINES[this.role]), 3);
        break;
      case 'toBed':
        if (!this.homeBed) { this.setState('idle', 1); break; }
        if (this.pathT <= 0) { this.goTo(this.homeBed.pos.x, this.homeBed.pos.z); this.pathT = 1.5; }
        this.pathT -= dt;
        this.follow(dt, this.R.speed);
        if (Math.hypot(this.homeBed.pos.x - this.pos.x, this.homeBed.pos.z - this.pos.y) < 1.1 && !this.homeBed.rider && !this.homeBed.held && !this.homeBed.pushed) this.attachBed(this.homeBed);
        break;
      case 'toSeat':
        if (this.follow(dt, this.R.speed)) { this.setState('sit'); this.pos.set(this.seat.x, this.seat.z); this.face = Math.PI; }
        break;
      case 'sit':
        this.face = Math.PI;
        if (this.special !== 'sandwich' && Math.random() < 0.0008) { const t = randomCellIn('waiting'); this.goTo(t.x, t.z); this.setState('stroll'); }
        if (Math.random() < 0.0015 && dP < 7) this.say(this.special === 'sandwich' ? pick(LINES.sandwich) : pick(LINES.patient));
        break;
      case 'stroll':
        if (this.follow(dt, this.R.speed)) this.think();
        break;
      case 'lie':
        if (!this.bed) { this.setState('idle', 0.5); break; }
        this.pos.set(this.bed.pos.x, this.bed.pos.z);
        this.face = this.bed.yaw;
        if (Math.random() < 0.0012 && dP < 6) this.say(pick(LINES.patient));
        break;
      case 'toQueue': {
        const idx = G.queueIndex(this);
        if (idx < 0) { this.setState('idle', 2); break; }
        const s = G.world.queueSpots[idx];
        if (this.pathT <= 0) { this.goTo(s.x, s.z); this.pathT = 3; }
        this.pathT -= dt;
        if (this.follow(dt, this.R.speed * 1.2)) this.setState('queued', 25 + Math.random() * 20);
        break;
      }
      case 'queued': {
        this.face = Math.atan2(P.x - this.pos.x, P.z - this.pos.y);
        if (!G.pendingFor(this).length) { G.leaveQueue(this); this.think(); break; }
        this.nagT -= dt;
        if (dP < 3 && this.nagT <= 0) { this.say(pick(LINES.queue)); this.nagT = 6; }
        if (this.stateT <= 0 && G.list() >= G.T.chase) { G.leaveQueue(this); this.setState('chase'); }
        break;
      }
      case 'chase': {
        if (!G.pendingFor(this).length || this.cooldown > 0) { this.think(); break; }
        if (!this.canSee()) { this.startSearch(); break; }
        this.pathT -= dt;
        if (dP > 1.4) {
          if (this.pathT <= 0) {
            this.pathT = 0.7;
            if (!this.goTo(P.x, P.z)) { this.startKnock(); break; }
          }
          this.follow(dt, this.R.speed * 1.35);
        } else {
          this.face = Math.atan2(P.x - this.pos.x, P.z - this.pos.y);
          this.nagT -= dt;
          if (this.nagT <= 0) { this.say(pick(LINES.nag), 3); this.nagT = 4 + Math.random() * 3; G.stats.nags++; this.nagCount = (this.nagCount || 0) + 1; }
        }
        break;
      }
      case 'stalk': {
        if (!this.dismiss && !this.canSee()) { this.startSearch(); break; }
        this.pathT -= dt;
        const keep = this.role === 'dms' ? 2.2 : 1.8;
        if (dP > keep) {
          if (this.pathT <= 0) { this.goTo(P.x, P.z); this.pathT = 0.8; }
          this.follow(dt, this.R.speed * 1.4);
        } else this.face = Math.atan2(P.x - this.pos.x, P.z - this.pos.y);
        this.nagT -= dt;
        if (this.nagT <= 0 && dP < 5) { this.say(pick(LINES[this.role]), 3.5); this.nagT = 7 + Math.random() * 5; }
        if (this.dismiss) { this.goTo(10.5, 27); this.setState('leave'); }
        break;
      }
      case 'hunt': {
        if (G.wanted <= 0) { this.think(); break; }
        if (!this.canSee()) { this.startSearch(); break; }
        this.pathT -= dt;
        if (this.pathT <= 0) { this.pathT = 0.5; if (!this.goTo(P.x, P.z)) { this.startKnock(); this.knockT = 8; break; } }
        this.follow(dt, 4.3);
        if (Math.random() < 0.01) this.say(pick(LINES.security), 2, true);
        if (dP < 1.0) G.caught(this);
        break;
      }
      case 'fight': {
        const tgt = G.nearestFire(this.pos.x, this.pos.y);
        if (!tgt) { if (!G.alarm) { this.goTo(10.5, 27.5); this.setState('leave'); } break; }
        const dx = tgt.x - this.pos.x, dz = tgt.z - this.pos.y;
        const d = Math.hypot(dx, dz);
        if (d > 2.5) {
          this.pathT -= dt;
          if (this.pathT <= 0) { this.goTo(tgt.x, tgt.z); this.pathT = 1.2; }
          this.follow(dt, this.R.speed);
        } else {
          this.face = Math.atan2(dx, dz);
          G.fire.suppressCone(this.pos.x, this.pos.y, dx / d, dz / d, 4.5, 2.2, dt);
          G.spray(this.pos.x + Math.sin(this.face) * 0.5, 1.2, this.pos.y + Math.cos(this.face) * 0.5, dx / d, -0.1, dz / d, true);
          if (Math.random() < 0.004) this.say(pick(LINES.firefighter), 2, true);
        }
        break;
      }
      case 'meeting': {
        // Pulled into a meeting after a RiskMann report: sits in the cafe looking chastened.
        this.meetingT -= dt;
        if (!this.meetingSpot) { this.meetingSpot = randomCellIn('cafe'); this.goTo(this.meetingSpot.x, this.meetingSpot.z); }
        this.follow(dt, this.R.speed);
        if (Math.random() < 0.003 && dP < 6) this.say(pick(['I\'m in a meeting.', 'Apparently I "page too much".', 'I\'m reflecting. On my practice.']), 3);
        if (this.meetingT <= 0) { this.meetingSpot = null; this.cooldown = 30; this.setState('idle', 1); }
        break;
      }
      case 'search': {
        if (this.canSee() && dP < 9) {
          this.say(pick(['THERE you are!', 'Gotcha!', 'Oh hi!']), 2, true);
          this.setState(this.resumeState === 'search' ? 'chase' : this.resumeState || 'chase');
          break;
        }
        this.searchT -= dt;
        if (this.searchT <= 0) { this.giveUp(); break; }
        if (!this.path || !this.path.length) {
          this.pathT -= dt;
          if (this.pathT <= 0) {
            this.pathT = 1 + Math.random() * 2;
            const ls = G.lastSeen;
            if (ls.region === this.region()) {
              for (let k = 0; k < 6; k++) {
                const tx = ls.x + (Math.random() - 0.5) * 7, tz = ls.z + (Math.random() - 0.5) * 7;
                if (walkable(Math.floor(tx), Math.floor(tz)) && this.goTo(tx, tz)) break;
              }
            }
            if (Math.random() < 0.35) this.say(pick(LINES.search), 2.5);
          }
        }
        this.follow(dt, this.R.speed);
        // Poke around near hiding spots
        const h = G.player.hidden;
        this.checkT -= dt;
        if (h && this.checkT <= 0) {
          this.checkT = 1.5;
          if (this.region() === G.playerRegion() && Math.hypot(h.x - this.pos.x, h.z - this.pos.y) < 2.2 && Math.random() < h.chance) G.foundPlayer(this);
          else if (h.id === 'stall' && Math.hypot(h.x - this.pos.x, h.z - this.pos.y) < 3 && Math.random() < 0.4) this.say('I can see your shoes under the door...', 3);
        }
        break;
      }
      case 'knock': {
        if (!G.world.doorLocked) { this.setState('chase'); break; }
        this.knockT -= dt;
        if (this.follow(dt, this.R.speed)) this.face = Math.PI;
        this.nagT -= dt;
        if (this.nagT <= 0) { this.say(pick(LINES.knock), 2.5); this.nagT = 4 + Math.random() * 3; G.onKnock(this); }
        if (this.knockT <= 0) {
          if (this.role === 'security') { G.world.setDoorLocked(false); this.say('I have a key, doc.', 3); G.toast('Security unlocked the reading-room door.'); this.setState('hunt'); break; }
          this.giveUp();
        }
        break;
      }
      case 'leave':
        if (this.follow(dt, this.R.speed)) this.remove = true;
        break;
      case 'panic':
        if (this.follow(dt, this.role === 'cat' ? 5 : 4.2)) this.setState('assembled', 0);
        if (Math.random() < 0.012) this.say(pick(LINES.panic), 1.6, true);
        if (Math.random() < 0.003) sfx.scream();
        break;
      case 'assembled':
        this.face += dt * 0.3;
        if (!G.alarm) {
          this.returnDelay -= dt;
          if (this.returnDelay <= 0) this.think();
        } else this.returnDelay = 3 + Math.random() * 8;
        break;
      case 'knocked':
        this.air += this.vy * dt;
        this.vy -= 18 * dt;
        if (this.air <= 0) { this.air = 0; this.vy = 0; this.kv.multiplyScalar(Math.pow(0.08, dt)); }
        if (this.stateT <= 0) {
          if (this.anger > 2 && this.role !== 'cat' && Math.random() < 0.6) this.say('That\'s it. I\'m calling security.', 3);
          this.setState('idle', 0.5);
        }
        break;
      case 'onfire':
        if (this.stateT <= 0 || G.fire.wet[Math.floor(this.pos.y) * W + Math.floor(this.pos.x)] > 0) {
          this.fireT = 0;
          this.soot();
          this.say('*cough*', 2);
          this.startPanic();
          break;
        }
        if (Math.random() < 0.05 || !this.path || !this.path.length) { const t = { x: this.pos.x + (Math.random() - 0.5) * 8, z: this.pos.y + (Math.random() - 0.5) * 8 }; this.goTo(t.x, t.z); }
        this.follow(dt, 4.6);
        G.flames(this.pos.x, 1.0, this.pos.y, 0.8);
        break;
    }

    // Integrate + collide
    if (this.state === 'knocked') {
      this.pos.x += this.kv.x * dt; this.pos.y += this.kv.y * dt;
    } else if (this.state !== 'lie' && this.state !== 'sit') {
      this.pos.x += this.vel.x * dt; this.pos.y += this.vel.y * dt;
    }
    if (this.state !== 'lie' && this.state !== 'sit') {
      const c = { x: this.pos.x, z: this.pos.y };
      collideCircle(c, 0.28);
      this.pos.set(c.x, c.z);
    }
    this.animate(dt);
  }

  startKnock() {
    this.goTo(5 + (Math.random() - 0.5) * 1.5, 9.4 + Math.random() * 0.6);
    this.knockT = 20 + Math.random() * 15;
    this.setState('knock');
  }

  startPanic() {
    const t = randomCellIn('outside');
    t.x = 22 + Math.random() * 19;
    t.z = 26.3 + Math.random() * 2.2;
    this.goTo(t.x, t.z);
    this.setState('panic');
    this.returnDelay = 3 + Math.random() * 8;
  }

  animate(dt) {
    const g = this.mesh, b = this.body;
    g.position.set(this.pos.x, 0, this.pos.y);
    const moving = this.vel.lengthSq() > 0.05;
    g.rotation.set(0, this.face, 0);
    b.position.set(0, 0, 0);
    b.rotation.set(0, 0, 0);
    if (this.state === 'lie') {
      b.rotation.x = -Math.PI / 2;
      b.position.set(0, 0.9, 0.85);
    } else if (this.state === 'knocked') {
      b.rotation.x = -Math.PI / 2;
      b.position.set(0, 0.25 + (this.air || 0), 0.3);
      if (this.air > 0.05) b.rotation.z = this.walkT * 14;
    } else if (this.state === 'sit') {
      b.position.y = -0.25;
    } else if (this.role === 'ghost') {
      b.position.y = 0.25 + Math.sin(this.walkT * 2) * 0.12;
    } else if (moving) {
      b.position.y = Math.abs(Math.sin(this.walkT * 9)) * 0.06;
    }
    if (this.arms) {
      const panic = this.state === 'panic' || this.state === 'onfire';
      const sw = moving ? Math.sin(this.walkT * 9) * 0.6 : 0;
      this.arms[0].rotation.x = panic ? -2.8 + Math.sin(this.walkT * 20) * 0.4 : sw;
      const clip = this.role === 'registrar' || this.role === 'surgreg' || this.role === 'consultant';
      this.arms[1].rotation.x = panic ? -2.8 + Math.cos(this.walkT * 20) * 0.4 : clip ? -0.6 : -sw;
    }
  }

  dispose() {
    this.G.scene.remove(this.mesh);
  }
}

export function zoneOf(npc) { return zoneAtWorld(npc.pos.x, npc.pos.y); }
export { ZONE_BY_ID };
