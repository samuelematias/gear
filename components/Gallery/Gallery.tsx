/* eslint-disable jsx-a11y/alt-text */
import type { ImageProps } from "next/image";
import Image from "next/image";
import { Glyph } from "../Glyph";
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
        <Glyph name="leftArrow" />{" "}
        <span>
          <span className={styles.swipe}>Swipe</span>
          <span className={styles.scroll}>Scroll</span> to view more
        </span>{" "}
        <Glyph name="rightArrow" />
      </p>
    </>
  );
};
