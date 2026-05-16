(function () {
  const root = document.querySelector('[data-post-finder]');
  if (!root) return;

  const searchInput = root.querySelector('#postSearch');
  const buttons = Array.from(root.querySelectorAll('[data-filter]'));
  const posts = Array.from(root.querySelectorAll('.searchable-post'));
  const count = root.querySelector('[data-finder-count]');
  const empty = root.querySelector('[data-finder-empty]');
  let activeFilter = 'all';

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

  function render() {
    const query = normalize(searchInput ? searchInput.value : '');
    let visible = 0;

    posts.forEach((post) => {
      const show = matchesFilter(post) && matchesSearch(post, query);
      post.hidden = !show;
      if (show) visible += 1;
    });

    if (count) {
      count.textContent = visible === 1 ? 'פוסט אחד' : visible + ' פוסטים';
    }
    if (empty) {
      empty.hidden = visible !== 0;
    }
  }

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      activeFilter = button.dataset.filter || 'all';
      buttons.forEach((item) => item.classList.toggle('is-active', item === button));
      render();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', render);
  }

  render();
})();
