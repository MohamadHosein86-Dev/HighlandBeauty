/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "sm1": { "min": "460px" },
        "sm2": { "min": "481px" },
        fontFamily: {}
      }
    },
  },
  plugins: [
  ],
}

