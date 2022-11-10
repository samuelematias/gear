import Link from "next/link";
import { useRouter } from "next/router";
import { Twitter, Instagram } from "react-feather";
import { motion } from "framer-motion";
import * as styles from "./Banner.css";

const Banner = () => {
  const router = useRouter();
  return (
    <header className={styles.root}>
      <nav className={styles.nav}>
        <div className={styles.group}>
          <Link href="/">
            <a
              className={styles.anchor}
              aria-current={router.pathname === "/" ? "page" : undefined}
            >
              {router.pathname === "/" ? (
                <motion.span
                  layoutId="highlight"
                  className={styles.highlight}
                />
              ) : null}
              Home
            </a>
          </Link>
          <Link href="/posts">
            <a
              className={styles.anchor}
              aria-current={router.pathname === "/posts" ? "page" : undefined}
            >
              {router.pathname === "/posts" ? (
                <motion.span
                  layoutId="highlight"
                  className={styles.highlight}
                />
              ) : null}
              Posts
            </a>
          </Link>
          <Link href="/everyday-carry">
            <a
              className={styles.anchor}
              aria-current={
                router.pathname === "/everyday-carry" ? "page" : undefined
              }
            >
              {router.pathname === "/everyday-carry" ? (
                <motion.span
                  layoutId="highlight"
                  className={styles.highlight}
                />
              ) : null}
              EDC
            </a>
          </Link>
        </div>

        <div className={styles.group}>
          <a
            href="https://www.instagram.com/alexcarp"
            className={styles.anchor}
          >
            <Instagram width=".95em" />
          </a>
          <a href="https://twitter.com/hybrid_alex" className={styles.anchor}>
            <Twitter width=".95em" />
          </a>
        </div>
      </nav>
    </header>
  );
};

export { Banner };
