import { themeVars } from "@/styles/theme.css";
import { tokens } from "@/styles/tokens.css";
import { style } from "@vanilla-extract/css";

export const root = style({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  border: "1px solid",
  borderColor: themeVars.color.border,
});

export const group = style({
  display: "grid",
  rowGap: tokens.spacing.sm,
  padding: tokens.spacing.md,
  selectors: {
    "&:nth-child(1)": {
      borderRight: "1px solid",
      borderColor: themeVars.color.border,
    },
  },
});

export const mark = style({
  display: "inline-grid",
  placeItems: "center",
  width: "1rem",
  height: "1rem",
  lineHeight: 1,
});

export const pro = style({
  color: "#4ca171",
});

export const con = style({
  color: "#da5652",
});
