import * as React from "react";
import type { ImageProps } from "next/legacy/image";
import Image from "next/legacy/image";
import { cn } from "lib/utils";
import * as styles from "./Mosaic.css";

interface MosaicProps {
  items: ImageProps[];
}

const Mosaic = ({ items }: MosaicProps) => {
  const [primary, secondary, tertiary] = items;
  return (
    <section className={styles.root}>
      <div className={cn(styles.item, styles.primary)}>
        <Image
          src={primary.src}
          alt={primary.alt}
          objectFit="cover"
          objectPosition="center"
          layout="fill"
          style={{
            borderRadius: 4,
          }}
        />
      </div>
      <div className={cn(styles.item, styles.secondary)}>
        <Image
          src={secondary.src}
          alt={secondary.alt}
          width={800}
          height={400}
          objectFit="cover"
          objectPosition="center"
          style={{
            borderRadius: 4,
          }}
        />
      </div>
      <div className={cn(styles.item, styles.tertiary)}>
        <Image
          src={tertiary.src}
          alt={tertiary.alt}
          width={800}
          height={400}
          objectFit="cover"
          objectPosition="center"
          style={{
            borderRadius: 4,
          }}
        />
      </div>
    </section>
  );
};

export { Mosaic };
