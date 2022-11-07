import NextImage from "next/image";
import { cn } from "lib/utils";
import * as styles from "./Image.css";

interface ImageProps {
  src: string;
  alt: string;
  float?: "left" | "right";
  width?: "full" | "half" | "quarter";
}

const Image = ({ src, alt, float, width = "full" }: ImageProps) => {
  return (
    <div
      className={cn(
        styles.root,
        styles.width[width],
        float && styles.float[float]
      )}
    >
      <NextImage
        src="/img/jon-gaffney-edc-winter-1.jpeg"
        layout="fill"
        objectFit="cover"
        alt={alt}
        style={{
          borderRadius: 4,
        }}
      />
    </div>
  );
};

export { Image };
