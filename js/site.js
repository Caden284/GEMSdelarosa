(function(){
  const $ = id => document.getElementById(id);
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ---------- Content: event packages and things to do ----------
  const PACKS = [
    {name:'Baby Shower', dur:'2 hr – 8 hr', price:'$800', usd:'$120', label:'Per 2 hours', img:'ev-1', alt:'White favour bags and a blue “It’s a boy” sign on a party table', desc:'Garden light, a floral photo wall, and room for everyone who loves you.'},
    {name:'Birthdays', dur:'2 hr – 8 hr', price:'$800', usd:'$120', label:'Per 2 hours', img:'ev-2', alt:'A man smiling while holding a red velvet cake at a birthday party', desc:'From a lime with close friends to a full family fete under the palms.'},
    {name:'Sip and Paint', dur:'2 hr – 8 hr', price:'$800', usd:'$120', label:'Per 2 hours', img:'ev-3', alt:'Friends painting canvases with glasses of wine', desc:'Easels, drinks, and good company. Drop cloths provided; see policy.'},
    {name:'Wedding Venue', dur:'8 hr', price:'$3,500', usd:'$525', label:'Fixed · 8 hours', featured:true, img:'ev-4', alt:'A wedding ceremony under a draped marquee', desc:'The full day, stunning and beautifully maintained. Add the Airbnb for the night.'},
    {name:'Other Smaller Events', dur:'2 hr – 8 hr', price:'$800', usd:'$120', label:'Per 2 hours', img:'ev-5', alt:'Guests mingling at a buffet reception', desc:'Engagements, photoshoots, reunions, and intimate gatherings.'},
    {name:'Other Larger Events', dur:'2 hr – 8 hr', price:'$800', usd:'$120', label:'Per 2 hours', img:'ev-6', alt:'Volunteers serving food at a community event', desc:'Bigger crowds welcome. Tell us the numbers and we’ll plan the space.'}
  ];
  const SPOTS = [
    {name:'Asa Wright Nature Centre', kind:'Nature', img:'x-asa', alt:'The wooden welcome sign at Asa Wright Nature Centre', desc:'A top spot for bird-watching, rainforest hikes, and tranquil nature inside the Northern Range mountains: forest trails, an ocean of greenery, and nature sounds.'},
    {name:'Santa Rosa First Peoples Community', kind:'Heritage', img:'x-santa', alt:'The Santa Rosa First People Community entrance arch', desc:'Showcases the indigenous heritage of Trinidad: traditional crafts, ancestry, culture, and sometimes heritage-based demonstrations and events.'},
    {name:'Hollis Reservoir', kind:'Nature', img:'x-hollis', alt:'A waterfall tumbling into a turquoise pool between boulders', desc:'A peaceful natural escape with scenic views and forest atmosphere. A quiet alternative to beach tourism, good for hikes or a picnic.'},
    {name:'Arima Borough Market', kind:'Local life', img:'x-market', alt:'Stalls at the Arima Borough Market', desc:'Produce, local food, spices, crafts, and conversation with locals. Real, lively, and the best way to feel everyday Trini life.'},
    {name:'Arima Velodrome / Princess Royal Park', kind:'Community', img:'x-velodrome', alt:'The Arima Velodrome track and grandstand', desc:'Catch a soccer or cycling event, or just walk around town, for a “local guest” experience rather than a tourist one.'},
    {name:'Trincity Mall', kind:'Shopping & dining', img:'x-trincity', alt:'The entrance of Trincity Mall with its MovieTowne cinema', desc:'One of Trinidad’s largest shopping and entertainment hubs: stores, dining, a cinema, and a lively atmosphere, a short drive from Gems De La Rosa.'}
  ];

  const clock = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>';
  const pic = (name, alt) => `<img src="img/${name}.webp" alt="${alt}" loading="lazy" decoding="async" width="800" height="600" sizes="(max-width:700px) 100vw, 400px">`;
  function packCard(p){
    const href = '/events?pack=' + encodeURIComponent(p.name) + '#reserve';
    return `<article class="pack reveal${p.featured?' featured':''}">
      <figure>${pic(p.img, p.alt)}<span class="price"><small>${p.label}</small>${p.price} <span class="cur">TTD</span><span class="usd">${p.usd} USD</span></span></figure>
      <div class="body">
        <span class="dur">${clock}${p.dur}</span>
        <h3>${p.name}</h3>
        <p>${p.desc}</p>
        <div class="foot"><a class="btn ${p.featured?'btn-hib':'btn-line'} btn-small" href="${href}" data-pack="${p.name}">Request to book</a></div>
      </div>
    </article>`;
  }
  const spotCard = s => `<article class="spot reveal">${pic(s.img, s.alt)}<div class="body"><span class="kind">${s.kind}</span><h3>${s.name}</h3><p>${s.desc}</p></div></article>`;
  const fill = (id, html) => { const el = $(id); if(el) el.innerHTML = html; };
  fill('packList', PACKS.map(packCard).join(''));
  fill('packListFull', PACKS.map(packCard).join(''));
  fill('spotsHome', SPOTS.slice(0,3).map(spotCard).join(''));
  fill('spotsFull', SPOTS.map(spotCard).join(''));

  // ---------- Mobile menu ----------
  const menuBtn = $('menuBtn');
  const header = document.querySelector('header.site');
  menuBtn.addEventListener('click', () => {
    const open = header.classList.toggle('mobile-open');
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });
  document.addEventListener('keydown', e => { if(e.key === 'Escape' && header.classList.contains('mobile-open')) menuBtn.click(); });

  // ---------- Fade sections in as they scroll into view ----------
  if(!reduce && 'IntersectionObserver' in window){
    const io = new IntersectionObserver(es => { es.forEach(x => { if(x.isIntersecting){ x.target.classList.remove('pre'); io.unobserve(x.target); } }); }, { rootMargin:'0px 0px -8% 0px', threshold:.05 });
    document.querySelectorAll('.reveal').forEach(el => { if(el.getBoundingClientRect().top > window.innerHeight){ el.classList.add('pre'); io.observe(el); } });
  }

  // ---------- Contact details ----------
  const WA = '18687024236', EMAIL = 'gemsdelarosa1118@gmail.com';
  function openVia(via, subject, body){
    if(via === 'whatsapp') window.open('https://wa.me/' + WA + '?text=' + encodeURIComponent(body), '_blank', 'noopener');
    else location.href = 'mailto:' + EMAIL + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  }
  // WhatsApp is the default; pressing Enter in a field also sends by WhatsApp.
  const viaOf = e => (e.submitter && e.submitter.dataset.via) || 'whatsapp';

  // ---------- Airbnb ----------
  // If this is ever emptied, the button asks for the stay over WhatsApp instead.
  const AIRBNB_URL = 'https://www.airbnb.com/rooms/1561900705779134761';
  const ab = $('airbnbBtn');
  if(ab){
    if(AIRBNB_URL){ ab.href = AIRBNB_URL; }
    else { ab.href = 'https://wa.me/' + WA + '?text=' + encodeURIComponent("Hi G.E.M.S De La Rosa! I'd like to book the Airbnb stay. Could you send me the listing link and availability?"); ab.firstChild.textContent = 'Request the stay on WhatsApp'; }
  }

  // ---------- Event booking form (events page) ----------
  const reserveForm = $('reserveForm');
  if(reserveForm){
    const hours = $('evHours'), out = $('evHoursOut'), type = $('evType');
    const selectPack = name => { const map = {'Birthdays':'Birthday', 'Other Smaller Events':'Other Smaller Event', 'Other Larger Events':'Other Larger Event'}; type.value = map[name] || name; syncHours(); };
    function syncHours(){
      if(type.value === 'Wedding Venue'){ hours.value = 8; hours.disabled = true; } else { hours.disabled = false; }
      out.textContent = hours.value + ' hr';
    }
    hours.addEventListener('input', syncHours); type.addEventListener('change', syncHours); syncHours();
    const fromUrl = new URLSearchParams(location.search).get('pack');
    if(fromUrl) selectPack(fromUrl);
    // Packages listed on this same page just jump down to the form
    document.addEventListener('click', e => {
      const a = e.target.closest('[data-pack]');
      if(a){ e.preventDefault(); selectPack(a.dataset.pack); history.replaceState(null, '', a.getAttribute('href'));
        $('reserve').scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' }); type.focus({ preventScroll: true }); }
    });
    reserveForm.addEventListener('submit', e => {
      e.preventDefault();
      if(!reserveForm.reportValidity()) return;
      const v = id => $(id).value.trim();
      const body = `Hi G.E.M.S De La Rosa! I'd like to reserve an event space.\n\nEvent: ${v('evType')}\nPreferred date: ${v('evDate')}\nHours needed: ${hours.value} hr\nEstimated guests: ${v('evGuests') || 'not sure yet'}\nName: ${v('evName')}\nPhone: ${v('evPhone') || '—'}\n\nNotes: ${v('evNotes') || '—'}\n\nI understand the $1,500 TTD refundable caution fee applies.`;
      openVia(viaOf(e), `Event booking request: ${v('evType')} on ${v('evDate')}`, body);
    });
  }

  // ---------- Contact form (contact page) ----------
  const contactForm = $('contactForm');
  if(contactForm){
    contactForm.addEventListener('submit', e => {
      e.preventDefault();
      if(!contactForm.reportValidity()) return;
      const v = id => $(id).value.trim();
      const name = (v('cFirst') + ' ' + v('cLast')).trim();
      const body = `Hi G.E.M.S De La Rosa,\n\n${v('cMsg')}\n\n— ${name}\n${v('cEmail')}`;
      openVia(viaOf(e), `Message from ${name}`, body);
    });
  }

  // ---------- Photo viewer ----------
  // Any <button data-lightbox="group"> wrapping an <img> opens full screen.
  const openers = Array.from(document.querySelectorAll('[data-lightbox]'));
  if(openers.length && window.HTMLDialogElement){
    const dlg = document.createElement('dialog');
    dlg.className = 'lightbox';
    dlg.setAttribute('aria-label', 'Photo viewer');
    dlg.innerHTML = `
      <figure><img alt=""><figcaption><span class="lb-cap"></span><span class="lb-count"></span></figcaption></figure>
      <button class="lb-btn lb-close" type="button" aria-label="Close photo viewer"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg></button>
      <button class="lb-btn lb-prev" type="button" aria-label="Previous photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 5l-7 7 7 7"/></svg></button>
      <button class="lb-btn lb-next" type="button" aria-label="Next photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 5l7 7-7 7"/></svg></button>`;
    document.body.appendChild(dlg);
    const big = dlg.querySelector('img'), cap = dlg.querySelector('.lb-cap'), count = dlg.querySelector('.lb-count');
    let group = [], idx = 0;
    function show(i){
      idx = (i + group.length) % group.length;
      const btn = group[idx], img = btn.querySelector('img');
      big.src = img.currentSrc || img.src;
      big.alt = img.alt;
      cap.textContent = btn.dataset.caption || img.alt;
      count.textContent = group.length > 1 ? `${idx + 1} / ${group.length}` : '';
    }
    openers.forEach(btn => btn.addEventListener('click', () => {
      group = openers.filter(b => b.dataset.lightbox === btn.dataset.lightbox);
      dlg.classList.toggle('single', group.length < 2);
      show(group.indexOf(btn));
      dlg.showModal();
    }));
    dlg.querySelector('.lb-close').addEventListener('click', () => dlg.close());
    dlg.querySelector('.lb-prev').addEventListener('click', () => show(idx - 1));
    dlg.querySelector('.lb-next').addEventListener('click', () => show(idx + 1));
    dlg.addEventListener('click', e => { if(e.target === dlg) dlg.close(); });
    dlg.addEventListener('keydown', e => {
      if(e.key === 'ArrowLeft') show(idx - 1);
      if(e.key === 'ArrowRight') show(idx + 1);
    });
    let x0 = null;
    dlg.addEventListener('touchstart', e => { x0 = e.touches[0].clientX; }, { passive: true });
    dlg.addEventListener('touchend', e => {
      if(x0 === null) return;
      const dx = e.changedTouches[0].clientX - x0; x0 = null;
      if(Math.abs(dx) > 50) show(idx + (dx < 0 ? 1 : -1));
    });
  }
})();
