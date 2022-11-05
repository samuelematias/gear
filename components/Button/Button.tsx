import * as React from "react";
import { cn } from "lib/utils";
import * as styles from "./Button.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = ({ ...restProps }: ButtonProps) => {
  return React.createElement("button", {
    className: cn(styles.root),
    ...restProps,
  });
};

export { Button };
