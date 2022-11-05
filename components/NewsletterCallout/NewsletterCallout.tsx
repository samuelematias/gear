import { Button } from "components/Button";
import * as styles from "./NewsletterCallout.css";

const NewsletterCallout = () => {
  return (
    <div className={styles.root}>
      <form
        action="https://buttondown.email/api/emails/embed-subscribe/alexcarpenter"
        method="post"
        target="popupwindow"
        onSubmit={() =>
          window.open("https://buttondown.email/alexcarpenter", "popupwindow")
        }
        className="embeddable-buttondown-form"
      >
        <label htmlFor="bd-email">Enter your email</label>
        <input type="email" name="email" id="bd-email" required />
        <Button type="submit">Subscribe</Button>
      </form>
    </div>
  );
};

export { NewsletterCallout };
