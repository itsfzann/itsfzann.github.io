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
