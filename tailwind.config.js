import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Onest Variable", ...defaultTheme.fontFamily.sans],
        audiowide: ['"Audiowide"', "system-ui"],
      },
    },
  },
  plugins: [],
};
