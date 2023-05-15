const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1400px",
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        lg: "1rem",
        xl: "2rem",
        "2xl": "2rem",
      },
    },
    extend: {
      fontFamily: {
        inter: ["Inter", ...defaultTheme.fontFamily.sans],
        lexend: ["Lexend", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        basic: {
          main: "hsl(var(--main) / <alpha-value>)",
          "mild-main": "hsl(var(--mild-main) / <alpha-value>)",
          "pale-main": "hsl(var(--pale-main) / <alpha-value>)",
          secondary: "hsl(var(--secondary) / <alpha-value>)",
          contrast: "hsl(var(--contrast) / <alpha-value>)",
          accent: "hsl(var(--accent) / <alpha-value>)",
          border: "hsl(var(--border) / <alpha-value>)",
          ring: "hsl(var(--ring) / <alpha-value>)",
          shadow: "hsl(var(--shadow) / <alpha-value>)",
        },
        color: {
          main: "hsl(var(--color-main) / <alpha-value>)",
          "mild-main": "hsl(var(--color-mild-main) / <alpha-value>)",
          "pale-main": "hsl(var(--pale-main) / <alpha-value>)",
          secondary: "hsl(var(--color-secondary) / <alpha-value>)",
          contrast: "hsl(var(--color-contrast) / <alpha-value>)",
          accent: "hsl(var(--color-accent) / <alpha-value>)",
          border: "hsl(var(--color-border) / <alpha-value>)",
          ring: "hsl(var(--color-ring) / <alpha-value>)",
          shadow: "hsl(var(--color-shadow) / <alpha-value>)",
        },
      },
    },
  },
  plugins: [],
};
