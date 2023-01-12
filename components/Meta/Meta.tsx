import * as React from "react";
import { SocialShare } from "components/SocialShare";
import * as styles from "./Meta.css";

interface MetaProps {
  items: {
    title: React.ReactNode;
    description: React.ReactNode;
  }[];
}

const Meta = ({ items }: MetaProps) => {
  return (
    <dl
      className={styles.root}
      style={
        {
          "--length": items.length,
        } as React.CSSProperties
      }
    >
      {items.map(({ title, description }, index) => {
        return (
          <div className={styles.item} key={index}>
            <dt className={styles.title}>{title}</dt>
            <dd>{description}</dd>
          </div>
        );
      })}
      <div className={styles.item}>
        <dt className={styles.title}>Share</dt>
        <dd>
          <SocialShare />
        </dd>
      </div>
    </dl>
  );
};

export { Meta };
