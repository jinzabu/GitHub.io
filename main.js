(() => {
  "use strict";

  // ── Intersection Observer: fade-in on scroll ──
  const fadeElements = document.querySelectorAll(".fade-in");

  const fadeObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (!entry.isIntersecting) return;

        // Stagger delay for sibling cards
        const delay = entry.target.closest(".card") ? index * 120 : 0;

        setTimeout(() => {
          entry.target.classList.add("is-visible");
        }, delay);

        fadeObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.15 }
  );

  fadeElements.forEach((el) => fadeObserver.observe(el));

  // ── Nav background on scroll ──
  const nav = document.getElementById("nav");

  const navObserver = new IntersectionObserver(
    ([entry]) => {
      nav.classList.toggle("is-scrolled", !entry.isIntersecting);
    },
    { threshold: 0.9 }
  );

  const hero = document.querySelector(".hero");
  if (hero) navObserver.observe(hero);
})();
