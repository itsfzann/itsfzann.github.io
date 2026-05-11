// ANIMATION
const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

hiddenElements.forEach((el) => {
  observer.observe(el);
});

/* =========================
   ACTIVE NAV LINK (SPA)
========================= */
const navLinks = document.querySelectorAll("nav a[href^='#']");
const sections = document.querySelectorAll("section[id]");

function updateActiveLink() {
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (window.scrollY >= sectionTop - 150) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", updateActiveLink);
document.addEventListener("DOMContentLoaded", updateActiveLink);

/* =========================
   SMOOTH SCROLL BEHAVIOR
========================= */
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    const href = link.getAttribute("href");
    if (href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        // Update active link immediately
        setTimeout(updateActiveLink, 100);
      }
    }
  });
});

/* =========================
   DARK MODE
========================= */

const toggleBtn = document.getElementById("theme-toggle");

/* LOAD THEME */
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");

  if (toggleBtn) {
    toggleBtn.textContent = "☀️";
  }
}

/* TOGGLE */
if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    const darkMode = document.body.classList.contains("dark-mode");

    if (darkMode) {
      localStorage.setItem("theme", "dark");
      toggleBtn.textContent = "☀️";
    } else {
      localStorage.setItem("theme", "light");
      toggleBtn.textContent = "🌙";
    }
  });
}

window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("scrolled", window.scrollY > 50);
});
