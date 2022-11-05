import { style } from "@vanilla-extract/css";
import { themeVars } from "styles/theme.css";
import { tokens } from "styles/tokens.css";

export const root = style({
  backgroundColor: themeVars.color.highlight,
  borderRadius: tokens.radius.md,
});
