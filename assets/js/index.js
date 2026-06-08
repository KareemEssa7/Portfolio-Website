// Load dark mode preference from localStorage
const savedDarkMode = localStorage.getItem("darkMode");
if (savedDarkMode === "true") {
  document.querySelector("html").classList.add("dark");
}

// Dark Mode Toggle
const darkModeToggle = document.getElementById("theme-toggle-button");

darkModeToggle.addEventListener("click", () => {
  document.querySelector("html").classList.toggle("dark");
  // Save the dark mode state to localStorage
  const isDarkMode = document.querySelector("html").classList.contains("dark");
  localStorage.setItem("darkMode", isDarkMode);
});

// Active Link Highlight Scroll Spy
const navLinks = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (
      scrollY >= sectionTop - 100 &&
      scrollY < sectionTop + sectionHeight - 100
    ) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
});

// ====================== Portfolio Filter NavTabs =========================
const portfolioFilters = document.querySelectorAll(".portfolio-filter");
const portfolioItems = document.querySelectorAll(".portfolio-item");

portfolioFilters.forEach((filter) => {
  filter.addEventListener("click", () => {
    portfolioFilters.forEach((filter2) => {
      filter2.classList.add(
        "bg-white",
        "dark:bg-slate-800",
        "text-slate-600",
        "dark:text-slate-300",
        "border",
        "border-slate-300",
        "dark:border-slate-700",
      );
      filter2.classList.remove(
        "active",
        "bg-linear-to-r",
        "from-primary",
        "to-secondary",
        "text-white",
        "shadow-lg",
        "shadow-primary/50",
      );
    });
    filter.classList.add(
      "active",
      "bg-linear-to-r",
      "from-primary",
      "to-secondary",
      "text-white",
      "shadow-lg",
      "shadow-primary/50",
    );
    filter.classList.remove(
      "bg-white",
      "dark:bg-slate-800",
      "text-slate-600",
      "dark:text-slate-300",
      "border",
      "border-slate-300",
      "dark:border-slate-700",
    );
    portfolioItems.forEach((item) => {
      item.classList.add("hidden");
      if (filter.getAttribute("data-filter") === "all") {
        item.classList.remove("hidden");
      } else if (
        filter.getAttribute("data-filter") ===
        item.getAttribute("data-category")
      ) {
        item.classList.remove("hidden");
      }
    });
  });
});

// ====================== Testimonial Carousel =========================
const carousel = document.getElementById("testimonials-carousel");
const prevBtn = document.getElementById("prev-testimonial");
const nextBtn = document.getElementById("next-testimonial");
const indicators = document.querySelectorAll(".carousel-indicator");
const testimonialCards = document.querySelectorAll(".testimonial-card");

let currentIndex = 0;

function updateCarousel() {
  const cardWidth = testimonialCards[0].offsetWidth;
  carousel.style.transform = `translateX(${currentIndex * cardWidth}px)`;
}

nextBtn.addEventListener("click", () => {
  if (currentIndex < testimonialCards.length - 3) {
    currentIndex++;
    updateCarousel();
    updateIndicators();
  } else if (currentIndex === testimonialCards.length - 3) {
    currentIndex = 0;
    updateCarousel();
    updateIndicators();
  }
});
prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
    updateIndicators();
  } else if (currentIndex === 0) {
    currentIndex = testimonialCards.length - 3;
    updateCarousel();
    updateIndicators();
  }
});

// ====================== Testimonial Carousel Dots Navigation =========================
function updateIndicators() {
  indicators.forEach((indicator) => {
    indicator.classList.remove("active", "bg-accent", "scale-125");
    indicator.classList.add("bg-slate-400", "dark:bg-slate-600");
  });

  indicators[currentIndex].classList.add("active", "bg-accent", "scale-125");
  indicators[currentIndex].classList.remove(
    "bg-slate-400",
    "dark:bg-slate-600",
  );
}
indicators.forEach((indicator, index) => {
  indicator.addEventListener("click", () => {
    currentIndex = index;
    updateCarousel();
    updateIndicators();
  });
});

// ====================== Scroll To Top Animations =========================
const scrollTopBtn = document.getElementById("scroll-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollTopBtn.classList.remove("opacity-0", "invisible");
    scrollTopBtn.classList.add("opacity-100", "visible");
  } else {
    scrollTopBtn.classList.add("opacity-0", "invisible");
    scrollTopBtn.classList.remove("opacity-100", "visible");
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// ====================== Mobile Menu Toggle =========================
const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const mobileMenu = document.querySelector(".nav-links");

mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});

// ====================== Gear Icon Menu Toggle =========================
const gearIcon = document.getElementById("settings-toggle");
const settingsSidebar = document.getElementById("settings-sidebar");
const closeSettingsBtn = document.getElementById("close-settings");

gearIcon.addEventListener("click", () => {
  settingsSidebar.classList.remove("translate-x-full");
  gearIcon.style.right = "20rem";
});

closeSettingsBtn.addEventListener("click", () => {
  settingsSidebar.classList.add("translate-x-full");
  gearIcon.style.right = "0rem";
});
