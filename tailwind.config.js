import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#eb5939",
        secondary: "#b7ab98",
        bgBody: "#101010",
        codGray: "#0d0d0d",
        codGray900: "#262626",
        codGray800: "#595959",
      },
      fontFamily: {
        sans: ["Onest Variable", ...defaultTheme.fontFamily.sans],
        beVietnam: ["Be Vietnam Pro", "sans-serif"],
      },
      backgroundImage: {
        "avatar-purple": "url('/avatar-image-purple')",
      },
    },
  },
  plugins: [],
};
