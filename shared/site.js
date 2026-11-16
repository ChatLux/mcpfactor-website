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
