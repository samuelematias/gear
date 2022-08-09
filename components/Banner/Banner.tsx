import Link from "next/link";
import { VisuallyHidden } from "@/components/VisuallyHidden";
import * as styles from "./Banner.css";

export const Banner = () => {
  return (
    <header className={styles.root}>
      <div className={styles.container}>
        <Link href="/">
          <a className={styles.anchor}>
            <VisuallyHidden>Alex Carpenter</VisuallyHidden>
          </a>
        </Link>
        <p className={styles.description}>
          Serial Hobbyist / 42.9634° N, 85.6681° W
        </p>
      </div>
    </header>
  );
};
