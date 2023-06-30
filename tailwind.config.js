/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // md for Mobile Screens, hw-md for bis screens where the whole
  // context fits into the screen -> scroll snapping
  theme: {
    screens: {
      md: "1130px",
    },
    extend: {
      colors: {
        navColor: "#FED17E",
      },
      cursor: {
        // cursor form cursor.cc with cc license
        paw: "url(/cursor.cur), default",
        paw2: "url(/cursor2.cur), default",
      },
      boxShadow: {
        glow: "0 0 15px 7px rgba(107, 114, 128, 0.5)",
      },
      letterSpacing: {
        wider: "0.1em",
      },
      width: {
        30: "30%",
        40: "40%",
        70: "70%",
      },
      height: {
        30: "30%",
        40: "40%",
        60: "60%",
        70: "70%",
      },
      backgroundImage: {
        darkGradient1: "linear-gradient(180deg, #111827, #273759, #111827)",
        darkGradient2: "linear-gradient(180deg, #273759, #111827, #273759)",
        gradient1: "linear-gradient(180deg, #ffffff, #e9ebf0, #ffffff)",
        gradient2: "linear-gradient(180deg, #e9ebf0, #ffffff, #e9ebf0)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide"), require("tailwind-scrollbar")],
};
