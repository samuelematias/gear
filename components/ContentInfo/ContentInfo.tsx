import { Box } from "components/Box";
import { Link } from "components/Link";
import { Heading } from "components/Heading";
import { Spacer } from "components/Spacer";
import { Text } from "components/Text";
import { ThemeSelect } from "components/ThemeSelect";
import * as styles from "./ContentInfo.css";

const ContentInfo = () => {
  return (
    <footer className={styles.root}>
      <div className={styles.container}>
        <div>
          <Heading>Navigate</Heading>
          <Spacer height="md" />
          <ul className={styles.links}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/posts">Posts</Link>
            </li>
            <li>
              <Link href="/feed">Feed</Link>
            </li>
            <li>
              <Link href="/kit">Kit</Link>
            </li>
          </ul>
        </div>
        <div>
          <Heading>Connect</Heading>
          <Spacer height="md" />
          <ul className={styles.links}>
            <li>
              <Link href="https://instagram.com/alexcarp">Instagram</Link>
            </li>
            <li>
              <Link href="https://twitter.com/hybrid_alex">Twitter</Link>
            </li>
            <li>
              <Link href="mailto:im.alexcarpenter@gmail.com">Email</Link>
            </li>
          </ul>
        </div>
        <div>
          <ThemeSelect />
        </div>
        <div className={styles.copy}>
          <Text color="foregroundNeutral" fontSize="sm" fontFamily="mono">
            &copy; Alex Carpenter {new Date().getFullYear()}
          </Text>
        </div>
      </div>
    </footer>
  );
};

export { ContentInfo };
