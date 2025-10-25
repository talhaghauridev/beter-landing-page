/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Space_Grotesk: ["Space_Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};
