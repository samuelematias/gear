import { style } from "@vanilla-extract/css";
import { themeVars } from "styles/theme.css";
import { tokens } from "styles/tokens.css";

export const root = style({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: tokens.spacing.md,
  borderBottom: "1px solid",
  borderColor: themeVars.color.borderNeutral,
  paddingBlock: tokens.spacing.md,
});

export const item = style({
  display: "grid",
  // rowGap: tokens.spacing.xs,
});

export const title = style({
  fontSize: tokens.fontSize.sm,
  fontVariationSettings: "'wght' 650",
  letterSpacing: "-0.02em",
});
