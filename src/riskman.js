// "RiskMann" incident-reporting app on the reading-room side computer (a parody; not affiliated with any real product).
// File reports on people you don't like. Accurate reports get upheld and the person is pulled into a meeting
// (twice, and they're stood down). Frivolous or exaggerated ones come back on you.
const $ = (id) => document.getElementById(id);
const pick = (a) => a[Math.floor(Math.random() * a.length)];
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);

const CATEGORIES = [
  { id: 'paging', label: 'Excessive paging / nagging', text: 'Paged or approached me repeatedly while I was actively not reporting their scan.',
    valid: (n) => (n.nagCount || 0) >= 3, why: (n) => `${n.nagCount || 0} nags logged` },
  { id: 'form', label: 'Incomplete or inaccurate request form', text: 'Request form missing mandatory information. Again.',
    valid: (n, G) => G.cases.some((c) => c.requester === n.name && c.redFlags.length), why: () => 'form deficiencies on file' },
  { id: 'indication', label: 'Inappropriate imaging request', text: 'Requested imaging with no clear indication.',
    valid: (n, G) => G.cases.some((c) => c.requester === n.name && c.path === 'normal'), why: () => 'a low-yield request on file' },
  { id: 'rude', label: 'Rudeness / unprofessional behaviour', text: 'Was rude to me. I may have shoved them first; that is not relevant.',
    valid: (n) => (n.anger || 0) >= 2, why: (n) => `witnesses confirm they were "quite cross" (anger ${n.anger})` },
  { id: 'fish', label: 'Microwaved fish in the staff room', text: 'The tea room smells of fish. I know it was them.',
    valid: () => Math.random() < 0.35, why: () => 'fish odour confirmed by the cleaner' },
  { id: 'security', label: 'Excessive force', text: 'Escorted me back to my room with unnecessary firmness.',
    valid: (n, G) => n.role === 'security' && G.stats.caught > 0, why: (n, G) => `${G.stats.caught} escort(s) on record` },
  { id: 'breathing', label: 'Breathing too loudly', text: 'Breathing audibly near my workstation.',
    valid: () => false },
  { id: 'existing', label: 'Existing near me', text: 'Was near me. On purpose, probably.',
    valid: () => false },
];
const SEVERITY = ['Negligible', 'Minor', 'Moderate', 'Major', 'Catastrophic'];

// RiskBay: order things to the departmental cost centre. Each item delivers one or more props.
const SHOP = [
  { id: 'golf', name: 'Executive golf set (7-iron + balls)', price: 189, give: ['golfclub'], blurb: 'Tee up endless balls and swing them into anything. "Team building."' },
  { id: 'bat', name: 'Cricket bat, premium willow', price: 119, give: ['bat'], blurb: 'For morale. And windows.' },
  { id: 'airhorn', name: 'Marine air horn, 120 dB', price: 39, give: ['airhorn'], blurb: 'Instantly relocates anyone nearby to the ceiling.' },
  { id: 'cones', name: '3 × traffic cones', price: 29, give: ['cone', 'cone', 'cone'], blurb: 'Close a corridor. Become unaccountable.' },
  { id: 'o2', name: 'Pallet of oxygen cylinders', price: 450, give: ['o2', 'o2', 'o2'], blurb: 'For clinical use only. (They make excellent rockets near fire.)' },
  { id: 'kebab', name: 'Family-size kebab (next-hour delivery)', price: 24, give: ['kebab'], blurb: 'The only correct 3am meal.' },
  { id: 'extinguisher', name: 'Reconditioned fire extinguisher', price: 349, give: ['extinguisher'], blurb: 'Fire safety. Also a jetpack. Look down and hold.' },
  { id: 'defib', name: 'Spare defibrillator', price: 1299, give: ['defib'], blurb: 'CLEAR! (Not for use on colleagues. Allegedly.)' },
  { id: 'bucket', name: 'Mop bucket, pre-filled', price: 35, give: ['bucket'], blurb: 'A slip hazard with no sign. Chef\'s kiss.' },
  { id: 'keys', name: '"Definitely legitimate" car keys', price: 999, give: [], blurb: 'Arrives as an empty box. The cars don\'t need keys anyway.' },
];
const START_BUDGET = 4000;

