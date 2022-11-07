import * as React from "react";
import { useRouter } from "next/router";
import { Twitter, Facebook, Link } from "react-feather";
import { Tooltip } from "components/Tooltip";
import * as styles from "./SocialShare.css";

const SocialShare = () => {
  const { asPath } = useRouter();

  const handleCopy = () => {
    navigator.clipboard.writeText(`https://gear.alexcarpenter.me${asPath}`);
  };

  return (
    <div className={styles.root}>
      <Tooltip content="Twitter">
        <a
          href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
            `https://gear.alexcarpenter.me${asPath}`
          )}`}
          className={styles.item}
        >
          <Twitter width=".95em" />
        </a>
      </Tooltip>
      <Tooltip content="Facebook">
        <a
          href={`https://www.facebook.com/sharer.php?u=${encodeURIComponent(
            `https://gear.alexcarpenter.me${asPath}`
          )}`}
          className={styles.item}
        >
          <Facebook width=".95em" />
        </a>
      </Tooltip>
      <Tooltip content="Copy link">
        <button className={styles.item} onClick={handleCopy}>
          <Link width=".95em" />
        </button>
      </Tooltip>
    </div>
  );
};

export { SocialShare };
