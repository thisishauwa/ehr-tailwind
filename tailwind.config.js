/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*html"],
  theme: {
    screens: {
      sm: "576px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1280px",
      // => @media (min-width: 1024px) { ... }

      xl: "1536px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1728px",
      // => @media (min-width: 1536px) { ... }
    },

    extend: {
      fontFamily: {
        sans: ["Product Sans", "sans-serif"],
      },
      colors: {
        black: "#000000",
        bluestrong: "#172263",
        bluemedium: "#284BCC",
        bluelight: "#4284EC",
        blueaccent: "#B6D7E5",
        inactive: "#5C6269",
      },
      lineHeight: {
        leadingnormal: "1.2",
      },
    },
  },
  plugins: [],
};
