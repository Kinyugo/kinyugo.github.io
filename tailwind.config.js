module.exports = {
  content: [
    "./_drafts/**/*.html",
    "./_includes/**/*.html",
    "./_layouts/**/*.html",
    "./_posts/*.md",
    "./*.md",
    "./*.html",
  ],
  theme: {
    extend: {
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
