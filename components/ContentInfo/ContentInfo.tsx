import * as styles from "./ContentInfo.css";

export const ContentInfo = () => {
  return (
    <footer className={styles.root}>
      <ul className={styles.list}>
        <li>
          <a href="https://alexcarpenter.me">Website</a>
        </li>
        <li>
          <a href="https://instagram.com/alexcarp">Instagram</a>
        </li>
        <li>
          <a href="https://twitter.com/hybrid_alex">Twitter</a>
        </li>
      </ul>
      <p className={styles.copy}>
        &copy; Alex Carpenter {new Date().getFullYear()}
      </p>
    </footer>
  );
};
