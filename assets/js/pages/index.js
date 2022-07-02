// Shows a typewriter effect on the homepage
(() => {
  const siteTitle = document.getElementById("site-title");
  const text = siteTitle.innerHTML;
  const speed = 150;

  // Reset text
  siteTitle.innerHTML = "";
  siteTitle.classList.remove("invisible");

  let i = 0;
  (function typeWriter() {
    if (i < text.length) {
      siteTitle.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  })();
})();
