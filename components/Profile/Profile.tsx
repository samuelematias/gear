import React from "react";
import Image from "next/image";
import * as styles from "./Profile.css";

interface ProfileProps {
  avatar: string;
  meta: {
    title: string;
    description: string;
  }[];
}

export const Profile = ({ avatar, meta }: ProfileProps) => {
  return (
    <div className={styles.root}>
      <div className={styles.avatar}>
        <Image src={avatar} width="400" height="400" alt="Jon Gaffney" />
      </div>
      <dl className={styles.meta}>
        {meta.map((item, idx) => {
          return (
            <div key={idx} className={styles.metaRow}>
              <dt className={styles.metaTitle}>{item.title}</dt>
              <dd className={styles.metaDescription}>{item.description}</dd>
            </div>
          );
        })}
      </dl>
    </div>
  );
};
