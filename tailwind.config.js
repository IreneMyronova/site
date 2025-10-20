/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // ← it's critical
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,jsx,ts,tsx,html}",
  ],
  theme: {
    extend: {
      screens: { mid: { raw: '(min-width: 361px) and (min-height: 741px)' } },
    },
  },
  plugins: [],
}


