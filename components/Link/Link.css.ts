import { style } from "@vanilla-extract/css";
import { themeVars } from "styles/theme.css";

export const root = style({
  color: "inherit",
  textDecoration: `2px solid ${themeVars.color.highlight}`,
});