export function openRiskman(G, { onClose }) {
  const modal = $('riskman');
  const people = G.npcs.filter((n) => n.role !== 'ghost' && !n.remove);
  const staff = people.filter((n) => n.role !== 'patient' && n.role !== 'cat');
  const others = people.filter((n) => n.role === 'patient' || n.role === 'cat');
  const opt = (n) => `<option value="${n.id}">${esc(n.name)} (${esc(n.title)})${n.reportedCount ? ` · ${n.reportedCount} upheld` : ''}</option>`;
  $('rm-person').innerHTML = `<optgroup label="Staff">${staff.map(opt).join('')}</optgroup><optgroup label="Patients and other">${others.map(opt).join('')}</optgroup>`;
  $('rm-category').innerHTML = CATEGORIES.map((c) => `<option value="${c.id}">${esc(c.label)}</option>`).join('');
  $('rm-sev').innerHTML = SEVERITY.map((s, i) => `<label><input type="radio" name="rm-sev" value="${i}" ${i === 1 ? 'checked' : ''}> ${s}</label>`).join('');
  const syncText = () => { $('rm-desc').value = CATEGORIES.find((c) => c.id === $('rm-category').value).text; };
  $('rm-category').onchange = syncText;
  syncText();
  $('rm-result').innerHTML = '';
  $('rm-submit').disabled = false;
  renderLists(G);
  renderShop(G);
  tab('file');
  for (const t of document.querySelectorAll('[data-rmtab]')) t.onclick = () => tab(t.dataset.rmtab);
  $('rm-close').onclick = () => { modal.hidden = true; onClose(); };
  $('rm-submit').onclick = () => submit(G);
  modal.hidden = false;
  modal.dataset.openedAt = performance.now();
}

function tab(name) {
  for (const t of document.querySelectorAll('[data-rmtab]')) t.classList.toggle('on', t.dataset.rmtab === name);
  for (const p of document.querySelectorAll('[data-rmpane]')) p.hidden = p.dataset.rmpane !== name;
}

function renderLists(G) {
  const mine = G.riskman.filed;
  const about = G.riskman.aboutYou;
  $('rm-count-mine').textContent = mine.length;
  $('rm-count-about').textContent = about.length;
  $('rm-mine').innerHTML = mine.length
    ? mine.map((r) => `<tr><td>${r.ref}</td><td>${esc(r.person)}</td><td>${esc(r.category)}</td><td>${SEVERITY[r.sev]}</td><td class="st-${r.status.split(' ')[0].toLowerCase()}">${esc(r.status)}</td></tr>`).join('')
    : '<tr><td colspan="5" class="rm-empty">No reports filed. Yet.</td></tr>';
  $('rm-about').innerHTML = about.length
    ? about.map((r) => `<tr><td>${r.ref}</td><td>${esc(r.from)}</td><td>${esc(r.category)}</td><td>${esc(r.note)}</td></tr>`).join('')
    : '<tr><td colspan="4" class="rm-empty">Nobody has reported you. That you know of.</td></tr>';
}

function renderShop(G) {
  if (G.budget === undefined) G.budget = START_BUDGET;
  const bal = $('rm-budget');
  bal.textContent = `Cost centre: $${G.budget.toLocaleString()}`;
  bal.className = G.budget < 0 ? 'rm-over' : '';
  const el = $('rm-shop');
  el.innerHTML = SHOP.map((it) => `<div class="rm-item"><div class="rm-item-name">${esc(it.name)}</div><div class="rm-item-blurb">${esc(it.blurb)}</div><div class="rm-item-buy"><span class="rm-price">$${it.price}</span><button data-buy="${it.id}">Order now</button></div></div>`).join('');
  for (const b of el.querySelectorAll('[data-buy]')) b.onclick = () => buy(G, b.dataset.buy);
}

