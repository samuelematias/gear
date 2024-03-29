import { style } from "@vanilla-extract/css";
import { tokens } from "styles/tokens.css";
import { responsiveStyle } from "styles/utils";

export const root = style({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gridTemplateRows: "1fr 1fr",
  ...responsiveStyle({
    sm: {
      gap: tokens.spacing.sm
    },
    md: {
      gap: tokens.spacing.md
    }
  })
});

export const item = style({
  position: "relative",
  display: "grid",
});

export const primary = style({
  gridColumn: 1,
  gridRow: "span 2",
});

export const secondary = style({
  gridColumn: 2,
  gridRow: 1,
});

export const tertiary = style({
  gridColumn: 2,
  gridRow: 2,
});
