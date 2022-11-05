import { style } from "@vanilla-extract/css";
import { themeVars } from "styles/theme.css";

export const content = style({
  borderBottom: "1px solid",
  borderColor: themeVars.color.borderNeutral,
});
