import { createGlobalTheme } from "@vanilla-extract/css";

export const tokens = createGlobalTheme(":root", {
  font: {
    sans: "'Inter', sans-serif",
    serif: "'Newsreader', serif",
    mono: "'JetBrains Mono', monospace",
  },
  color: {},
  spacing: {
    none: "0",
    xs: "0.2rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "2rem",
    xl: "3rem",
    xxl: "4rem",
  },
});
