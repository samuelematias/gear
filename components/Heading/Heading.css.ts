import { tokens } from "@/styles/tokens.css";
import { styleVariants } from "@vanilla-extract/css";

export const root = styleVariants({
  sm: { fontSize: tokens.fontSize.sm },
  md: { fontSize: tokens.fontSize.md },
  lg: { fontSize: tokens.fontSize.lg },
  xl: { fontSize: tokens.fontSize.xl },
});
