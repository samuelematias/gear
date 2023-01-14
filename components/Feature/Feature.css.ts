import { style } from "@vanilla-extract/css";
import { slate } from "@radix-ui/colors";
import { themeVars } from "styles/theme.css";
import { tokens } from "styles/tokens.css";
import { responsiveStyle } from "styles/utils";

export const root = style({
  position: "relative",
  display: "grid",
  width: "100%",
  aspectRatio: "16/9",
  borderRadius: tokens.radius.lg,
  overflow: "hidden",
  ":focus": {
    outline: "transparent",
  },
  ":focus-visible": {
    outlineWidth: "2px",
    outlineStyle: "solid",
    outlineOffset: "2px",
    outlineColor: themeVars.color.outline,
  },
});

export const image = style({
  gridArea: "1/1",
  objectFit: "cover",
});

export const overlay = style({
  position: "relative",
  gridArea: "1/1",
  backgroundImage:
    "linear-gradient(to right top, rgba(0, 0, 0, .95), rgba(0, 0, 0, .25))",
  opacity: 0.9,
  transition: "opacity ease-in-out 0.2s",
  selectors: {
    [`${root}:hover &`]: {
      opacity: 1,
    },
  },
});

export const content = style({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  gridArea: "1/1",
  ...responsiveStyle({
    sm: {
      padding: tokens.spacing.md,
    },
    md: {
      padding: tokens.spacing.xl,
    },
  }),
});

export const heading = style({
  color: slate.slate1,
  "::before": {
    content: "",
    marginBottom: tokens.spacing.md,
    display: "block",
    width: "1.2rem",
    height: "1.2rem",
    backgroundColor: themeVars.color.highlight,
    borderRadius: tokens.radius.full,
  },
});

export const description = style({
  color: slate.slate7,
});