function buy(G, id) {
  const it = SHOP.find((x) => x.id === id);
  if (!it) return;
  G.budget -= it.price;
  G.stats.ordersPlaced++;
  G.stats.orderSpend += it.price;
  G.orders.push({ give: it.give, name: it.name, at: G.time + 3 + Math.random() * 3 });
  if (G.budget < 0 && !G.budgetFlagged) { G.budgetFlagged = true; reportAboutYou(G, 'Finance', 'Cost centre overspend', `The radiology cost centre is $${(-G.budget).toLocaleString()} in the red.`); }
  renderShop(G);
  const res = $('rm-result');
  res.innerHTML = `<div class="rm-upheld"><b>Order placed.</b> ${esc(it.name)} will be dropped at the ambulance bay by courier drone shortly.</div>`;
}

// Called from the game loop: deliver any orders whose time has come.
export function deliverOrders(G) {
  for (const o of G.orders.slice()) {
    if (G.time < o.at) continue;
    G.orders.splice(G.orders.indexOf(o), 1);
    G.onDelivery(o);
  }
}

let refN = 40211;
export function reportAboutYou(G, from, category, note) {
  G.riskman.aboutYou.push({ ref: 'RM-' + refN++, from, category, note });
}

function submit(G) {
  if (performance.now() - (+$('riskman').dataset.openedAt || 0) < 450) return;
  const person = G.npcs.find((n) => String(n.id) === $('rm-person').value);
  const cat = CATEGORIES.find((c) => c.id === $('rm-category').value);
  const sev = +(document.querySelector('input[name="rm-sev"]:checked')?.value || 1);
  if (!person) return;
  const res = $('rm-result');
  $('rm-submit').disabled = true;
  res.innerHTML = '<div class="rm-busy">Submitting… Your report has been assigned to a Senior Risk Officer.</div>';
  const ref = 'RM-' + refN++;
  G.stats.riskmansFiled++;
  setTimeout(() => {
    const valid = cat.valid(person, G);
    let chance = valid ? 0.8 : 0.12;
    if (sev >= 4) chance -= 0.3; else if (sev === 3) chance -= 0.12;
    chance -= 0.08 * G.stats.vexatious;
    const r = Math.random();
    const record = { ref, person: person.name, category: cat.label, sev, status: '' };
    let html;
    if (r < 0.12) {
      record.status = 'Pending (14 months)';
      html = `<b>${ref} received.</b> Expected review date: fourteen months from now. Thank you for helping us keep patients safe.`;
    } else if (r < 0.12 + chance * 0.88) {
      record.status = 'Upheld';
      G.stats.riskmansUpheld++;
      html = `<b>${ref} upheld</b>${valid && cat.why ? ` (${esc(cat.why(person, G))})` : ''}. ${esc(G.riskmanUpheld(person))}`;
    } else {
      record.status = 'Vexatious';
      G.stats.vexatious++;
      reportAboutYou(G, 'Clinical Governance', 'Vexatious reporting', `Re: your report ${ref} about ${person.name} ("${cat.label}")`);
      G.onVexatious();
      html = `<b>${ref} reviewed and found to be vexatious.</b> ${sev >= 3 ? `Rating "${esc(cat.label.toLowerCase())}" as ${SEVERITY[sev]} did not help. ` : ''}A RiskMann has been filed about <i>you</i>.`;
    }
    G.riskman.filed.push(record);
    res.innerHTML = `<div class="rm-${record.status.split(' ')[0].toLowerCase()}">${html}</div>`;
    $('rm-submit').disabled = false;
    renderLists(G);
  }, 1400);
}

export const RISKMAN_OUTCOMES = {
  meeting: (n) => pick([`${n.name} has been called into a meeting with the Director of Medical Services.`, `${n.name} has been asked to "pop into the office for a quick chat".`, `${n.name} has been sent to a mandatory reflective-practice session.`]),
  stoodDown: (n) => `${n.name} has been stood down pending investigation and escorted from the building. Their requests have been reassigned.`,
  patient: (n) => `${n.name} has been transferred to another hospital "for their own comfort".`,
  cat: () => 'The cat has been issued a formal written warning. It does not care.',
  dms: () => 'Gary from Executive has been reported to himself. He has scheduled a meeting about it.',
};
