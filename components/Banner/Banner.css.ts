import { tokens } from "@/styles/tokens.css";
import { themeVars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const root = style({
  marginBottom: tokens.spacing.xl,
});

export const description = style({
  fontFamily: tokens.font.mono,
  // fontSize: tokens.fontSize.sm,
  color: themeVars.color.foregroundSecondary,
});
