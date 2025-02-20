
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        dark: {
          1: "hsl(var(--dark-1))",
          2: "hsl(var(--dark-2))",
          3: "hsl(var(--dark-3))",
          4: "hsl(var(--dark-4))",
        },
        "mid-dark": {
          1: "hsl(var(--mid-dark-1))",
          2: "hsl(var(--mid-dark-2))",
          3: "hsl(var(--mid-dark-3))",
          4: "hsl(var(--mid-dark-4))",
        },
        light: {
          1: "hsl(var(--light-1))",
          2: "hsl(var(--light-2))",
          3: "hsl(var(--light-3))",
          4: "hsl(var(--light-4))",
        },
        white: "hsl(var(--white))",
      },
      fontFamily: {
        sora: ["Sora", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
