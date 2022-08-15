import * as React from "react";
import type { PolymorphicComponentProps } from "types";
import type { Sprinkles } from "@/styles/sprinkles.css";
import clsx from "clsx";
import { sprinkles } from "@/styles/sprinkles.css";
import * as styles from "./Heading.css";

export type HeadingProps<C extends React.ElementType> =
  PolymorphicComponentProps<
    C,
    {
      as?: "h1" | "h2" | "h3";
      fontSize?: Sprinkles["fontSize"];
      children: React.ReactNode;
    }
  >;

export const Heading = <C extends React.ElementType = "h2">({
  as,
  fontSize = "md",
  ...restProps
}: HeadingProps<C>) => {
  const component = as || "h2";
  return React.createElement(component, {
    className: clsx(sprinkles({ fontSize }), styles.root),
    ...restProps,
  });
};
