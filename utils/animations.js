import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const fadeInUp = {
  initial: { y: 60, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const fadeInScale = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { duration: 0.5, ease: "easeOut" }
};

export const rotateIn = {
  initial: { rotate: -180, scale: 0, opacity: 0 },
  animate: { rotate: 0, scale: 1, opacity: 1 },
  transition: { duration: 0.5, ease: "easeOut" }
};

export const slideIn = (direction, delay = 0) => ({
  initial: {
    x: direction === 'left' ? -100 : direction === 'right' ? 100 : 0,
    y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
    opacity: 0
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      delay,
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
});

export const floating = {
  initial: { y: 0 },
  animate: { y: -20 },
  transition: { duration: 2, ease: 'power1.inOut', yoyo: true, repeat: -1 }
};

export const hoverCard = {
  initial: { '--mouse-x': '50%', '--mouse-y': '50%' },
  animate: { '--mouse-x': '50%', '--mouse-y': '50%' },
  transition: { duration: 0.3, ease: 'power2.out' }
};

export const initGSAPAnimations = () => {
  // Parallax effect for images
  gsap.utils.toArray('.parallax-image').forEach(image => {
    gsap.to(image, {
      yPercent: -20,
      ease: "none",
      scrollTrigger: {
        trigger: image,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });
  });

  // Reveal sections
  gsap.utils.toArray('.reveal-section').forEach(section => {
    gsap.fromTo(section,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );
  });

  // Parallax effect for hero section
  gsap.to('.parallax-bg', {
    yPercent: 50,
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero-section',
      start: 'top top',
      end: 'bottom top',
      scrub: true
    }
  });

  // Floating animation for 3D objects
  gsap.to('.floating', {
    y: -20,
    duration: 2,
    ease: 'power1.inOut',
    yoyo: true,
    repeat: -1
  });

  // Hover effect for cards
  const cards = document.querySelectorAll('.hover-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      gsap.to(card, {
        '--mouse-x': `${x}px`,
        '--mouse-y': `${y}px`,
        duration: 0.3,
        ease: 'power2.out'
      });
    });

    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        '--mouse-x': '50%',
        '--mouse-y': '50%',
        duration: 0.3,
        ease: 'power2.out'
      });
    });
  });
};
