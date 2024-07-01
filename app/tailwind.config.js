/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens:{
      zfold: "344px",
      se: "375px",
      xr: "414px",
      tw_pro: "390px",
      fo_pro: "430px",
      pixel: "412px",
      s8: "360px",
      s20: "412px",
      ipad_mini: "768px",
      ipad: "820px",
      ipad_pro: "1024px",
      surf: "912px",
      asus: "853px",
      A51: "412px",
      nestHub: "1024px",
      nestHubMax: "1280px",
      desk: "1440px",
      desk_ii: "1920px"
    },
    extend: {},
  },
  plugins: [],
}

