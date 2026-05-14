// ── IntersectionObserver fade-in ──────────────────
const fadeSections = document.querySelectorAll('.fade-section');

const fadeObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      fadeObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

fadeSections.forEach(s => fadeObs.observe(s));

// ── Lightbox ──────────────────────────────────────
const paintings = [
  { src: 'images/portrait.jpg',   alt: 'Bride — chalk & pencil on toned paper' },
  { src: 'images/girl-rose.jpg',  alt: 'Walking — gouache on paper' },
  { src: 'images/still-life.jpg', alt: 'Green Study — soft pastels' },
  { src: 'images/lion.jpg',       alt: 'Sovereign — acrylic on canvas' },
  { src: 'images/landscape.jpg',  alt: 'Somewhere Quieter — acrylic on canvas' },
];

let current = 0;
const lightbox = document.getElementById('lightbox');
const lbImg    = document.getElementById('lb-img');
const lbClose  = document.getElementById('lb-close');
const lbPrev   = document.getElementById('lb-prev');
const lbNext   = document.getElementById('lb-next');

function openLightbox(index) {
  current = index;
  lbImg.src = paintings[current].src;
  lbImg.alt = paintings[current].alt;
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
  lbClose.focus();
}

function closeLightbox() {
  lightbox.classList.remove('active');
  document.body.style.overflow = '';
}

function navigate(dir) {
  current = (current + dir + paintings.length) % paintings.length;
  lbImg.src = paintings[current].src;
  lbImg.alt = paintings[current].alt;
}

document.querySelectorAll('.painting-img').forEach(img => {
  img.addEventListener('click', () => openLightbox(parseInt(img.dataset.index, 10)));
});

lbClose.addEventListener('click', closeLightbox);
lbPrev.addEventListener('click', () => navigate(-1));
lbNext.addEventListener('click', () => navigate(1));

// Close on clicking the dark overlay (not the image)
lightbox.addEventListener('click', e => {
  if (e.target === lightbox) closeLightbox();
});

document.addEventListener('keydown', e => {
  if (!lightbox.classList.contains('active')) return;
  if (e.key === 'Escape')      closeLightbox();
  if (e.key === 'ArrowLeft')   navigate(-1);
  if (e.key === 'ArrowRight')  navigate(1);
});
