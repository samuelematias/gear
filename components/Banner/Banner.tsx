import * as styles from "./Banner.css";

export const Banner = () => {
  return (
    <header className={styles.root}>
      <h1>Alex Carpenter</h1>
      <p className={styles.description}>
        Serial Hobbyist / 42.9634° N, 85.6681° W
      </p>
    </header>
  );
};
