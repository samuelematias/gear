import { tokens } from "@/styles/tokens.css";
import { themeVars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const root = style({
  position: "sticky",
  top: 0,
  zIndex: 1,
  width: "100%",
  backgroundColor: "rgba(243, 242, 243, 0.75)",
  padding: tokens.spacing.md,
  backdropFilter: "blur(10px)",
  display: "flex",
  alignItems: "center",
  gap: tokens.spacing.md,
  "@media": {
    "screen and (min-width: 960px)": {
      writingMode: "vertical-rl",
      left: 0,
      position: "fixed",
      width: "3rem",
      height: "100%",
    },
  },
});

export const anchor = style({
  display: "block",
  width: "1.5rem",
  height: "1.5rem",
  backgroundColor: "#f30",
  borderRadius: "9999px",
});

export const description = style({
  color: themeVars.color.foregroundSecondary,
});
