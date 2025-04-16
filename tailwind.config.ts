import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/templates/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mainBgButton: "#0088FF",
        background: "#242629",
        footerTxt: "#383B3A",
        mainText: "#FFFFFF",
        DEFAULT: "hsl(var(--primary))",
        foreground: "hsl(var(--primary-foreground))",
      },
    },
    animation: {
      glow: "glow 4.9s infinite ease-in-out",
      textShadow: "textShadow 4.9s infinite ease-in-out",
    },
    keyframes: {
      textShadow: {
        "0%": { textShadow: "0 0 0px white" },
        "25%": { textShadow: "0 0 0px white" },
        "50%": { textShadow: "0 0 14px white" },
        "75%": { textShadow: "0 0 4px white" },
        "80%": { textShadow: "0 0 2px white" },
        "100%": { textShadow: "0 0 0px white" },
      },
      glow: {
        "0%": { left: "-100%" },
        "50%": { left: "150%" },
        "100%": { left: "-100%" },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
