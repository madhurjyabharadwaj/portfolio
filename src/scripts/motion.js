// Motion layer. Everything here is additive: the page is complete and fully
// visible without it. Nothing runs under prefers-reduced-motion.

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = window.matchMedia('(pointer: fine)').matches;

/* ---------------------------------------------------------------------------
   Pill nav: blur and a soft shadow once the page has scrolled past the hero
   (or the page header on sub-pages).
--------------------------------------------------------------------------- */
function initNav() {
  const header = document.querySelector('.site-header');
  const hero = document.querySelector('.hero') || document.querySelector('.page-head');
  if (!header) return;
  let ticking = false;
  const update = () => {
    const threshold = hero ? hero.getBoundingClientRect().bottom + window.scrollY - 80 : 120;
    header.classList.toggle('is-scrolled', window.scrollY > threshold);
    ticking = false;
  };
  window.addEventListener(
    'scroll',
    () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    },
    { passive: true }
  );
  update();
}

/* ---------------------------------------------------------------------------
   Scroll reveal. JS adds the hidden class, IntersectionObserver removes it,
   once, and never re-hides. Children of a [data-reveal-group] stagger by 60ms.
--------------------------------------------------------------------------- */
function initReveal() {
  if (!('IntersectionObserver' in window)) return;

  const items = [];
  document.querySelectorAll('[data-reveal]').forEach((el) => items.push({ el, delay: 0 }));
  document.querySelectorAll('[data-reveal-group]').forEach((group) => {
    Array.from(group.children).forEach((el, i) => items.push({ el, delay: i * 60 }));
  });

  const finish = (el) => {
    // Drop the reveal classes so hover transitions on the same element are
    // not slowed down by the reveal's own transition and delay.
    el.classList.remove('reveal', 'is-visible');
    el.style.transitionDelay = '';
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        observer.unobserve(el);
        el.classList.add('is-visible');
        const delay = parseInt(el.style.transitionDelay, 10) || 0;
        const timer = setTimeout(() => finish(el), delay + 700);
        el.addEventListener(
          'transitionend',
          () => {
            clearTimeout(timer);
            finish(el);
          },
          { once: true }
        );
      });
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.1 }
  );

  items.forEach(({ el, delay }) => {
    el.classList.add('reveal');
    el.style.transitionDelay = `${delay}ms`;
    observer.observe(el);
  });
}

/* ---------------------------------------------------------------------------
   Custom cursor. A dot that tracks exactly and a ring that follows with lag.
   Fine pointers only, never under reduced motion, and the native cursor comes
   back over text fields.
--------------------------------------------------------------------------- */
function initCursor() {
  const dot = document.createElement('div');
  const ring = document.createElement('div');
  dot.className = 'cursor-dot';
  ring.className = 'cursor-ring';
  dot.setAttribute('aria-hidden', 'true');
  ring.setAttribute('aria-hidden', 'true');
  document.body.append(dot, ring);
  document.documentElement.classList.add('has-cursor');

  let x = -100;
  let y = -100;
  let ringX = x;
  let ringY = y;
  let visible = false;
  let running = false;

  const INTERACTIVE = 'a, button, [role="button"], label, summary, .work-card';
  const TEXT_FIELD = 'input, textarea, select, [contenteditable="true"]';

  const frame = () => {
    ringX += (x - ringX) * 0.18;
    ringY += (y - ringY) * 0.18;
    dot.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
    if (Math.abs(x - ringX) > 0.1 || Math.abs(y - ringY) > 0.1) {
      requestAnimationFrame(frame);
    } else {
      running = false;
    }
  };

  const tick = () => {
    if (!running) {
      running = true;
      requestAnimationFrame(frame);
    }
  };

  document.addEventListener(
    'mousemove',
    (event) => {
      x = event.clientX;
      y = event.clientY;
      if (!visible) {
        visible = true;
        ringX = x;
        ringY = y;
        document.documentElement.classList.add('cursor-visible');
      }
      const target = event.target instanceof Element ? event.target : null;
      const overText = !!target?.closest(TEXT_FIELD);
      const overLink = !overText && !!target?.closest(INTERACTIVE);
      document.documentElement.classList.toggle('cursor-native', overText);
      document.documentElement.classList.toggle('cursor-hover', overLink);
      tick();
    },
    { passive: true }
  );

  document.addEventListener('mousedown', () => document.documentElement.classList.add('cursor-down'));
  document.addEventListener('mouseup', () => document.documentElement.classList.remove('cursor-down'));
  document.addEventListener('mouseleave', () => {
    visible = false;
    document.documentElement.classList.remove('cursor-visible');
  });
}

if (!reduceMotion) {
  initReveal();
  if (finePointer) initCursor();
}
initNav();
