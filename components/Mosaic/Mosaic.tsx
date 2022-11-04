import Image from "next/image";
import { cn } from "lib/utils";
import * as styles from "./Mosaic.css";

const Mosaic = ({}) => {
  return (
    <section className={styles.root}>
      <div className={cn(styles.item, styles.primary)}>
        <Image
          src="/img/jon-gaffney-edc-winter-1.jpeg"
          objectFit="cover"
          objectPosition="center"
          layout="fill"
          alt=""
        />
      </div>
      <div className={cn(styles.item, styles.secondary)}>
        <Image
          src="/img/jon-gaffney-edc-winter-2.jpeg"
          width={800}
          height={400}
          objectFit="cover"
          objectPosition="center"
          alt=""
        />
      </div>
      <div className={cn(styles.item, styles.tertiary)}>
        <Image
          src="/img/jon-gaffney-edc-winter-3.jpeg"
          width={800}
          height={400}
          objectFit="cover"
          objectPosition="center"
          alt=""
        />
      </div>
    </section>
  );
};

export { Mosaic };
