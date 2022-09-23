/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*html"],
  theme: {
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
    },
  },
  plugins: [],
};
