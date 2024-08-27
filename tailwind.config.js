/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      flex: {
        2: "2 1 0%", // Custom class for `flex: 2 1 0%`
      },
      keyframes: {
        slideFadeIn: {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        fadeRight: {
          "0%": { transform: "translateX(-20px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
      animation: {
        slideFadeIn: "slideFadeIn 0.5s ease-in-out forwards",
        fadeRight: "fadeRight 0.5s ease-in-out forwards",
      },
      fontFamily: {
        montserrat: ['"Montserrat"', "sans-serif"], // Add Montserrat
        opensans: ['"Open Sans"', "sans-serif"], // Add Open Sans
      },
      colors: {
        grayCustom: "rgba(153, 153, 153, 1)", // Custom gray color
      },
    },
  },
  plugins: [],
};
