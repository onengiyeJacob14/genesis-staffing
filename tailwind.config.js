/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        genesis: {
          navy: "#1E2038",
          blue: "#2A5691",
          slate: "#636D80",
          steel: "#95A5BC",
          gold: "#F6AB48",
          paper: "#FEFBFA",
        },
        fontFamily: {
  sans: ["var(--font-inter)"],
  heading: ["var(--font-playfair)"],
},
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(42,86,145,0.10), 0 20px 60px rgba(42,86,145,0.18)",
      },
    },
  },
  plugins: [],
};