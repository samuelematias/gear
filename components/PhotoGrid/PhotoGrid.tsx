import type { ImageProps } from "next/image";
import Image from "next/image";
import * as styles from "./PhotoGrid.css";

interface PhotoGridProps {
  photos: ImageProps[];
}

export const PhotoGrid = ({ photos }: PhotoGridProps) => {
  return (
    <ul className={styles.root}>
      {photos.map((photo, idx) => {
        return (
          <li key={idx} className={styles.item}>
            <Image
              src={photo.src}
              alt={photo.alt}
              width="300"
              height="300"
              objectFit="cover"
              objectPosition="center"
            />
          </li>
        );
      })}
    </ul>
  );
};
