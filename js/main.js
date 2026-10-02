const btn = document.querySelector('.menu-btn');
const list = document.querySelector('nav ul');
btn?.addEventListener('click', () => {
  const open = list.classList.toggle('open');
  btn.setAttribute('aria-expanded', open);
});
document.querySelectorAll('nav a').forEach(a => {
  if (a.getAttribute('href') === location.pathname.split('/').pop() || (a.getAttribute('href') === 'index.html' && !location.pathname.split('/').pop())) a.setAttribute('aria-current', 'page');
});
document.querySelectorAll('[data-year]').forEach(e => e.textContent = new Date().getFullYear());
// Contact form: opens the visitor's email app. Replace with a form service (Formspree, Netlify Forms) for real submissions.
document.querySelector('#contact-form')?.addEventListener('submit', e => {
  e.preventDefault();
  const f = new FormData(e.target);
  location.href = `mailto:office@gracechurch.example?subject=${encodeURIComponent(f.get('subject'))}&body=${encodeURIComponent(f.get('message') + '\n\n' + f.get('name') + ' <' + f.get('email') + '>')}`;
});
