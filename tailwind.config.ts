import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        navActive: "var(--nav-active)",
        navInactive: "var(--nav-inactive)",
        headline: "var(--headline)",
        border: "var(--border)",
        backgroundElements: "var(--background-elements)",
        placeholderForeground: "var(--placeholder-foreground)",
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        montserrat: ['var(--font-montserrat)'],
      }
    },
  },
  plugins: [],
} satisfies Config;
