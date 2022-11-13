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
  textAlign: "center",
  display: "grid",
  rowGap: tokens.spacing.lg,
  ...responsiveStyle({
    md: {
      gridTemplateColumns: "repeat(3, 1fr)",
    },
  }),
});
