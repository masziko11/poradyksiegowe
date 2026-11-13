// Bezpośredni link do zakupu e-booka w Naffy.
const CHECKOUT_URL = "https://www.naffy.io/mateusz-kolodziejski-chfzi/ksef-w-malej-firmie-tc6";

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".site-nav");

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const open = menuButton.getAttribute("aria-expanded") !== "true";
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.setAttribute("aria-label", open ? "Zamknij menu" : "Otwórz menu");
    navigation.classList.toggle("is-open", open);
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Otwórz menu");
      navigation.classList.remove("is-open");
    });
  });
}

const checkout = document.querySelector("[data-checkout]");
const checkoutHint = document.querySelector("[data-checkout-hint]");
if (CHECKOUT_URL && checkout) {
  checkout.href = CHECKOUT_URL;
  checkout.target = "_self";
  checkout.rel = "noopener noreferrer";
  checkout.textContent = "Kup teraz ↗";
  checkout.removeAttribute("aria-disabled");
  checkoutHint.hidden = true;
} else if (checkout) {
  checkout.addEventListener("click", (event) => event.preventDefault());
}

const year = document.querySelector("[data-year]");
if (year) year.textContent = new Date().getFullYear();

const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}
