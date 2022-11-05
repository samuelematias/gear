import { style } from "@vanilla-extract/css";
import { themeVars } from "styles/theme.css";
import { tokens } from "styles/tokens.css";

export const root = style({
  padding: tokens.spacing.md,
  borderRadius: tokens.radius.md,
  backgroundColor: themeVars.color.action,
  color: themeVars.color.foregroundAction,
  cursor: "pointer",
});
