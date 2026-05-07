/* ─── Studio Page JS ─────────────────────────────────────────────────────── */

(function () {

  // ── Fade in page, then stagger hero elements ──────────────────────────────
  gsap.timeline({ defaults: { ease: 'power3.out' } })
    .to(document.body, { opacity: 1, duration: 0.6 })
    .to('#hero-eyebrow', { opacity: 1, y: 0, duration: 0.5 }, '-=0.2')
    .to('#hero-heading', { opacity: 1, y: 0, duration: 0.8 }, '-=0.3')
    .to('#hero-sub',     { opacity: 1, y: 0, duration: 0.6 }, '-=0.5')
    .to('#hero-rule',    { opacity: 1, duration: 0.5 }, '-=0.3');

  // ── Gallery staggered reveal via IntersectionObserver ─────────────────────
  var artPieces = document.querySelectorAll('.art-piece');

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var el    = entry.target;
        var index = Array.from(artPieces).indexOf(el);
        setTimeout(function () {
          el.classList.add('visible');
        }, index * 80);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.06 });

  artPieces.forEach(function (piece) { observer.observe(piece); });

})();
