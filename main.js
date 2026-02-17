(() => {
  "use strict";

  // ── Intersection Observer: fade-in on scroll ──
  const fadeElements = document.querySelectorAll(".fade-in");

  const fadeObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (!entry.isIntersecting) return;

        const delay = entry.target.closest(".card") || entry.target.closest(".feature-item")
          ? index * 120
          : 0;

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

  // ── Card hover glow effect (follows mouse) ──
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty("--mouse-x", x + "%");
      card.style.setProperty("--mouse-y", y + "%");
    });
  });
})();
