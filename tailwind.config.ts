import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#6a8bf5",
        secondary: "#444655",
        auxiliar: "#a9aabc",
        paragraph: "#94A3B8",
        title: "#FFFFFF",
      },
      backgroundImage: {
        gradient: "linear-gradient(to bottom, #040c25, #000000)",
      },
      keyframes: {
        blink: {
          '0%': { opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { opacity: '0' }
        },
        gradientAnimation: {
          '0%': { 'background-color': '#040c25' },
          '50%': { 'background-color': '#1a1d3c' },
          '100%': { 'background-color': '#040c25' }
        },
      },
      animation: {
        blink: 'blink 1s step-end infinite;',
        gradientAnimation: 'gradientAnimation 5s ease infinite;'
      }
    },
  },
  plugins: [require('tailwindcss-hero-patterns'),],
};
export default config;
