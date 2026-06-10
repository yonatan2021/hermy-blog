(function() {
  'use strict';

  /* ─── prefers-reduced-motion check ─── */
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  /* ─── Entrance gate (localStorage) ─── */
  var ENTRANCE_KEY = 'hermy-entrance-played';
  var entrancePlayed = false;
  try { entrancePlayed = localStorage.getItem(ENTRANCE_KEY) === 'true'; } catch (e) {}

  if (!entrancePlayed) {
    document.documentElement.classList.add('entrance-active');
    try { localStorage.setItem(ENTRANCE_KEY, 'true'); } catch (e) {}
  }

  /* ─── Hero gradient shift start after entrance ─── */
  var ENTRANCE_DURATION = 600; /* ~last hero-entrance delay + animation */
  setTimeout(function() {
    document.body.classList.add('hero-gradient-animate');
  }, entrancePlayed ? 100 : ENTRANCE_DURATION);

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
    }, { threshold: 0.05, rootMargin: '0px 0px -30px 0px' });

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

  /* ─── Scroll parallax: gentle drift between hero-copy and source-grid ─── */
  (function() {
    var heroCopy = document.querySelector('.hero-copy');
    var sourceGrid = document.querySelector('.source-grid');
    if (!heroCopy || !sourceGrid) return;

    var ticking = false;
    window.addEventListener('scroll', function() {
      if (!ticking) {
        window.requestAnimationFrame(function() {
          var scrollY = window.pageYOffset;
          var maxDrift = 20;
          var factor = Math.min(scrollY / 600, 1);
          var drift = factor * maxDrift;
          if (heroCopy) heroCopy.style.transform = 'translateY(' + (-drift * 0.3) + 'px)';
          if (sourceGrid) sourceGrid.style.transform = 'translateY(' + (drift * 0.15) + 'px)';
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  })();

})();
