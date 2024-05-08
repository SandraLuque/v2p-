import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        firstColor: "#d62e49",
        secondColorLight: "#222650",
        secondColor: "#211D30",
        secondColorAlt: "#151833",
        textColor: "#EEEEF2",
      },
      fontFamily: {
        sans: ["Nunito Variable", ...defaultTheme.fontFamily.sans],
        headerFont: ["Chakra Petch", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
    fontSize: {
      sm: "1.125rem",
      base: "1.25rem",
      mediun: "1.5rem",
      xl: "2rem",
      "2xl": "3.5rem",
      "3xl": "clamp(1.94rem, calc(1.69rem + 1.29vw), 2.69rem)",
      "4xl": "clamp(2.8rem, calc(2.31rem + 2.43vw), 4.2rem)",
      "5xl": "clamp(2.25rem, -1.5rem + 12vw, 5.25rem)",
    },
  },
  plugins: [],
};
