/* ─── Landing Page JS ────────────────────────────────────────────────────── */

(function () {
  const name     = document.getElementById('landing-name');
  const subtitle = document.getElementById('landing-subtitle');
  const nav      = document.getElementById('landing-nav');
  const overlay  = document.getElementById('page-overlay');

  // ── Entrance animation ──
  gsap.timeline({ defaults: { ease: 'power3.out' } })
    .to(name,     { opacity: 1, y: 0, duration: 0.8 }, 0.1)
    .to(subtitle, { opacity: 1, y: 0, duration: 0.7 }, 0.5)
    .to(nav,      { opacity: 1, y: 0, duration: 0.7 }, 0.85);

  // ── Page transition on link click ──
  document.querySelectorAll('[data-dest]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      var href = link.getAttribute('href');
      var dest = link.getAttribute('data-dest');
      var bg   = dest === 'lab' ? '#0D0C0B' : '#FDE8E8';

      overlay.style.pointerEvents = 'all';
      overlay.style.background    = bg;

      gsap.timeline()
        .to(overlay, { opacity: 1, duration: 0.5, ease: 'power2.inOut' })
        .call(function () {
          window.location.href = href;
        }, [], 0.55);
    });
  });
})();
