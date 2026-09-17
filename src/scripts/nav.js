// Navigation behaviour. Nothing here is decorative: without it the nav is a
// plain list of links that still works, which is why the markup ships that way.

/* ---------------------------------------------------------------------------
   Narrow screens collapse the links behind a button.
--------------------------------------------------------------------------- */
function initMenu() {
  const button = document.querySelector('.menu-button');
  const list = document.getElementById('primary-links');
  const nav = document.querySelector('.pill-nav');
  if (!button || !list || !nav) return;

  const collapses = window.matchMedia('(max-width: 860px)');

  const setOpen = (open) => {
    button.setAttribute('aria-expanded', String(open));
    list.hidden = collapses.matches && !open;
  };

  const sync = () => setOpen(false);

  button.addEventListener('click', () => {
    const open = button.getAttribute('aria-expanded') === 'true';
    setOpen(!open);
    if (!open) list.querySelector('a')?.focus();
  });

  // A link inside the panel has done its job once it is followed.
  list.addEventListener('click', (event) => {
    if (collapses.matches && event.target.closest('a')) setOpen(false);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return;
    if (button.getAttribute('aria-expanded') !== 'true') return;
    setOpen(false);
    button.focus();
  });

  document.addEventListener('click', (event) => {
    if (button.getAttribute('aria-expanded') !== 'true') return;
    if (!nav.contains(event.target)) setOpen(false);
  });

  collapses.addEventListener('change', sync);
  sync();
}

/* ---------------------------------------------------------------------------
   On the landing page, the section link for whatever is on screen is marked,
   so the nav says where you are.
--------------------------------------------------------------------------- */
function initSectionSpy() {
  const links = [...document.querySelectorAll('[data-section]')];
  if (!links.length || !('IntersectionObserver' in window)) return;

  const sections = links
    .map((link) => ({ link, el: document.getElementById(link.dataset.section) }))
    .filter((pair) => pair.el);
  if (!sections.length) return;

  const visible = new Set();
  const paint = () => {
    const active = sections.find((pair) => visible.has(pair.el));
    sections.forEach(({ link }) => {
      if (active && link === active.link) link.setAttribute('aria-current', 'true');
      else link.removeAttribute('aria-current');
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) visible.add(entry.target);
        else visible.delete(entry.target);
      });
      paint();
    },
    // Roughly the middle band of the viewport, so one section is current at a time.
    { rootMargin: '-35% 0px -55% 0px' }
  );

  sections.forEach(({ el }) => observer.observe(el));
}

initMenu();
initSectionSpy();
