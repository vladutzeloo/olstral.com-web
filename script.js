function showPage(id) {
  window.scrollTo(0, 0);
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const t = document.getElementById('page-' + id);
  if (t) t.classList.add('active');
  setTimeout(() => { initReveal(); updateFabs(); }, 50);
}

document.querySelectorAll('a[onclick]').forEach(a => a.addEventListener('click', e => e.preventDefault()));

//  Intersection Observer for scroll reveals
function initReveal() {
  // Content is always visible; reveal classes are kept for compatibility only
  document.querySelectorAll('.page.active .reveal, .page.active .reveal-left')
    .forEach(el => el.classList.add('visible'));
}

//  Counter animation
function animateCounters() {
  document.querySelectorAll('.stat-num[data-target]').forEach(el => {
    const target = parseInt(el.dataset.target);
    let current = 0;
    const step = target / 40;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) { el.textContent = target + '+'; clearInterval(timer); }
      else el.textContent = Math.floor(current) + '+';
    }, 30);
  });
}

//  Red line reveal
function initRedLines() {
  document.querySelectorAll('.red-line').forEach(el => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
    }, {threshold:0.5});
    obs.observe(el);
  });
}

//  Stats counter on scroll
const statObs = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { animateCounters(); statObs.disconnect(); } });
}, {threshold: 0.3});
const statsRow = document.querySelector('.stats-row');
if (statsRow) statObs.observe(statsRow);

// Init on load



// ── MOBILE NAV
function toggleMenu() {
  const ham = document.getElementById('hamburger');
  const nav = document.getElementById('mobileNav');
  ham.classList.toggle('open');
  nav.classList.toggle('open');
  document.body.style.overflow = nav.classList.contains('open') ? 'hidden' : '';
}
function toggleSub(el) {
  el.closest('.nav-mobile-item').classList.toggle('expanded');
}
function mobileGo(page) {
  document.getElementById('hamburger').classList.remove('open');
  document.getElementById('mobileNav').classList.remove('open');
  document.body.style.overflow = '';
  showPage(page);
}

// ── FORM SUBMIT (Formspree)
async function handleSubmit(e) {
  e.preventDefault();
  const btn = document.getElementById('submitBtn');
  const btnText = document.getElementById('btnText');
  const form = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');
  const error = document.getElementById('formError');

  // Fallback: Formspree not yet configured → open mailto
  if (form.action.includes('YOUR_FORMSPREE_ID')) {
    const firstName = (form.querySelector('[name=first_name]') || {}).value || '';
    const lastName  = (form.querySelector('[name=last_name]')  || {}).value || '';
    const name    = [firstName, lastName].filter(Boolean).join(' ');
    const email   = (form.querySelector('[name=email]')   || {}).value || '';
    const company = (form.querySelector('[name=company]') || {}).value || '';
    const message = (form.querySelector('[name=message]') || {}).value || '';
    const body = encodeURIComponent(
      (name    ? 'Name: '    + name    + '\n' : '') +
      (company ? 'Company: ' + company + '\n' : '') +
      (email   ? 'Email: '   + email   + '\n\n' : '') +
      message
    );
    window.location.href = 'mailto:office@olstral.com?subject=Website%20Inquiry&body=' + body;
    return;
  }

  btnText.textContent = 'Sending...';
  btn.disabled = true;
  success.style.display = 'none';
  error.style.display = 'none';

  try {
    const res = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    });
    if (res.ok) {
      success.style.display = 'block';
      form.reset();
      btnText.textContent = 'Send Message';
      btn.disabled = false;
    } else {
      throw new Error('Server error');
    }
  } catch(err) {
    error.style.display = 'block';
    btnText.textContent = 'Send Message';
    btn.disabled = false;
  }
}

// ── CAROUSEL
let carouselIdx = 0;
function carouselSetup() {
  const slides = document.querySelectorAll('.carousel-slide');
  const dotsEl = document.getElementById('carouselDots');
  if (!dotsEl) return;
  dotsEl.innerHTML = '';
  slides.forEach((_, i) => {
    const d = document.createElement('button');
    d.className = 'carousel-dot' + (i === 0 ? ' active' : '');
    d.onclick = () => carouselGo(i);
    dotsEl.appendChild(d);
  });
  carouselGo(0);
  // Auto-advance
  setInterval(() => carouselMove(1), 5000);
}
function carouselGo(idx) {
  const slides = document.querySelectorAll('.carousel-slide');
  const dots = document.querySelectorAll('.carousel-dot');
  if (!slides.length) return;
  carouselIdx = (idx + slides.length) % slides.length;
  document.getElementById('carouselSlides').style.transform = `translateX(-${carouselIdx * 100}%)`;
  dots.forEach((d,i) => d.classList.toggle('active', i === carouselIdx));
}
function carouselMove(dir) { carouselGo(carouselIdx + dir); }
// Touch swipe support
let touchStartX = 0;
document.addEventListener('touchstart', e => touchStartX = e.touches[0].clientX, {passive:true});
document.addEventListener('touchend', e => {
  const dx = e.changedTouches[0].clientX - touchStartX;
  if (Math.abs(dx) > 50) carouselMove(dx > 0 ? -1 : 1);
}, {passive:true});
window.addEventListener('DOMContentLoaded', carouselSetup);

// ── FLOATING ACTION BUTTONS ──────────────────────────────
function updateFabs() {
  const onHome = document.getElementById('page-home')?.classList.contains('active');
  const fabHome = document.getElementById('fabHome');
  const fabTop  = document.getElementById('fabTop');
  if (fabHome) fabHome.classList.toggle('visible', !onHome);
  if (fabTop)  fabTop.classList.toggle('visible', window.scrollY > 200);
}
window.addEventListener('scroll', updateFabs, {passive:true});

window.addEventListener('DOMContentLoaded', () => {
  setTimeout(initReveal, 100);
  initRedLines();
  updateFabs();
  const y = document.getElementById('copyright-year');
  if (y) y.textContent = new Date().getFullYear();
});
