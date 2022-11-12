import type { PolymorphicComponentProps } from "types";
import * as React from "react";
import type { Sprinkles } from "styles/sprinkles.css";
import { cn } from "lib/utils";
import { sprinkles } from "styles/sprinkles.css";
import * as styles from "./Heading.css";

export type HeadingProps<C extends React.ElementType> =
  PolymorphicComponentProps<
    C,
    {
      as?: "h1" | "h2" | "h3" | "h4";
      fontSize?: Sprinkles["fontSize"];
      color?: Extract<Sprinkles["color"], "foreground">;
      children: React.ReactNode;
    }
  >;

export const Heading = <C extends React.ElementType = "p">({
  as,
  fontSize = "md",
  color = "foreground",
  ...restProps
}: HeadingProps<C>) => {
  const component = as || "h2";
  return React.createElement(component, {
    className: cn(styles.root, sprinkles({ fontSize, color })),
    ...restProps,
  });
};
