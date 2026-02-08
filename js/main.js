/* ============================================
   TUBENOTES LANDING PAGE - JavaScript
   Animations, Interactions, Dynamic Content
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ---- PRELOADER ----
  const preloader = document.getElementById('preloader');
  const preloaderText = document.querySelector('.preloader-text');
  const preloaderBarFill = document.querySelector('.preloader-bar-fill');

  const loadSteps = [
    'INITIALIZING SYSTEM...',
    'LOADING MODULES...',
    'CONFIGURING INTERFACE...',
    'READY_'
  ];

  let stepIndex = 0;
  let charIndex = 0;
  let progress = 0;

  function typeStep() {
    if (stepIndex >= loadSteps.length) {
      setTimeout(() => {
        preloader.classList.add('hidden');
        document.body.style.overflow = '';
        initAnimations();
      }, 400);
      return;
    }

    const currentText = loadSteps[stepIndex];

    if (charIndex <= currentText.length) {
      preloaderText.textContent = currentText.substring(0, charIndex);
      charIndex++;
      progress = ((stepIndex * 100 / loadSteps.length) + (charIndex / currentText.length) * (100 / loadSteps.length));
      preloaderBarFill.style.width = progress + '%';
      setTimeout(typeStep, 30 + Math.random() * 30);
    } else {
      stepIndex++;
      charIndex = 0;
      setTimeout(typeStep, 200);
    }
  }

  document.body.style.overflow = 'hidden';
  setTimeout(typeStep, 300);

  // ---- NAVBAR SCROLL ----
  const navbar = document.querySelector('.navbar');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    if (currentScroll > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    lastScroll = currentScroll;
  }, { passive: true });

  // ---- MOBILE NAV TOGGLE ----
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('open');
      navLinks.classList.toggle('open');
      document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
    });

    // Close on link click
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('open');
        navLinks.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // ---- SHOWCASE TABS ----
  const tabs = document.querySelectorAll('.showcase-tab');
  const images = document.querySelectorAll('.showcase-img');
  const captionText = document.querySelector('.showcase-caption span');

  const captions = {
    'library': 'Video Library — Organize your YouTube collection',
    'canvas': 'Canvas Mode — Infinite whiteboard for visual notes',
    'kanban': 'Kanban Board — Manage tasks with drag & drop'
  };

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;

      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      images.forEach(img => {
        img.classList.remove('active');
        if (img.dataset.tab === target) {
          img.classList.add('active');
        }
      });

      if (captionText && captions[target]) {
        captionText.textContent = captions[target];
      }
    });
  });

  // ---- GSAP SCROLL ANIMATIONS ----
  function initAnimations() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
      // Fallback: just show everything
      document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(el => {
        el.style.opacity = '1';
        el.style.transform = 'none';
      });
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    // Hero entrance
    const heroTimeline = gsap.timeline({ delay: 0.2 });
    heroTimeline
      .from('.hero-badge', { opacity: 0, y: -20, duration: 0.5 })
      .from('.hero-title', { opacity: 0, y: 30, duration: 0.6 }, '-=0.2')
      .from('.hero-subtitle', { opacity: 0, y: 20, duration: 0.5 }, '-=0.3')
      .from('.hero-actions .btn-brutal', {
        opacity: 0,
        y: 20,
        duration: 0.4,
        stagger: 0.15
      }, '-=0.2')
      .from('.hero-platforms .platform', {
        opacity: 0,
        y: 10,
        duration: 0.3,
        stagger: 0.1
      }, '-=0.2')
      .from('.scroll-indicator', { opacity: 0, duration: 0.5 }, '-=0.1');

    // Section headers
    gsap.utils.toArray('.section-header').forEach(header => {
      gsap.from(header.children, {
        scrollTrigger: {
          trigger: header,
          start: 'top 85%',
          toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.15
      });
    });

    // Feature cards stagger
    gsap.utils.toArray('.feature-card').forEach((card, i) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 88%',
          toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 40,
        duration: 0.5,
        delay: i * 0.08
      });
    });

    // Showcase frame
    gsap.from('.showcase-frame', {
      scrollTrigger: {
        trigger: '.showcase-frame',
        start: 'top 85%',
        toggleActions: 'play none none none'
      },
      opacity: 0,
      y: 50,
      scale: 0.95,
      duration: 0.8
    });

    // Stats counter animation
    gsap.utils.toArray('.stat-number').forEach(stat => {
      const target = stat.dataset.value;
      const suffix = stat.dataset.suffix || '';

      gsap.from(stat, {
        scrollTrigger: {
          trigger: stat,
          start: 'top 90%',
          toggleActions: 'play none none none'
        },
        textContent: 0,
        duration: 1.5,
        ease: 'power2.out',
        snap: { textContent: 1 },
        onUpdate: function() {
          stat.textContent = Math.ceil(this.targets()[0].textContent) + suffix;
        },
        onComplete: function() {
          stat.textContent = target + suffix;
        }
      });
    });

    // Stat items scale
    gsap.utils.toArray('.stat-item').forEach((item, i) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: 'top 90%',
          toggleActions: 'play none none none'
        },
        opacity: 0,
        scale: 0.8,
        duration: 0.5,
        delay: i * 0.12
      });
    });

    // Contributor cards
    gsap.utils.toArray('.contributor-card').forEach((card, i) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 88%',
          toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 30,
        duration: 0.5,
        delay: i * 0.15
      });
    });

    // Open source badge
    gsap.from('.open-source-badge', {
      scrollTrigger: {
        trigger: '.open-source',
        start: 'top 85%',
        toggleActions: 'play none none none'
      },
      opacity: 0,
      scale: 0.9,
      duration: 0.6
    });

    // CTA section
    gsap.from('.cta-content', {
      scrollTrigger: {
        trigger: '.cta-section',
        start: 'top 80%',
        toggleActions: 'play none none none'
      },
      opacity: 0,
      y: 40,
      duration: 0.7
    });

    // Parallax for hero shapes
    gsap.utils.toArray('.hero-shape').forEach(shape => {
      gsap.to(shape, {
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: 'bottom top',
          scrub: 1
        },
        y: -80,
        opacity: 0
      });
    });

    // Parallax for hero glows
    gsap.to('.hero-glow', {
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1
      },
      y: -60,
      opacity: 0
    });
  }

  // ---- SMOOTH SCROLL FOR NAV LINKS ----
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // ---- DYNAMIC GRID ANIMATION ----
  const heroGrid = document.querySelector('.hero-grid');
  if (heroGrid) {
    let gridPhase = 0;
    function animateGrid() {
      gridPhase += 0.005;
      const opacity = 0.4 + Math.sin(gridPhase) * 0.2;
      heroGrid.style.opacity = opacity;
      requestAnimationFrame(animateGrid);
    }
    animateGrid();
  }

  // ---- BUTTON RIPPLE-LIKE PRESS EFFECT ----
  document.querySelectorAll('.btn-brutal').forEach(btn => {
    btn.addEventListener('mousedown', () => {
      btn.style.transform = 'translate(2px, 2px)';
      btn.style.boxShadow = '1px 1px 0px ' + getComputedStyle(btn).getPropertyValue('--accent-secondary');
    });
    btn.addEventListener('mouseup', () => {
      btn.style.transform = '';
      btn.style.boxShadow = '';
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
      btn.style.boxShadow = '';
    });
  });

});
