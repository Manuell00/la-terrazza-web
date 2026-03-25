import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      colors: {
        stone: {
          50: "#fafaf9",
          100: "#f5f5f4",
          200: "#e7e5e4",
          300: "#d6d3d1",
          400: "#a8a29e",
          500: "#78716c",
          600: "#57534e",
          700: "#44403c",
          800: "#292524",
          900: "#1c1917",
        },
        cream: {
          50: "#fdf8f2",
          100: "#f7ede0",
          200: "#ead9c4",
          300: "#d9c3a6",
        },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1.5rem",
          lg: "2rem",
        },
      },
      boxShadow: {
        "card": "0 4px 24px -4px rgba(28, 25, 23, 0.10), 0 1px 4px -1px rgba(28, 25, 23, 0.06)",
        "card-hover": "0 12px 40px -8px rgba(28, 25, 23, 0.16), 0 2px 8px -2px rgba(28, 25, 23, 0.08)",
        "elevated": "0 8px 32px -6px rgba(28, 25, 23, 0.14), 0 2px 8px -2px rgba(28, 25, 23, 0.06)",
        "soft": "0 2px 16px -4px rgba(28, 25, 23, 0.08), 0 1px 4px -1px rgba(28, 25, 23, 0.04)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
