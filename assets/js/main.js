// Hive Energy Drink — preview site behaviour
(function () {
  // Sticky header background
  var header = document.querySelector('.site-header');
  function onScroll() { if (header) header.classList.toggle('scrolled', window.scrollY > 30); }
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

  // Mobile menu
  var btn = document.querySelector('.menu-btn');
  var links = document.getElementById('nav-links');
  if (btn && links) {
    btn.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
  }

  // Hero video: plays only once the real advert file exists (assets/video/hive-advert.mp4).
  // Until then, the animated honeycomb stand-in stays visible.
  var hero = document.querySelector('.hero');
  var video = document.querySelector('.hero-media video');
  if (hero && video) {
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reduce) {
      video.addEventListener('canplay', function () {
        hero.classList.add('has-video');
        var p = video.play(); if (p && p.catch) p.catch(function () {});
      }, { once: true });
      video.load();
    }
  }

  // Scroll reveal
  var items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    items.forEach(function (el) { io.observe(el); });
  } else { items.forEach(function (el) { el.classList.add('in'); }); }

  // Preview forms: not connected yet. Nothing is sent anywhere.
  document.querySelectorAll('form[data-preview]').forEach(function (form) {
    form.addEventListener('submit', function (ev) {
      ev.preventDefault();
      if (!form.reportValidity()) return;
      var s = form.querySelector('.form-status');
      if (s) { s.classList.add('show'); s.focus(); }
    });
  });

  // Footer year
  var y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear();
})();
