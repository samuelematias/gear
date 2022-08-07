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
  paddingBlock: tokens.spacing.xxl,
  // paddingBlockStart: tokens.spacing.lg,
  // paddingBlockEnd: tokens.spacing.xxl,
});

export const list = style({
  display: "grid",
  gap: tokens.spacing.sm,
});

export const copy = style({
  color: themeVars.color.foregroundSecondary,
});
