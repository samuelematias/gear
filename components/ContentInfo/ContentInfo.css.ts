import { style } from "@vanilla-extract/css";
import { themeVars } from "styles/theme.css";
import { tokens } from "styles/tokens.css";
import { responsiveStyle } from "styles/utils";

export const root = style({
  position: "relative",
  marginTop: "auto",
  paddingTop: tokens.spacing.xxl,
  paddingBottom: tokens.spacing.xxl,
  paddingRight: tokens.spacing.md,
  paddingLeft: tokens.spacing.md,
  backgroundColor: themeVars.color.pageFaint,
});

export const container = style({
  maxWidth: tokens.maxWidth.md,
  margin: "0 auto",
  display: "grid",
  rowGap: tokens.spacing.lg,
  ...responsiveStyle({
    sm: {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    md: {
      gridTemplateColumns: "repeat(3, 1fr)",
    },
  }),
});

export const links = style({
  display: "grid",
  rowGap: tokens.spacing.sm,
});

export const copy = style({
  gridColumn: "1 / -1",
  paddingTop: tokens.spacing.lg,
  borderTop: `1px solid ${themeVars.color.border}`,
});
