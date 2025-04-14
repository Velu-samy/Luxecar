export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        tittle: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
      textColor: ['hover'], // Adds hover variants for text color
      backgroundColor: ['hover'], // Adds hover variants for background color
      borderColor: ['hover'], // Adds hover variants for border color
    },
  },
};