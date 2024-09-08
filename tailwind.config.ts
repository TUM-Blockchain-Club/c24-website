import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "tbc-yellow": "#FFCB6D",
        "tbc-pink": "#E434A5",
        "tbc-blue": "#348AEB",
        "bg-hover": "#1D1D1D",
        "email-pink": "#FFCB6D",
        "email-purple": "#FFCB6D",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        "mobile-wide": {
          raw: "((max-width: 1020px) and (max-height: 620px))",
        },
      },
      transitionProperty: {
        "bg-img": "background-image",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)"],
        sans: ["var(--font-montserrat)"],
      },
    },
  },
  plugins: [],
};
export default config;
