import { createGlobalTheme } from "@vanilla-extract/css";

export const tokens = createGlobalTheme(":root", {
  font: {
    sans: "'Inter var', sans-serif",
  },
  fontSize: {
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    xxl: "1.75rem",
  },
  spacing: {
    none: "0",
    auto: "auto",
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "2rem",
    xl: "3rem",
    xxl: "4rem",
  },
  radius: {
    md: "4px",
    sm: "2px",
  },
  letterSpacing: {
    tight: "-.02em",
    wide: ".02em",
  },
  maxWidth: {
    md: "48rem",
    lg: "64rem",
    text: "68ch",
  },
});
