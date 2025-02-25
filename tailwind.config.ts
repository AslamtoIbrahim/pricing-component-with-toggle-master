import type { Config } from "tailwindcss";

export default {
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
        primary: {
          from: "hsl(236, 72%, 79%)",
          to: "hsl(237, 63%, 64%)",
        },
        neutral: {
          "very-light-grayish-blue": "hsl(240, 78%, 98%)",
          "light-grayish-blue": "hsl(234, 14%, 74%)",
          "grayish-blue": "hsl(233, 13%, 49%)",
          "dark-grayish-blue": "hsl(232, 13%, 33%)",
        },
      },
      fontFamily: {
        montser: ["var(--font-geist-montserrat)", "sans-serif"],
      },
      backgroundImage: {
        gradient: "linear-gradient(to right, hsl(236, 72%, 79%), hsl(237, 63%, 64%))",
      }
    },
  },
  plugins: [],
} satisfies Config;
