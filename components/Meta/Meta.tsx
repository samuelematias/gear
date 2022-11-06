import * as React from "react";
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
            <dt
              style={
                {
                  "--index": index,
                } as React.CSSProperties
              }
            >
              {title}
            </dt>
            <dd
              style={
                {
                  "--index": index,
                } as React.CSSProperties
              }
            >
              {description}
            </dd>
          </div>
        );
      })}
    </dl>
  );
};

export { Meta };
