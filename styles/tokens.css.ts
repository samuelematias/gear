import { sand } from "@radix-ui/colors";
import { createGlobalTheme } from "@vanilla-extract/css";

export const tokens = createGlobalTheme(":root", {
  font: {
    sans: "'Inter', sans-serif",
    mono: "'JetBrains Mono', monospace",
  },
  color: {
    light: {
      coyote: "#f3f2f3",
      ...sand,
    },
  },
  fontSize: {
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
  },
  spacing: {
    none: "0",
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "2rem",
    xl: "3rem",
    xxl: "4rem",
  },
});
