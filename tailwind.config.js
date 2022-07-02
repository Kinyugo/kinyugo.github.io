/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,md}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "smoky-black": "#09090A",
        sage: "#C8CC92",
        russet: "#845331",
        manatee: "#8D99AE",
        "light-yellow": "#FEFEE3",
        "pastel-pink": "#F7A9A8",
        "champagne-pink": "#EEDED2",
        "gray-web": "#7D7C7A",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        serif: ['"Noto Serif"', "serif"],
        display: ['"Cinzel Decorative"', "cursive"],
        body: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
