/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // 👈 adjust this if your files are elsewhere
  ],
  theme: {
    extend: {},
    screens: {
      sm: "640px",
      md: "1020px", // 👈 your custom medium breakpoint
      lg: "1280px",
      xl: "1536px",
    },
  },
  plugins: [],
};