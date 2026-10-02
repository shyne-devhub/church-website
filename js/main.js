const nav = document.getElementById('nav');
const btn = document.querySelector('.menu-btn');
btn?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  btn.setAttribute('aria-expanded', open);
});
const here = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav a:not(.nav-cta)').forEach(a => {
  if (a.getAttribute('href') === here) a.setAttribute('aria-current', 'page');
});

// Operation C.M.S countdown (28–30 October 2026, Nigeria time)
const START = new Date('2026-10-28T00:00:00+01:00').getTime();
const END = new Date('2026-10-31T00:00:00+01:00').getTime();
const pad = n => String(n).padStart(2, '0');
function tick() {
  const now = Date.now(), diff = START - now;
  document.querySelectorAll('[data-countdown]').forEach(c => {
    const status = c.parentNode.querySelector('[data-cms-status]');
    if (diff <= 0) {
      if (status) status.textContent = now < END ? 'Happening now' : 'Next edition dates coming soon';
      c.querySelectorAll('b').forEach(b => b.textContent = '00');
      return;
    }
    const s = Math.floor(diff / 1000);
    c.querySelector('[data-d]').textContent = pad(Math.floor(s / 86400));
    c.querySelector('[data-h]').textContent = pad(Math.floor(s % 86400 / 3600));
    c.querySelector('[data-m]').textContent = pad(Math.floor(s % 3600 / 60));
    c.querySelector('[data-s]').textContent = pad(s % 60);
  });
}
tick(); setInterval(tick, 1000);

// Forms: no backend yet. Connect to Formspree/Netlify Forms/your own endpoint, then POST in this handler.
document.querySelectorAll('form[data-form]').forEach(f => {
  f.addEventListener('submit', e => {
    e.preventDefault();
    f.style.display = 'none';
    const done = f.nextElementSibling;
    if (done?.classList.contains('done')) done.style.display = 'block';
  });
});
