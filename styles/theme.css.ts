import { createGlobalTheme } from "@vanilla-extract/css";
import { sand } from "@radix-ui/colors";

export const themeVars = createGlobalTheme(":root", {
  color: {
    brand: "#f30",
    page: "#f3f2f3",
    foreground: sand.sand12,
    foregroundSecondary: sand.sand11,
    underline: sand.sand8,
    underlineHover: sand.sand11,
    border: sand.sand8,
  },
});
