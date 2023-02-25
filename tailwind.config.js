module.exports = {
  content: [
    "./_drafts/**/*.html",
    "./_includes/**/*.html",
    "./_layouts/**/*.html",
    "./_posts/*.md",
    "./*.md",
    "./*.html",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "smoky-black": "#1e2022",
      },
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        sans: ["Raleway", "sans-serif"],
        serif: ["Lora", "serif"],
        body: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
