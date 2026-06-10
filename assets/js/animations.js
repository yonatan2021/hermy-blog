(function() {
  'use strict';

  /* ─── prefers-reduced-motion check ─── */
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  /* ─── Entrance gate (localStorage, per Ron's review) ─── */
  var ENTRANCE_KEY = 'hermy-entrance-played';
  var entrancePlayed = false;
  try { entrancePlayed = localStorage.getItem(ENTRANCE_KEY) === 'true'; } catch (e) {}

  if (!entrancePlayed) {
    document.documentElement.classList.add('entrance-active');
    try { localStorage.setItem(ENTRANCE_KEY, 'true'); } catch (e) {}
  }

  /* ─── Scroll reveals via Intersection Observer ─── */
  var revealSections = document.querySelectorAll(
    '.explain-grid, .tools-stage, .trust-layout, .guide-grid, .growth-strip'
  );

  if (revealSections.length > 0 && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    revealSections.forEach(function(el) { observer.observe(el); });
  }

  /* ─── Header scroll effect ─── */
  var header = document.querySelector('.site-header');
  var hero = document.querySelector('.hero');
  if (header && hero && 'IntersectionObserver' in window) {
    var heroObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        header.classList.toggle('is-scrolled', !entry.isIntersecting);
      });
    }, { threshold: 0 });
    heroObserver.observe(hero);
  }

})();
