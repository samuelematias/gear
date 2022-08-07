import { tokens } from "@/styles/tokens.css";
import { themeVars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const root = style({
  width: "100%",
  maxWidth: tokens.maxWidth.md,
  marginInline: "auto",
  paddingBlock: tokens.spacing.xl,
});

export const description = style({
  fontFamily: tokens.font.mono,
  color: themeVars.color.foregroundSecondary,
});
