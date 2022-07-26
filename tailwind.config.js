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
        'aksh': '0px 0px 10px rgba(100, 100, 111, 0.2)',
        'aksh2': '0px 7px 29px 0px rgba(100, 100, 111, 0.2)' ,
      },
      screens: {
        'break1': '1220px',
        'break2': '900px',
      },
    },
  },
  plugins: [],
//  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
};
