import { Text } from "components/Text";
import * as styles from "./NewsletterForm.css";

const NewsletterForm = () => {
  return (
    <form
      className={styles.root}
      action="https://buttondown.email/api/emails/embed-subscribe/alexcarpenter"
      method="post"
      target="popupwindow"
      // onsubmit="window.open('https://buttondown.email/alexcarpenter', 'popupwindow')"
    >
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="bd-email">
          Enter your email
        </label>
        <input
          className={styles.input}
          type="email"
          name="email"
          id="bd-email"
        />
      </div>
      <div className={styles.submit}>
        <input className={styles.button} type="submit" value="Subscribe" />
      </div>
      <div className={styles.helpText}>
        <Text fontSize="sm" color="foregroundNeutral">
          Pure information and no spam. Unsubscribe any time
        </Text>
      </div>
    </form>
  );
};

export { NewsletterForm };
