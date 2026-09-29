// The paper request form, rendered as an HTML modal. Layout echoes a real ED imaging request (all data fictional).
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
const box = (on) => `<span class="cb${on ? ' on' : ''}">${on ? '✕' : ''}</span>`;

function squiggle(seed) {
  let d = 'M4 26';
  let x = 4;
  let s = seed;
  const r = () => { s = (s * 16807) % 2147483647; return s / 2147483647; };
  for (let i = 0; i < 9; i++) {
    x += 10 + r() * 14;
    d += ` Q ${x - 6} ${4 + r() * 30} ${x} ${10 + r() * 20}`;
  }
  return `<svg viewBox="0 0 ${x + 10} 40" class="sig"><path d="${d}" fill="none" stroke="#1a2a6b" stroke-width="2"/></svg>`;
}

function minutesToClock(m) {
  const t = (22 * 60 + Math.floor(m)) % (24 * 60);
  return `${String(Math.floor(t / 60)).padStart(2, '0')}:${String(t % 60).padStart(2, '0')}`;
}

export function formHTML(c) {
  const excl = /exclude/i.test(c.question);
  return `
  <div class="paper">
    <div class="paper-head">
      <div><div class="paper-title">Medical Imaging Request</div><div class="paper-sub">RadsSim General Hospital · Emergency Department</div></div>
      <div class="barcode"></div>
    </div>
    <div class="paper-grid">
      <div class="label-sticker">
        <b>${esc(c.patient)}</b><br>${esc(c.urn)} · ${c.age}${c.sex}<br>${esc(c.location)}<br><span class="muted">Printed ${minutesToClock(c.arrived)}</span>
      </div>
      <div class="field"><div class="flabel">Priority</div>${box(false)} Routine ${box(true)} Urgent</div>
    </div>
    <div class="field"><div class="flabel">Imaging requested</div><div class="hand big">${esc(c.study)}</div></div>
    <div class="field"><div class="flabel">Imaging is needed to <span class="muted">(tick one and explain)</span></div>
      ${box(false)} Assess progress ${box(false)} Confirm ${box(false)} Define ${box(excl)} Exclude
      <div class="hand">${esc(c.question)}</div></div>
    <div class="paper-grid">
      <div class="field"><div class="flabel">Mandatory</div>
        <div>Pregnant? ${box(c.sex === 'M' || c.pregnantTicked)} No ${box(false)} Yes</div>
        <div>Infectious? ${box(true)} No ${box(false)} Yes</div>
        <div>Allergies? ${box(c.seed % 10 < 7)} No ${box(false)} Yes</div>
      </div>
      <div class="field"><div class="flabel">Clinical details <span class="muted">(include relevant surgery, imaging, pathology)</span></div>
        <div class="hand">${esc(c.clinical)}</div></div>
    </div>
    <div class="field"><div class="flabel">Risk factors for CT / MRI</div>
      ${c.redFlags.includes('eGFR 24, contrast not approved') ? `${box(true)} Hx renal insufficiency · Creatinine <span class="hand">310</span> eGFR <span class="hand">24</span> · Approved by Dr ________` : `${box(true)} Nil`}
    </div>
    <div class="paper-grid">
      <div class="field"><div class="flabel">Requested by</div><div class="hand">${esc(c.requester)}</div>${squiggle(c.seed)}</div>
      <div class="field"><div class="flabel">Consultant</div><div class="hand">${esc(c.consultant)}</div>
        <div class="flabel" style="margin-top:6px">Pager / phone (mandatory)</div><div class="hand">${c.pager ? esc(c.pager) : '&nbsp;'}</div></div>
    </div>
    <div class="field protocol"><div class="flabel">Radiologist protocol / initial</div>
      ${c.accepted ? `<div class="hand stamp">${box(true)} Today · CT ${c.modality === 'head' ? 'B' : c.modality === 'chest' ? 'PA' : 'AP PV'} · <b>ON-CALL</b></div>` : '<div class="muted">(awaiting you)</div>'}
    </div>
  </div>`;
}

export function showForm(c, { mode = 'view', onAccept, onBounce, onNod, onClose } = {}) {
  const el = document.getElementById('form-modal');
  const body = document.getElementById('form-body');
  const actions = document.getElementById('form-actions');
  body.innerHTML = formHTML(c);
  actions.innerHTML = '';
  const btn = (label, cls, fn) => {
    const b = document.createElement('button');
    b.textContent = label;
    b.className = cls;
    b.disabled = true;
    b.onclick = () => { if (b.disabled) return; hideForm(); fn?.(); };
    actions.appendChild(b);
  };
  if (mode === 'registrar') {
    btn('Accept: "I\'ll look at it now"', 'primary', onAccept);
    btn('Bounce: "What\'s the actual question?"', '', onBounce);
    btn('Nod and smile', 'ghost', onNod);
  } else {
    btn('Close', 'ghost', onClose);
  }
  el.hidden = false;
  // On phones the tap that opened the form can land on a button underneath it; ignore taps briefly.
  setTimeout(() => { for (const b of actions.querySelectorAll('button')) b.disabled = false; }, 450);
}

export function hideForm() {
  document.getElementById('form-modal').hidden = true;
}

export { minutesToClock };
