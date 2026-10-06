// "Bidly" — an online auction/shop app on the reading-room computer (a parody of online marketplaces, not
// affiliated with any real one). Pay with a corporate card someone left in the desk drawer. Orders arrive by
// courier drone at the ambulance bay a few game-minutes later.
const $ = (id) => document.getElementById(id);
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);

const SHOP = [
  { id: 'golf', name: 'Executive golf set (7-iron + unlimited balls)', price: 189, give: ['golfclub'], seller: 'fairway_frank', rating: 99.1, sold: 412, tag: 'Free postage', blurb: 'Hold it and right-click to tee up and swing. Barely used (lost my job).' },
  { id: 'bat', name: 'Cricket bat, premium willow, knocked in', price: 119, give: ['bat'], seller: 'silly_mid_off', rating: 98.4, sold: 77, tag: 'Top-rated seller', blurb: 'Signed by someone. Can\'t read it.' },
  { id: 'airhorn', name: 'Marine air horn 120 dB — LOUD', price: 39, give: ['airhorn'], seller: 'boatparts4u', rating: 97.0, sold: 1890, tag: 'Hot item', blurb: 'Not for use indoors. Ships same day.' },
  { id: 'cones', name: 'Traffic cones × 3 (lightly stolen)', price: 29, give: ['cone', 'cone', 'cone'], seller: 'roadworks_rob', rating: 82.3, sold: 31, tag: 'Only 3 left', blurb: 'Close a corridor. Become unaccountable.' },
  { id: 'o2', name: 'Oxygen cylinders × 3, size E', price: 450, give: ['o2', 'o2', 'o2'], seller: 'definitely_a_hospital', rating: 64.0, sold: 3, tag: 'Collection preferred', blurb: 'Full. Probably. Keep away from fire (or don\'t).' },
  { id: 'kebab', name: 'Family-size mixed kebab, garlic + chilli', price: 24, give: ['kebab'], seller: 'kebab_king_3am', rating: 99.9, sold: 23110, tag: 'Delivered hot', blurb: 'The only correct 3am meal.' },
  { id: 'extinguisher', name: 'Fire extinguisher, reconditioned', price: 349, give: ['extinguisher'], seller: 'fire_sale_fiona', rating: 95.5, sold: 58, tag: '', blurb: 'Look down and hold to fly. Not in the manual.' },
  { id: 'defib', name: 'AED defibrillator (ex-gym, working)', price: 1299, give: ['defib'], seller: 'gymclosed_everythingmustgo', rating: 91.2, sold: 6, tag: 'Best offer', blurb: 'Pads included. Moral compass not included.' },
  { id: 'bucket', name: 'Mop bucket, pre-filled, no sign', price: 35, give: ['bucket'], seller: 'cleanteam_dave', rating: 99.0, sold: 140, tag: '', blurb: 'A slip hazard, as nature intended.' },
  { id: 'keys', name: 'Car keys (various) NO QUESTIONS', price: 999, give: [], seller: 'n0t_a_sc4m', rating: 12.0, sold: 0, tag: 'Buyer beware', blurb: 'Genuine. 100% legit. Pay by gift card preferred.' },
];
const CARD_LIMIT = 2500;

export function openStore(G, { onClose }) {
  const modal = $('store');
  if (G.card === undefined) G.card = { spent: 0, declined: 0 };
  render(G);
  $('store-msg').innerHTML = '';
  $('store-close').onclick = () => { modal.hidden = true; onClose(); };
  $('store-search').value = '';
  $('store-search').oninput = () => render(G);
  modal.hidden = false;
  modal.dataset.openedAt = performance.now();
}

function render(G) {
  const left = CARD_LIMIT - G.card.spent;
  $('store-card').innerHTML = `💳 <b>CORP VISA ••••&nbsp;4417</b> <small>found in desk drawer · available $${Math.max(0, left).toLocaleString()}</small>`;
  const q = $('store-search').value.trim().toLowerCase();
  const items = SHOP.filter((it) => !q || (it.name + it.blurb + it.seller).toLowerCase().includes(q));
  const el = $('store-list');
  el.innerHTML = items.length ? items.map((it) => `<div class="st-item">
      <div class="st-pic" data-pic="${it.id}"></div>
      <div class="st-info">
        <div class="st-name">${esc(it.name)}</div>
        <div class="st-seller">${esc(it.seller)} (${it.sold}) <span class="${it.rating < 90 ? 'st-bad' : ''}">${it.rating}% positive</span></div>
        <div class="st-blurb">${esc(it.blurb)}</div>
        <div class="st-row"><span class="st-price">$${it.price}</span>${it.tag ? `<span class="st-tag">${esc(it.tag)}</span>` : ''}<button data-buy="${it.id}">Buy It Now</button></div>
      </div></div>`).join('')
    : `<div class="st-none">No results for "${esc(q)}". Did you mean: golf set?</div>`;
  for (const b of el.querySelectorAll('[data-buy]')) b.onclick = () => buy(G, b.dataset.buy);
}

function buy(G, id) {
  if (performance.now() - (+$('store').dataset.openedAt || 0) < 450) return;
  const it = SHOP.find((x) => x.id === id);
  if (!it) return;
  const msg = $('store-msg');
  if (G.card.spent + it.price > CARD_LIMIT) {
    G.card.declined++;
    msg.innerHTML = `<div class="st-declined"><b>Card declined.</b> ${G.card.declined > 2 ? 'The card has been reported stolen. By you, apparently, in 2019.' : 'Insufficient funds. Whoever owns this card is having a bad month too.'}</div>`;
    return;
  }
  G.card.spent += it.price;
  G.stats.ordersPlaced++;
  G.stats.orderSpend += it.price;
  G.orders.push({ give: it.give, name: it.name, at: G.time + 3 + Math.random() * 3 });
  render(G);
  msg.innerHTML = `<div class="st-ok"><b>You won!</b> ${esc(it.name)} — seller ${esc(it.seller)} will dispatch by courier drone to the ambulance bay. Leave feedback?</div>`;
}

// Called from the game loop: deliver any orders whose time has come.
export function deliverOrders(G) {
  for (const o of G.orders.slice()) {
    if (G.time < o.at) continue;
    G.orders.splice(G.orders.indexOf(o), 1);
    G.onDelivery(o);
  }
}
