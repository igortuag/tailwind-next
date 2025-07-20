const { keyframes } = require("framer-motion");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      gridTemplateColumns: {
        app: "minmax(18rem, 20rem) 1fr",
        profile: "max-content 1fr max-content",
        form: "minmax(7.5rem, 17,5rem) minmax(25rem, 1fr) minmax(0, 15rem)",
      },

      borderWidth: {
        6: "6px",
      },

      colors: {
        violet: {
          25: "#fcfaff",
        },
      },

      keyframes: {
        slideDownAndFade: {
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        },
        slideUpAndFade: {
          from: {
            opacity: 1,
          },
          to: {
            opacity: 0,
          },
        },
      },

      animations: {},
    },
  },
  plugins: [],
};
