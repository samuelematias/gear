import { themeVars } from "@/styles/theme.css";
import { tokens } from "@/styles/tokens.css";
import { style } from "@vanilla-extract/css";

export const root = style({
  fontSize: tokens.fontSize.xxl,
  color: themeVars.color.brand,
});
