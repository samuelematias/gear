import type { PolymorphicComponentProps } from "types";
import * as React from "react";
import type { Sprinkles } from "@/styles/sprinkles.css";
import clsx from "clsx";
import { sprinkles } from "@/styles/sprinkles.css";

export type TextProps<C extends React.ElementType> = PolymorphicComponentProps<
  C,
  {
    as?: "p" | "strong" | "em" | "time";
    fontSize?: Sprinkles["fontSize"];
    color?: "foreground" | "foregroundSecondary" | "brand";
    children: React.ReactNode;
  }
>;

export const Text = <C extends React.ElementType = "p">({
  as,
  fontSize = "md",
  color = "foreground",
  ...restProps
}: TextProps<C>) => {
  const component = as || "p";
  return React.createElement(component, {
    className: clsx(sprinkles({ fontSize, color })),
    ...restProps,
  });
};
