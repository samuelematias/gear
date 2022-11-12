import type { LinkProps as NextLinkProps } from "next/link";
import NextLink from "next/link";
import { cn } from "lib/utils";
import * as styles from "./Link.css";

export type LinkProps = NextLinkProps;

const Link = (props: LinkProps) => {
  const { href, ...rest } = props;
  const isInternalLink =
    href &&
    (href.toString().startsWith("/") || href.toString().startsWith("#"));
  return (
    <NextLink href={href}>
      <a {...rest} className={cn(styles.root)} />
    </NextLink>
  );
};

export { Link };
