import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import * as styles from "./Banner.css";

const Banner = () => {
  const router = useRouter();
  return (
    <header className={styles.root}>
      <nav className={styles.nav}>
        <Link href="/">
          <a
            className={styles.anchor}
            aria-current={router.pathname === "/" ? "page" : undefined}
          >
            {router.pathname === "/" ? (
              <motion.span layoutId="highlight" className={styles.highlight} />
            ) : null}
            Index
          </a>
        </Link>
        <Link href="/posts">
          <a
            className={styles.anchor}
            aria-current={router.pathname === "/posts" ? "page" : undefined}
          >
            {router.pathname === "/posts" ? (
              <motion.span layoutId="highlight" className={styles.highlight} />
            ) : null}
            Posts
          </a>
        </Link>
      </nav>
    </header>
  );
};

export { Banner };
