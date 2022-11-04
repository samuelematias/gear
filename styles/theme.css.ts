import { createGlobalTheme } from "@vanilla-extract/css";
import { slate, orange } from "@radix-ui/colors";

export const themeVars = createGlobalTheme(":root", {
  color: {
    page: slate.slate1,
    foreground: slate.slate12,
    foregroundNeutral: slate.slate10,
    surface: slate.slate2,
    borderNeutral: slate.slate6,
    highlight: orange.orange9,
  },
});
