import { style } from "@vanilla-extract/css";
import { themeVars } from "styles/theme.css";
import { tokens } from "styles/tokens.css";

export const root = style({
  display: "grid",
  gap: tokens.spacing.md,
});

export const formGroup = style({
  display: "grid",
  gap: tokens.spacing.xs,
});

export const label = style({
  fontSize: tokens.fontSize.sm,
  color: themeVars.color.foregroundNeutral,
});

export const input = style({
  paddingRight: tokens.spacing.md,
  paddingLeft: tokens.spacing.md,
  paddingTop: tokens.spacing.sm,
  paddingBottom: tokens.spacing.sm,
  border: "1px solid",
  borderColor: themeVars.color.border,
  backgroundColor: themeVars.color.surface,
  borderRadius: tokens.radius.md,
});

export const button = style({
  backgroundColor: themeVars.color.surfaceStrong,
  color: themeVars.color.foregroundHighContrast,
  paddingRight: tokens.spacing.md,
  paddingLeft: tokens.spacing.md,
  paddingTop: tokens.spacing.sm,
  paddingBottom: tokens.spacing.sm,
  borderRadius: tokens.radius.md,
});
