import { style } from "@vanilla-extract/css";
import { themeVars } from "styles/theme.css";

export const root = style({
  color: "inherit",
  textDecoration: "underline",
  textDecorationColor: themeVars.color.border,
  textDecorationThickness: 2,
});
