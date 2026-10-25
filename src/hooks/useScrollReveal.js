import { useEffect } from 'react';

/**
 * Hook untuk memicu animasi muncul bertahap (fade + translateY 30px, delay 0.12s antar elemen)
 * menggunakan IntersectionObserver murni.
 */
export function useScrollReveal(isCoverOpened) {
  useEffect(() => {
    if (!isCoverOpened) return;

    // Hormati prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      document.querySelectorAll('.reveal-item').forEach((el) => {
        el.classList.add('is-revealed');
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const section = entry.target;
            const revealItems = section.querySelectorAll('.reveal-item');

            revealItems.forEach((item, index) => {
              item.style.transitionDelay = `${index * 0.12}s`;
              item.classList.add('is-revealed');
            });

            // Berhenti amati setelah sudah dimunculkan
            observer.unobserve(section);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    // Amati semua section utama
    const sections = document.querySelectorAll('.wedding-section');
    sections.forEach((sec) => observer.observe(sec));

    return () => {
      observer.disconnect();
    };
  }, [isCoverOpened]);
}
