module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wave: {
          "15%": { transform: "translate(10px)" },
        },
        trans: {
          "-10%": { transform: "translate(0,10px)" },
          "0%": { transform: "translate(0,10px)" },
        },
      },
      
      animation: {
        "waving-hand": "wave 4s linear infinite ",
        "translate":"trans 1s linear infinite",
      },
      boxShadow: {
        'aksh': '0px 8px 24px rgba(149, 157, 165, 0.2)',
      }
    },
  },
  plugins: [],
  // box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
};
