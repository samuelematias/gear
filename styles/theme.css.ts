import { createGlobalTheme } from "@vanilla-extract/css";
import { tokens } from "./tokens.css";

export const themeVars = createGlobalTheme(":root", {
  color: {
    page: tokens.color.light.coyote,
    foreground: tokens.color.light.sand12,
    foregroundSecondary: tokens.color.light.sand11,
    underline: tokens.color.light.sand8,
    underlineHover: tokens.color.light.sand11,
    border: tokens.color.light.sand8,
  },
});
