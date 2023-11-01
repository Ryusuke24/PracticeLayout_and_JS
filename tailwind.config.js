/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        image: 'url("public/img/background.jpeg");',
      },
    },
  },
  plugins: [],
};
