// Function to open and close navbar
const toggleNavbar = (elementId) => {
  document.getElementById(elementId).classList.toggle("hidden");
  document.getElementById(elementId).classList.toggle("block");
};

// Sets the year within the footer
(() => {
  document.getElementById("copyright-year") &&
    (document.getElementById("copyright-year").innerHTML =
      new Date().getFullYear());
})();

// Switches the website theme
(() => {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
})();

// Switches the website theme
(() => {
  const themeToggle = document.getElementById("theme-toggle");
  const themeToggleLight = document.getElementById("theme-toggle-light");
  const themeToggleDark = document.getElementById("theme-toggle-dark");

  // Check current color scheme and update the hidden status of buttons
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    themeToggleLight.classList.remove("hidden");
    themeToggleDark.classList.add("hidden");
  } else {
    themeToggleDark.classList.remove("hidden");
    themeToggleLight.classList.add("hidden");
  }

  themeToggle.addEventListener("click", () => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      localStorage.theme = "light";
      document.documentElement.classList.remove("dark");

      themeToggleLight.classList.add("hidden");
      themeToggleDark.classList.remove("hidden");
    } else {
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");

      themeToggleDark.classList.add("hidden");
      themeToggleLight.classList.remove("hidden");
    }
  });
})();
