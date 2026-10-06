// The reading-room side computer: a tired hospital desktop with apps (RiskMann, Bidly) and whatever files the
// last eleven registrars left on it. Everything here is fictional.
import { openRiskman } from './riskman.js';
import { openStore } from './store.js';

const $ = (id) => document.getElementById(id);
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);

// Text documents. `[[...]]` marks leftover AI chatter, rendered highlighted so it's obvious nobody proofread.
const FILES = {
  casereport: {
    name: 'Case_report_DRAFT_v3.docx', icon: 'doc', kind: 'doc',
    body: `[[Sure! Here's a draft case report based on your notes. Feel free to adjust it to fit the journal's requirements:]]

# [INSERT CATCHY TITLE — something with a pun about "appendix"?]

**An Unusual Presentation of a Common Condition: A Case Report and Review of the Literature**

Authors: Dr ____, Dr ____ (ask if the consultant wants to be first author again), [[As an AI language model, I cannot be listed as an author.]]

## Abstract
We present the case of a 34-year-old man who presented to the Emergency Department with right iliac fossa pain. [[Would you like me to make the abstract more concise?]] Computed tomography demonstrated a fascinating and rare finding that delves into the rich tapestry of abdominal pathology.

## Introduction
Appendicitis is the most common surgical emergency worldwide, affecting approximately 7% of the population [1]. In today's fast-paced clinical landscape, it is more important than ever to navigate the complex realm of diagnostic imaging. [[make this sound less like a LinkedIn post]]

## Case presentation
A 34-year-old man presented with 2 days of periumbilical pain migrating to the RIF. He was febrile (38.4°C). WCC 15.2. CRP 88. Alvarado score 8 — the surgical registrar described this as "clinically appendicitis, scan not needed", which, notably, did not stop them requesting one at 03:12.

CT abdomen/pelvis with contrast demonstrated a dilated (11 mm) fluid-filled appendix with periappendiceal fat stranding and a 6 mm appendicolith. [[I'm sorry, but I can't view images. Could you describe the CT findings?]] The appendix was located in a retrocaecal position, which is [TODO: find out if this is actually unusual, I think it's like 65% of people??]

## Discussion
Retrocaecal appendicitis is a rare and fascinating entity. [[Note: I couldn't verify that retrocaecal appendicitis is rare; it is actually the most common position. You may want to revise this claim.]] This case highlights the importance of a multidisciplinary approach and underscores the pivotal role that radiology plays in the tapestry of modern medicine.

Key learning points:
- Appendicitis exists.
- CT can show it.
- [[Here are three more learning points you could add:]]
-

## Conclusion
In conclusion, this case serves as a testament to [[Regenerate response]]

## References
1. Smith J, et al. Appendicitis: a comprehensive review. J Abdom Imaging Excell. 2019;14(3):221–9. [[Note: I couldn't find this reference — please verify it exists.]]
2. Jones A, Smith J. The appendix and you. Lancet Radiol Surg Today. 2021;8:1–1.
3. [reference that supports what I said in paragraph 2 — FIND ONE]

[[Is there anything else you'd like me to help with? I can also format this for a specific journal, such as the BMJ Case Reports, or translate it into French.]]

prompt: make this under 1500 words and sound like a real doctor wrote it. not too AI. remove the word tapestry

[[Certainly! Here's a revised version with the word "tapestry" removed:]]`,
  },
  rota: {
    name: 'Rota_FINAL_v7_ACTUALFINAL(2).xlsx', icon: 'xls', kind: 'sheet',
    rows: [
      ['', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      ['Day', 'Lim', 'Okafor', 'Lim', 'LEAVE', 'Okafor', '—', '—'],
      ['Evening', 'Patel', 'Patel', 'Novak', 'Novak', 'Patel', 'Lim', 'Novak'],
      ['NIGHT', 'YOU', 'YOU', 'YOU', 'YOU', 'YOU', 'YOU', 'YOU'],
      ['Backup', 'YOU', 'YOU', '#REF!', '#REF!', 'YOU', 'YOU', 'YOU'],
      ['Leave req.', 'YOU (declined)', '', '', '', '', '', 'Okafor (approved, Bali)'],
    ],
  },
  passwords: {
    name: 'passwords.txt', icon: 'txt', kind: 'pre',
    body: `PACS: Password1
PACS (after forced reset): Password2
PACS (after forced reset again): Password3!
RiskMann: same as PACS but with "Risk" in front
Rota system: ask Linda
Linda's password: ask Linda
Wi-Fi: Guest-NoAccess
Car park gate code: 1234 (it was 0000 but security said that was "too obvious")
Coffee machine admin: there is no admin. It is in control now.
DO NOT LEAVE THIS FILE ON THE DESKTOP — IT`,
  },
  resignation: {
    name: 'resignation_letter_DO_NOT_SEND.docx', icon: 'doc', kind: 'doc',
    body: `Dear Director of Medical Services,

Please accept this letter as formal notice of my resignation from the position of [[Sure! Here's a professional and polite resignation letter:]] on-call radiologist, effective immediately / at 08:00 / when I find my car.

After 14 years, 31,000 CT brains and one memorable night involving a microwave, I have decided to pursue other opportunities, such as sleeping.

I would like to thank the surgical registrars for teaching me that every scan is urgent, and the ED for teaching me that "?anything" is a clinical question.

[[You might want to keep the tone more positive to maintain professional relationships.]]

no

Yours sincerely,
(the radiologist)

P.S. The fish in the tea room was me.`,
  },
  teaching: {
    name: 'Registrar_teaching_FINAL.pptx', icon: 'ppt', kind: 'doc',
    body: `# Slide 1: How to request a CT

# Slide 2: Don't.

# Slide 3: (Just kidding.) Include:
- A clinical question
- The patient's renal function
- The correct patient

# Slide 4: Real request forms (anonymised)
- "?anything"
- "pain"
- "please scan, family very anxious, consultant very anxious, I am very anxious"
- "CT whole body ?why unwell"

# Slide 5: Questions?

# Slide 6: [[Here's a fun closing slide idea: a picture of a cute cat holding a stethoscope!]]`,
  },
  cat: { name: 'IMG_4471_cat_in_scanner.jpg', icon: 'img', kind: 'cat' },
  readme: {
    name: 'README_IT.txt', icon: 'txt', kind: 'pre',
    body: `This computer is scheduled for a Windows update.
It has been scheduled since 2017.
Do not turn off.
Do not turn on.
Do not install games.
If you can read this, IT would like their stapler back.`,
  },
};

const ICONS = [
  { id: 'riskman', name: 'RiskMann', icon: 'app-rm' },
  { id: 'store', name: 'Bidly', icon: 'app-bid' },
  { id: 'casereport' }, { id: 'rota' }, { id: 'teaching' }, { id: 'resignation' },
  { id: 'passwords' }, { id: 'cat' }, { id: 'readme' },
  { id: 'bin', name: 'Recycle Bin', icon: 'bin' },
];

const GLYPH = { doc: 'W', xls: 'X', ppt: 'P', txt: '≡', img: '▣', bin: '🗑', 'app-rm': 'R', 'app-bid': 'b' };

export function openDesktop(G, { onClose }) {
  const d = $('desktop');
  const el = $('dt-icons');
  el.innerHTML = ICONS.map((ic) => {
    const f = FILES[ic.id];
    const name = ic.name || f.name, icon = ic.icon || f.icon;
    return `<button class="dt-icon" data-open="${ic.id}"><span class="dt-glyph dt-${icon}">${GLYPH[icon]}</span><span class="dt-name">${esc(name)}</span></button>`;
  }).join('');
  const armed = () => performance.now() - (+d.dataset.openedAt || 0) > 450;
  for (const b of el.querySelectorAll('[data-open]')) b.onclick = () => { if (armed()) launch(G, b.dataset.open); };
  $('dt-shutdown').onclick = () => { if (!armed()) return; closeAll(); onClose(); };
  $('dt-start').onclick = () => { if (armed()) toast('Start menu has been disabled by your administrator.'); };
  $('fv-close').onclick = () => { $('fileview').hidden = true; };
  $('dt-clock').textContent = $('clock').textContent;
  d.hidden = false;
  d.dataset.openedAt = performance.now();

  function toast(msg) { const n = $('dt-note'); n.textContent = msg; n.hidden = false; clearTimeout(n._t); n._t = setTimeout(() => { n.hidden = true; }, 2600); }
  function closeAll() { d.hidden = true; $('fileview').hidden = true; $('riskman').hidden = true; $('store').hidden = true; }
  function launch(G, id) {
    if (id === 'riskman') { openRiskman(G, { onClose: () => {} }); return; }
    if (id === 'store') { openStore(G, { onClose: () => {} }); return; }
    if (id === 'bin') { showFile({ name: 'Recycle Bin', kind: 'pre', body: 'audit_data_REAL.xlsx\nmy_dignity.tmp\nCPD_portfolio_2019-2024 (never started).docx\nLetter_of_complaint_draft_47.docx' }); return; }
    if (FILES[id]) showFile(FILES[id]);
  }
}

function showFile(f) {
  $('fv-title').textContent = f.name;
  const body = $('fv-body');
  body.className = 'fv-body fv-' + f.kind;
  if (f.kind === 'sheet') {
    body.innerHTML = `<table>${f.rows.map((r, i) => `<tr>${r.map((c) => i === 0 ? `<th>${esc(c)}</th>` : `<td class="${c === 'YOU' ? 'fv-you' : c === '#REF!' ? 'fv-err' : ''}">${esc(c)}</td>`).join('')}</tr>`).join('')}</table>`;
  } else if (f.kind === 'cat') {
    body.innerHTML = `<div class="fv-cat"><div class="fv-catimg">=^..^=</div><p>The ward cat, mid-CT. The DLP was unremarkable. The cat was not.</p></div>`;
  } else if (f.kind === 'pre') {
    body.innerHTML = `<pre>${esc(f.body)}</pre>`;
  } else {
    body.innerHTML = docHtml(f.body);
  }
  $('fileview').hidden = false;
  body.scrollTop = 0;
}

// Tiny markdown-ish renderer: headings, bold, bullets, and highlighted [[AI leftovers]].
function docHtml(src) {
  const inline = (s) => esc(s)
    .replace(/\[\[(.+?)\]\]/g, '<mark class="fv-ai">$1</mark>')
    .replace(/\*\*(.+?)\*\*/g, '<b>$1</b>')
    .replace(/(\[(?:INSERT|TODO|reference)[^\]]*\])/g, '<span class="fv-todo">$1</span>');
  const out = [];
  let list = false;
  for (const line of src.split('\n')) {
    if (/^- /.test(line)) { if (!list) { out.push('<ul>'); list = true; } out.push(`<li>${inline(line.slice(2)) || '&nbsp;'}</li>`); continue; }
    if (list) { out.push('</ul>'); list = false; }
    if (/^# /.test(line)) out.push(`<h1>${inline(line.slice(2))}</h1>`);
    else if (/^## /.test(line)) out.push(`<h2>${inline(line.slice(3))}</h2>`);
    else if (line.trim()) out.push(`<p>${inline(line)}</p>`);
  }
  if (list) out.push('</ul>');
  return out.join('');
}
