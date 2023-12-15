/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens:{
      xxxs: "150px",
      xxs: "300px",
      xs: "468px",
      md: "992px",
      lg: "1024px",
      xl: "1440px"
    },
    extend: {},
  },
  plugins: [],
}

