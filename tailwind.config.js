/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(81.62deg, #2870EA 8.72%, #1B4AEF 85.01%)",
        "about-card1": "linear-gradient(135deg, #79F1A4 0%, #0E5CAD 100%)",
        "about-card2":
          "linear-gradient(135.73deg, #FF9865 0%, #EF3031 110.55%)",
      },
    },
  },
  plugins: [],
};
