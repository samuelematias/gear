import { createGlobalTheme } from "@vanilla-extract/css";
import { slate, grass } from "@radix-ui/colors";

export const themeVars = createGlobalTheme(":root", {
  color: {
    page: slate.slate1,
    foreground: slate.slate12,
    foregroundAction: grass.grass1,
    foregroundNeutral: slate.slate10,
    surface: slate.slate2,
    borderNeutral: slate.slate3,
    highlight: grass.grass11,
    action: grass.grass11,
  },
});
