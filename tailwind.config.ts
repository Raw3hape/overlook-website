import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        gold: {
          500: "#FFB800",
          600: "#E6A600",
        },
        dark: {
          900: "#0A0A0A",
          800: "#121212",
          700: "#1A1A1A",
        }
      },
      fontFamily: {
        sans: ["SF Pro Display", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.5s ease-out",
        "fade-in": "fadeIn 0.5s ease-out",
        "slide-in": "slideIn 0.5s ease-out",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideIn: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;