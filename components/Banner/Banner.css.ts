import { tokens } from "@/styles/tokens.css";
import { themeVars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";

export const root = style({
  padding: tokens.spacing.md,
  "@media": {
    "(max-width: 959px)": {
      marginInline: calc.multiply(tokens.spacing.md, -1),
      marginBlockEnd: tokens.spacing.md,
    },
    "screen and (min-width: 960px)": {
      writingMode: "vertical-rl",
      left: 0,
      position: "fixed",
      width: "3rem",
      height: "100%",
      zIndex: 1,
      backgroundColor: "rgba(243, 242, 243, 0.75)",
      backdropFilter: "blur(10px)",
    },
  },
});

export const container = style({
  marginInline: "auto",
  marginBottom: "auto",
  width: "100%",
  maxWidth: tokens.maxWidth.md,
  display: "flex",
  alignItems: "center",
  gap: tokens.spacing.md,
});

export const anchor = style({
  display: "block",
  width: "1.5rem",
  height: "1.5rem",
  backgroundColor: "#f30",
  borderRadius: "9999px",
  flexShrink: 0,
});

export const description = style({
  color: themeVars.color.foregroundSecondary,
});
