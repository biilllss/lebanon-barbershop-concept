/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#121212",
        surface: "#1a1a1a",
        text: "#F2EDE4",
        "text-dim": "#A6A094",
        accent: "#C9A24B",
        "accent-hover": "#B8994D",
      },
      fontFamily: {
        body: ["var(--font-inter)"],
        heading: ["var(--font-playfair-display)"],
        arabic: ["var(--font-cairo)"],
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out forwards",
      },
    },
  },
  plugins: [],
};
