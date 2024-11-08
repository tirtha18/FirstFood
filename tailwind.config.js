/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      heading: ['"Playfair Display"', "serif"],
      text: ["Lora", "serif"],
      allura: ["Allura"],
    },
    extend: {},
    
  },
  plugins: [],
};
