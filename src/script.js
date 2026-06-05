/* ============================================================
   Scroll Reveal Animations
   ============================================================ */
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
}, { rootMargin: "0px 0px -10% 0px", threshold: 0.05 });

document.querySelectorAll('.reveal, .reveal-stagger, .cap-row').forEach(el => io.observe(el));

/* ============================================================
   Scroll Progress Bar
   ============================================================ */
const progressBar = document.getElementById('scrollProgress');
function updateProgress() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  progressBar.style.width = progress + '%';
}
window.addEventListener('scroll', updateProgress, { passive: true });

/* ============================================================
   Active Nav Link Highlighting
   ============================================================ */
const sections = document.querySelectorAll('section[id], header.hero');
const navLinks = document.querySelectorAll('.nav-links a');

function updateActiveNav() {
  const scrollPos = window.scrollY + 150;
  let current = '';

  sections.forEach(section => {
    const top = section.offsetTop;
    const bottom = top + section.offsetHeight;
    if (scrollPos >= top && scrollPos < bottom) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === '#' + current);
  });
}
window.addEventListener('scroll', updateActiveNav, { passive: true });
updateActiveNav();

/* ============================================================
   Smooth Scroll for Nav Links
   ============================================================ */
document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', (e) => {
    const href = a.getAttribute('href');
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    }
  });
});

/* ============================================================
   Typewriter Effect for Hero Tagline
   ============================================================ */
const heroTagline = document.querySelector('.hero-tagline');
if (heroTagline && !heroTagline.classList.contains('in')) {
  // Simple character reveal effect when scrolled into view
  const tagObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        tagObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.3 });
  tagObserver.observe(heroTagline);
}

/* ============================================================
   Parallax effect on hero marks (subtle)
   ============================================================ */
const heroMarks = document.querySelector('.hero-marks');
if (heroMarks) {
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    if (scrolled < window.innerHeight) {
      heroMarks.style.transform = `translateY(${scrolled * 0.08}px)`;
      heroMarks.style.opacity = Math.max(0.2, 0.6 - scrolled * 0.002);
    }
  }, { passive: true });
}

/* ============================================================
   Counter animation for hero stats
   ============================================================ */
const statNumbers = document.querySelectorAll('.hero-stat .num');
const statObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const nums = e.target.querySelectorAll('.num');
      nums.forEach(numEl => {
        const text = numEl.textContent;
        const sup = numEl.querySelector('sup');
        const baseText = sup ? text.replace(sup.textContent || '', '') : text;
        const baseNum = parseFloat(baseText) || 0;
        if (baseNum > 0 && baseNum < 1000) {
          let current = 0;
          const step = baseNum / 40;
          const interval = setInterval(() => {
            current += step;
            if (current >= baseNum) {
              current = baseNum;
              clearInterval(interval);
            }
            const display = Number.isInteger(baseNum) ? Math.floor(current) : current.toFixed(1);
            if (sup) {
              numEl.innerHTML = display + '<sup>' + sup.textContent + '</sup>';
            } else {
              numEl.textContent = display;
            }
          }, 25);
        }
      });
      statObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.5 });
const heroStats = document.querySelector('.hero-stats');
if (heroStats) statObserver.observe(heroStats);
