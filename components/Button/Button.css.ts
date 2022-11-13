import { style } from "@vanilla-extract/css";
import { themeVars } from "styles/theme.css";
import { tokens } from "styles/tokens.css";

export const root = style({
  padding: tokens.spacing.sm,
  backgroundColor: themeVars.color.surfaceStrong,
  color: themeVars.color.foregroundHighContrast,
  borderRadius: tokens.radius.md,
  border: "1px solid transparent",
});
