import { tokens } from "@/styles/tokens.css";
import { themeVars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const root = style({
  width: "100%",
  maxWidth: tokens.maxWidth.md,
  marginInline: "auto",
  paddingBlock: tokens.spacing.xl,
});

export const anchor = style({
  fontVariationSettings: "'wght' 500",
});

export const description = style({
  color: themeVars.color.foregroundSecondary,
});
