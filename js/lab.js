/* ─── Lab Page JS ────────────────────────────────────────────────────────── */

(function () {

  // ── Particle canvas ──────────────────────────────────────────────────────
  var canvas  = document.getElementById('particle-canvas');
  var ctx     = canvas.getContext('2d');
  var W, H, particles = [];
  var GOLD    = 'rgba(196, 154, 42, ';
  var COUNT   = 60;
  var CONNECT = 120;

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }

  function Particle() {
    this.x  = Math.random() * W;
    this.y  = Math.random() * H;
    this.vx = (Math.random() - 0.5) * 0.35;
    this.vy = (Math.random() - 0.5) * 0.35;
    this.r  = Math.random() * 2 + 1;
  }

  Particle.prototype.update = function () {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x < 0 || this.x > W) this.vx *= -1;
    if (this.y < 0 || this.y > H) this.vy *= -1;
  };

  function init() {
    particles = [];
    for (var i = 0; i < COUNT; i++) particles.push(new Particle());
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);

    for (var i = 0; i < particles.length; i++) {
      var p = particles[i];
      p.update();

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = GOLD + '0.3)';
      ctx.fill();

      for (var j = i + 1; j < particles.length; j++) {
        var q  = particles[j];
        var dx = p.x - q.x;
        var dy = p.y - q.y;
        var d  = Math.sqrt(dx * dx + dy * dy);
        if (d < CONNECT) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.strokeStyle = GOLD + (0.12 * (1 - d / CONNECT)) + ')';
          ctx.lineWidth   = 0.8;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(draw);
  }

  resize();
  init();
  draw();
  window.addEventListener('resize', function () { resize(); init(); });

  // ── Mobile hamburger ──────────────────────────────────────────────────────
  var hamburger    = document.getElementById('lab-hamburger');
  var mobileNav    = document.getElementById('lab-nav-mobile');

  hamburger.addEventListener('click', function () {
    mobileNav.classList.toggle('open');
  });

  window.closeMobileNav = function () {
    mobileNav.classList.remove('open');
  };

  // Close mobile nav on anchor click
  mobileNav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      mobileNav.classList.remove('open');
    });
  });

  // ── Scroll reveal via IntersectionObserver ────────────────────────────────
  var revealEls = document.querySelectorAll('.reveal');

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealEls.forEach(function (el) { observer.observe(el); });

  // ── Nav scroll state ─────────────────────────────────────────────────────
  var nav = document.getElementById('lab-nav');
  window.addEventListener('scroll', function () {
    nav.classList.toggle('scrolled', window.scrollY > 80);
  }, { passive: true });

  // ── Page fade in ─────────────────────────────────────────────────────────
  gsap.from(document.body, { opacity: 0, duration: 0.5, ease: 'power2.out' });

})();
