/**
 * Gold Mining Experts — Main JavaScript v2.0
 * - IntersectionObserver for scroll-triggered animations
 * - Stagger delays via CSS classes
 * - Animated stat counters
 * - Smooth, interruptible transitions
 * - Contact form handling
 */

(function () {
  'use strict';

  // ============================================
  // HEADER SCROLL EFFECT
  // ============================================
  const header = document.getElementById('site-header');
  let lastScroll = 0;

  function handleHeaderScroll() {
    const currentScroll = window.scrollY;
    if (currentScroll > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    lastScroll = currentScroll;
  }

  window.addEventListener('scroll', handleHeaderScroll, { passive: true });

  // ============================================
  // MOBILE MENU
  // ============================================
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-menu-link');

  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileToggle.classList.toggle('active');
      mobileMenu.classList.toggle('active');
      document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileToggle.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }

  // ============================================
  // SCROLL REVEAL (IntersectionObserver)
  // ============================================
  const revealElements = document.querySelectorAll('.reveal');
  const statCards = document.querySelectorAll('.stat-card');
  const diffItems = document.querySelectorAll('.diff-item');
  const newsItems = document.querySelectorAll('.news-item, .news-featured');

  const observerOptions = {
    root: null,
    rootMargin: '-60px 0px',
    threshold: 0.1,
  };

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach(el => revealObserver.observe(el));
  statCards.forEach(el => revealObserver.observe(el));
  diffItems.forEach(el => revealObserver.observe(el));
  newsItems.forEach(el => revealObserver.observe(el));

  // Also observe inner page components
  document.querySelectorAll('.esg-pillar, .office-card, .career-card, .project-card').forEach(el => {
    revealObserver.observe(el);
  });

  // ============================================
  // SMOOTH SCROLL for anchor links
  // ============================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    });
  });

  // ============================================
  // ANIMATED STAT COUNTERS
  // ============================================
  function animateCounter(element, target, suffix = '', prefix = '', duration = 1200) {
    const start = 0;
    const startTime = performance.now();

    function easeOut(t) {
      return 1 - Math.pow(1 - t, 3);
    }

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOut(progress);
      const current = Math.floor(start + (target - start) * easedProgress);

      element.textContent = prefix + current + suffix;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        element.textContent = prefix + target + suffix;
      }
    }

    requestAnimationFrame(update);
  }

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const text = el.textContent.trim();

        // Parse the counter values
        if (text === '5') {
          animateCounter(el, 5, '', '', 800);
        } else if (text === '7%') {
          animateCounter(el, 7, '%', '', 900);
        } else if (text === '434%') {
          animateCounter(el, 434, '%', '', 1400);
        } else if (text === '25+') {
          animateCounter(el, 25, '+', '', 1000);
        } else if (text === '40+') {
          animateCounter(el, 40, '+', '', 1200);
        }

        counterObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.stat-number').forEach(el => {
    counterObserver.observe(el);
  });

  // ============================================
  // PARALLAX EFFECT on hero (subtle, desktop only)
  // ============================================
  const heroSection = document.getElementById('hero');
  const heroBg = heroSection?.querySelector('.hero-bg img');

  if (heroSection && heroBg && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    let ticking = false;

    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrolled = window.scrollY;
          if (scrolled < window.innerHeight) {
            heroBg.style.transform = `scale(${1 + scrolled * 0.00008}) translateY(${scrolled * 0.12}px)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  // ============================================
  // CONTACT FORM HANDLING
  // ============================================
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const submitBtn = contactForm.querySelector('.cta-button');
      const originalText = submitBtn.querySelector('span').textContent;
      submitBtn.querySelector('span').textContent = 'Sending...';
      submitBtn.style.pointerEvents = 'none';
      
      // Simulate form submission
      setTimeout(() => {
        submitBtn.querySelector('span').textContent = 'Message Sent ✓';
        submitBtn.style.background = 'var(--gold-500)';
        
        setTimeout(() => {
          submitBtn.querySelector('span').textContent = originalText;
          submitBtn.style.background = '';
          submitBtn.style.pointerEvents = '';
          contactForm.reset();
        }, 2500);
      }, 1000);
    });
  }

  // ============================================
  // INITIALIZE
  // ============================================
  handleHeaderScroll();

})();
