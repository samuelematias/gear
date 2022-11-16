import { style } from "@vanilla-extract/css";
import { themeVars } from "styles/theme.css";
import { tokens } from "styles/tokens.css";

export const root = style({
  marginTop: tokens.spacing.lg,
  marginBottom: tokens.spacing.lg,
  height: 3,
  backgroundColor: themeVars.color.borderNeutral,
});
