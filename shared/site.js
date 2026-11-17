/* Enhancement for media filtering; safe on pages without a media grid. */
(() => {
  const filters = document.querySelectorAll('[data-filter]');
  if (!filters.length) return;
  filters.forEach(button => button.addEventListener('click', () => {
    const type = button.dataset.filter;
    filters.forEach(item => {
      item.classList.toggle('active', item === button);
      item.setAttribute('aria-pressed', String(item === button));
    });
    if (type === 'podcast' || type === 'press') {
      document.querySelectorAll('[data-kind]').forEach(card => card.classList.remove('hidden'));
      document.getElementById(type === 'podcast' ? 'podcasts' : 'press')?.scrollIntoView({behavior:'smooth'});
      return;
    }
    document.querySelectorAll('[data-kind]').forEach(card => card.classList.toggle('hidden', type !== 'all' && card.dataset.kind !== type));
    document.getElementById('feature-grid')?.setAttribute('aria-label', type === 'all' ? 'All featured media' : `Featured ${type} appearances`);
  }));
})();

/* Keep the existing navigation compact on small screens. */
(() => {
  const toggle = document.querySelector('.nav-toggle');
  if (!toggle) return;

  const header = toggle.closest('.nav');
  const resources = header.querySelector('.resources-menu');
  const summary = resources.querySelector('summary');
  const mobile = matchMedia('(max-width: 950px)');

  const closeMenu = () => {
    resources.open = false;
    toggle.setAttribute('aria-expanded', 'false');
  };
  const setViewport = () => {
    closeMenu();
    toggle.hidden = !mobile.matches;
  };

  header.classList.add('has-menu');
  setViewport();
  mobile.addEventListener('change', setViewport);

  toggle.addEventListener('click', () => {
    if (toggle.getAttribute('aria-expanded') === 'true') {
      closeMenu();
    } else {
      toggle.setAttribute('aria-expanded', 'true');
    }
  });

  document.addEventListener('click', event => {
    if (!resources.contains(event.target)) resources.open = false;
    if (!header.contains(event.target)) closeMenu();
  });

  header.addEventListener('keydown', event => {
    if (event.key !== 'Escape') return;
    if (resources.open) {
      resources.open = false;
      summary.focus();
    } else if (toggle.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      toggle.focus();
    }
  });
})();
