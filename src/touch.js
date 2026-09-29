// On-screen controls for phones and tablets: a move stick, drag-to-look, and action buttons.
// Buttons drive the same input paths as the keyboard and mouse, so game logic doesn't need to know about touch.

export function isTouchDevice() {
  return window.matchMedia?.('(pointer: coarse)').matches || 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}

const key = (code, down) => window.dispatchEvent(new KeyboardEvent(down ? 'keydown' : 'keyup', { code }));

export function setupTouch(G) {
  const P = G.player;
  document.body.classList.add('touch');
  const fine = document.querySelector('#start .fine');
  if (fine) fine.textContent = 'Touch controls: left stick moves (push it all the way to run), drag anywhere else to look, and the buttons do the rest. Landscape works best.';

  const root = document.createElement('div');
  root.id = 'touch';
  root.hidden = true;
  root.innerHTML = `
    <div id="t-look"></div>
    <div id="t-stick"><div id="t-knob"></div></div>
    <div id="t-buttons">
      <button id="t-grab" class="t-btn big">Grab</button>
      <button id="t-use" class="t-btn">E<small>Use</small></button>
      <button id="t-item" class="t-btn" hidden>Item</button>
      <button id="t-jump" class="t-btn">Jump</button>
      <button id="t-drop" class="t-btn" hidden>Drop</button>
    </div>
    <button id="t-help" class="t-btn small">?</button>`;
  document.body.appendChild(root);
  const $ = (id) => document.getElementById(id);

  // Move stick
  const stick = $('t-stick'), knob = $('t-knob');
  let stickId = null, cx = 0, cy = 0;
  const R = 55;
  stick.addEventListener('pointerdown', (e) => {
    stickId = e.pointerId;
    stick.setPointerCapture(e.pointerId);
    const r = stick.getBoundingClientRect();
    cx = r.left + r.width / 2; cy = r.top + r.height / 2;
    moveStick(e);
  });
  const moveStick = (e) => {
    if (e.pointerId !== stickId) return;
    let dx = e.clientX - cx, dy = e.clientY - cy;
    const d = Math.hypot(dx, dy);
    if (d > R) { dx = (dx / d) * R; dy = (dy / d) * R; }
    knob.style.transform = `translate(${dx}px, ${dy}px)`;
    P.touchMove = { x: dx / R, y: -dy / R };
  };
  stick.addEventListener('pointermove', moveStick);
  const endStick = (e) => {
    if (e.pointerId !== stickId) return;
    stickId = null;
    knob.style.transform = '';
    P.touchMove = null;
  };
  stick.addEventListener('pointerup', endStick);
  stick.addEventListener('pointercancel', endStick);

  // Look: drag anywhere that isn't a control
  const look = $('t-look');
  const lookers = new Map();
  look.addEventListener('pointerdown', (e) => {
    look.setPointerCapture(e.pointerId);
    lookers.set(e.pointerId, { x: e.clientX, y: e.clientY });
  });
  look.addEventListener('pointermove', (e) => {
    const l = lookers.get(e.pointerId);
    if (!l || G.mode !== 'play') return;
    const k = 0.0055;
    P.yaw -= (e.clientX - l.x) * k;
    P.pitch = Math.max(-1.45, Math.min(1.45, P.pitch - (e.clientY - l.y) * k));
    l.x = e.clientX; l.y = e.clientY;
  });
  const endLook = (e) => lookers.delete(e.pointerId);
  look.addEventListener('pointerup', endLook);
  look.addEventListener('pointercancel', endLook);

  // Buttons
  const hold = (el, down, up) => {
    el.addEventListener('pointerdown', (e) => { e.preventDefault(); el.setPointerCapture(e.pointerId); el.classList.add('on'); down(); });
    const off = () => { el.classList.remove('on'); up?.(); };
    el.addEventListener('pointerup', off);
    el.addEventListener('pointercancel', off);
  };
  hold($('t-grab'), () => { P.mouse.leftPressed = true; });
  hold($('t-use'), () => key('KeyE', true), () => key('KeyE', false));
  hold($('t-item'), () => { P.mouse.right = true; }, () => { P.mouse.right = false; });
  hold($('t-jump'), () => P.keys.add('Space'), () => P.keys.delete('Space'));
  hold($('t-drop'), () => key('KeyQ', true), () => key('KeyQ', false));
  hold($('t-help'), () => { const h = document.getElementById('help'); h.hidden = !h.hidden; });
  document.getElementById('help').addEventListener('click', (e) => { e.currentTarget.hidden = true; });

  // Show only while walking around; relabel buttons for what you're holding.
  const ITEM = { spray: 'Spray', ignite: 'Flick', eat: 'Eat', drink: 'Drink' };
  let last = '';
  setInterval(() => {
    root.hidden = G.mode !== 'play';
    if (root.hidden) { P.touchMove = null; P.mouse.right = false; return; }
    const h = P.held;
    const state = `${h?.type}|${!!P.pushing}`;
    if (state === last) return;
    last = state;
    $('t-grab').textContent = h ? 'Throw' : P.pushing ? 'Launch' : 'Grab';
    const use = h && ITEM[h.T.use];
    $('t-item').hidden = !use;
    if (use) $('t-item').textContent = use;
    $('t-drop').hidden = !h && !P.pushing;
  }, 150);
}
