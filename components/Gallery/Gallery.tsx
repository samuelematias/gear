/* eslint-disable jsx-a11y/alt-text */
import type { ImageProps } from "next/image";
import Image from "next/image";
import { ArrowRight, ArrowLeft } from "react-feather";
import * as styles from "./Gallery.css";

interface GalleryProps {
  images: ImageProps[];
}

export const Gallery = ({ images }: GalleryProps) => {
  return (
    <>
      <figure className={styles.root}>
        <div className={styles.inner}>
          {images.map((img, idx) => {
            return (
              <div key={idx} className={styles.item}>
                <Image {...img} />
              </div>
            );
          })}
        </div>
      </figure>
      <p className={styles.note}>
        <ArrowLeft width={".85rem"} /> <span>Swipe to view more</span>{" "}
        <ArrowRight width={".85rem"} />
      </p>
    </>
  );
};
