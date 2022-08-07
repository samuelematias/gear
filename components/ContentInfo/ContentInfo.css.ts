import { themeVars } from "@/styles/theme.css";
import { tokens } from "@/styles/tokens.css";
import { style } from "@vanilla-extract/css";

export const root = style({
  display: "flex",
  justifyContent: "space-between",
  gap: tokens.spacing.lg,
  width: "100%",
  maxWidth: tokens.maxWidth.md,
  marginInline: "auto",
  marginTop: tokens.spacing.xxl,
  paddingBlockStart: tokens.spacing.lg,
  paddingBlockEnd: tokens.spacing.xxl,
  borderTop: "2px solid",
  borderColor: themeVars.color.border,
});

export const list = style({
  display: "grid",
  gap: tokens.spacing.sm,
});

export const copy = style({
  fontFamily: tokens.font.mono,
  color: themeVars.color.foregroundSecondary,
});
