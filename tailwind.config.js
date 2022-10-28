/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        feldgrau: "#425F57",
        oxley: "#749F82",
        gsapple: "#A8E890",
      },
      boxShadow: {
        "inner-custom":
          "inset 4px 4px 8px #00000022, inset -4px -4px 8px #00000022",
      },
    },
  },
  plugins: [],
};
