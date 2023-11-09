/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./cities/*.html"],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        customBounce: {
          "100%": {
            transform: "none",
            "animation-timing-function": "cubic-bezier(0, 0, 0.2, 1)",
          },

          "0%": {
            transform: "translateX(-100%)",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
          },
        },
        customBounceDown: {
          "100%": {
            transform: "none",
            "animation-timing-function": "cubic-bezier(0, 0, 0.2, 1)",
          },

          "0%": {
            transform: "translateY(-50%)",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
          },
        },
      },

      animation: {
        customBounce: "customBounce 1.5s ease",
        customBounceDown: "customBounceDown 1s ease-in-out",
      },

      backgroundImage: {
        background: "url('/PracticeLayout_and_JS/public/img/background.gif')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [],
};
