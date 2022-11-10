import { ThemeSelect } from "components/ThemeSelect";
import * as styles from "./ContentInfo.css";

const ContentInfo = () => {
  return (
    <footer className={styles.root}>
      <div></div>
      <div>
        &ldquo;I ain&apos;t here for a long time, I&apos;m here for a good
        time.&rdquo;
      </div>
      <div>
        <ThemeSelect />
      </div>
    </footer>
  );
};

export { ContentInfo };
