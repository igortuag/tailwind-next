/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      gridTemplateColumns: {
        app: "250px 1fr"
      },

      colors: {
        rocketseat: "#8257e6"
      }
    }
  },
  plugins: []
};
