(function () {
  const root = document.querySelector('[data-post-finder]');
  if (!root) return;

  const searchInput = root.querySelector('#postSearch');
  const buttons = Array.from(root.querySelectorAll('[data-filter]'));
  const posts = Array.from(root.querySelectorAll('.searchable-post'));
  const count = root.querySelector('[data-finder-count]');
  const empty = root.querySelector('[data-finder-empty]');
  const loadMore = root.querySelector('[data-load-more]');
  const initialLimit = parseInt(root.dataset.initialLimit || '15', 10);
  const step = initialLimit;
  let activeFilter = 'all';
  let visibleLimit = initialLimit;

  function normalize(value) {
    return (value || '')
      .toString()
      .trim()
      .toLowerCase()
      .replace(/[\u0591-\u05C7]/g, '')
      .replace(/\s+/g, ' ');
  }

  function matchesFilter(post) {
    if (activeFilter === 'all') return true;
    return (post.dataset.filters || '').split(/\s+/).includes(activeFilter);
  }

  function matchesSearch(post, query) {
    if (!query) return true;
    return normalize(post.dataset.search).includes(query);
  }

  function labelFor(total, shown) {
    if (total === 0) return '0 פוסטים';
    if (total === 1) return 'פוסט אחד';
    if (shown < total) return shown + ' מתוך ' + total + ' פוסטים';
    return total + ' פוסטים';
  }

  function render() {
    const query = normalize(searchInput ? searchInput.value : '');
    const matches = posts.filter((post) => matchesFilter(post) && matchesSearch(post, query));

    posts.forEach((post) => { post.hidden = true; });
    matches.slice(0, visibleLimit).forEach((post) => { post.hidden = false; });

    const shown = Math.min(matches.length, visibleLimit);
    if (count) count.textContent = labelFor(matches.length, shown);
    if (empty) empty.hidden = matches.length !== 0;
    if (loadMore) {
      loadMore.hidden = shown >= matches.length;
      loadMore.textContent = 'עוד פוסטים (' + (matches.length - shown) + ')';
    }
  }

  function resetLimit() {
    visibleLimit = initialLimit;
  }

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      activeFilter = button.dataset.filter || 'all';
      buttons.forEach((item) => item.classList.toggle('is-active', item === button));
      resetLimit();
      render();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', () => {
      resetLimit();
      render();
    });
  }

  if (loadMore) {
    loadMore.addEventListener('click', () => {
      visibleLimit += step;
      render();
    });
  }

  render();
})();
