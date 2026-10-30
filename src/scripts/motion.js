// Motion layer. Everything here is additive: the page is complete and fully
// visible without it. Nothing runs under prefers-reduced-motion.

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

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
        const timer = setTimeout(() => finish(el), delay + 800);
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
   Scorecard figures count up once, when the strip first arrives. The final
   number is already in the markup, so nothing depends on this running.
--------------------------------------------------------------------------- */
function initCounters() {
  const nums = document.querySelectorAll('[data-count]');
  if (!nums.length || !('IntersectionObserver' in window)) return;

  const ease = (t) => 1 - Math.pow(1 - t, 3);
  const run = (el) => {
    const target = parseInt(el.dataset.count, 10);
    const duration = 1100;
    const start = performance.now();
    const frame = (now) => {
      const t = Math.min(1, (now - start) / duration);
      el.textContent = String(Math.round(ease(t) * target));
      if (t < 1) requestAnimationFrame(frame);
    };
    el.textContent = '0';
    requestAnimationFrame(frame);
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        observer.unobserve(entry.target);
        run(entry.target);
      });
    },
    { threshold: 0.6 }
  );
  nums.forEach((el) => observer.observe(el));
}

if (!reduceMotion) {
  initReveal();
  initCounters();
}
initNav();
