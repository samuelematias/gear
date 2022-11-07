import { Twitter, Facebook, Link } from "react-feather";
import { Tooltip } from "components/Tooltip";
import * as styles from "./SocialShare.css";

const SocialShare = () => {
  return (
    <div className={styles.root}>
      <Tooltip content="Twitter">
        <button className={styles.item}>
          <Twitter width=".95em" />
        </button>
      </Tooltip>
      <Tooltip content="Facebook">
        <button className={styles.item}>
          <Facebook width=".95em" />
        </button>
      </Tooltip>
      <Tooltip content="Copy link">
        <button className={styles.item}>
          <Link width=".95em" />
        </button>
      </Tooltip>
    </div>
  );
};

export { SocialShare };
