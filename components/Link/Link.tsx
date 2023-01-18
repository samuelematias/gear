import type { LinkProps as NextLinkProps } from "next/link";
import NextLink from "next/link";
import { cn } from "lib/utils";
import * as styles from "./Link.css";

export type LinkProps = NextLinkProps & {
  children: React.ReactNode;
};

const Link = (props: LinkProps) => {
  return (
    <NextLink {...props} className={cn(styles.root)}>
      {props.children}
    </NextLink>
  );
};

export { Link };
