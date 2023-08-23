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
      md: "1100px",
    },
    extend: {
      animation: {
        tilt: "tilt 10s infinite linear",
        fillAndEmpty: "fillAndEmpty 4.5s 3.5s infinite",
        text: "text 5s ease infinite",
        slide: "slide 5s linear infinite",
        mobileSlide: "mobileSlide 5s linear infinite",
      },
      keyframes: {
        slide: {
          "0%, 100%": {
            "margin-top": "0px",
          },
          "5%, 33%": {
            "margin-top": "-82px",
          },
          "38%, 66%": {
            "margin-top": "-165px",
          },
          "71%, 99.99%": {
            "margin-top": "0px",
          },
        },
        mobileSlide: {
          "0%, 100%": {
            "margin-top": "1px",
          },
          "5%, 33%": {
            "margin-top": "-87px",
          },
          "38%, 66%": {
            "margin-top": "-173px",
          },
          "71%, 99.99%": {
            "margin-top": "0px",
          },
        },
        text: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        fillAndEmpty: {
          "0%, 100%": {
            opacity: 0.5,
            transform: "scale(1)",
          },
          "50%": {
            opacity: 1,
            transform: "scale(1.1)",
          },
        },
        tilt: {
          "0%, 50%, 100%": {
            transform: "rotate(0deg)",
          },
          "25%": {
            transform: "rotate(1deg)",
          },
          "75%": {
            transform: "rotate(-1deg)",
          },
        },
        fadeInLeft: {
          "0%": {
            opacity: 0,
            transform: "translateX(-100%)",
          },
          "100%": {
            opacity: 1,
            transform: "translateX(0)",
          },
        },
        fadeIn: {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
      },
      margin: {
        7.5: "1.6rem",
      },
      fontSize: {
        xxs: "0.5rem",
      },
      colors: {
        navColor: "#FED17E",
        cobaltBlue: "#2c3868",
      },
      cursor: {
        // cursor form cursor.cc with cc license
        paw: "url(/cursor.cur), default",
        paw2: "url(/cursor2.cur), default",
        paw3: "url(/cursorClick.cur), default",
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
      },
      fontFamily: {
        boo: ["var(--font-boo)"],
      },
    },
  },
  variants: {
    extend: {
      animation: ["motion-safe"],
    },
  },
  plugins: [require("tailwind-scrollbar-hide"), require("tailwind-scrollbar")],
};
