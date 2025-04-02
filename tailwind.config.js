/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1440px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        geist: ["Geist", "sans-serif"],
      },
      colors: {
        blax: {
          50: "#f5f6f6",
          100: "#e5e7e8",
          200: "#ced1d3",
          300: "#abb0b5",
          400: "#81888f",
          500: "#666d74",
          600: "#575b63",
          700: "#4b4e53",
          800: "#424548",
          900: "#3a3c3f",
          950: "#1b1c1e",
        },
      },
    },
  },
  plugins: [],
};
