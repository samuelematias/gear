import type { PolymorphicComponentProps } from "types";
import * as React from "react";
import type { Sprinkles } from "styles/sprinkles.css";
import { cn } from "lib/utils";
import { sprinkles } from "styles/sprinkles.css";
import * as styles from "./Text.css";

export type TextProps<C extends React.ElementType> = PolymorphicComponentProps<
  C,
  {
    as?: "p" | "span" | "strong" | "em" | "time" | "figcaption" | "label";
    fontSize?: Sprinkles["fontSize"];
    color?: Extract<
      Sprinkles["color"],
      "foreground" | "foregroundNeutral" | "highlight"
    >;
    letterSpacing?: Sprinkles["letterSpacing"];
    textTransform?: Sprinkles["textTransform"];
    children: React.ReactNode;
  }
>;

export const Text = <C extends React.ElementType = "p">({
  as,
  fontSize = "md",
  letterSpacing,
  textTransform,
  color = "foreground",
  ...restProps
}: TextProps<C>) => {
  const component = as || "p";
  return React.createElement(component, {
    className: cn(
      styles.root,
      sprinkles({ fontSize, letterSpacing, textTransform, color })
    ),
    ...restProps,
  });
};
