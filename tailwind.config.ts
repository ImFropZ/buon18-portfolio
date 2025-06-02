import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#98CB33",
        secondary: "#0D131A",
        "primary-dark": "#005cb8",
        "primary-darker": "#042782",
        "primary-light": "#6CF",
      },
      fontFamily: {
        primary: ["Kantumruy Pro", "CabinetGrotesk", "sans-serif"],
        poppins: ["Poppins", "CabinetGrotesk", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      content: {
        check: "url('/check.svg')",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
