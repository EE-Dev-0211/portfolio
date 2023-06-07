/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      md: "1130px",
      "hw-md": { raw: "(min-height: 940px) and (min-width: 1130px)" },
    },
    extend: {
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
    },
  },
  plugins: [require("tailwind-scrollbar-hide"), require("tailwind-scrollbar")],
};
