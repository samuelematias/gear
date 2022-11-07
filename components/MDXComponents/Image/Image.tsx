import NextImage from "next/image";
import { cn } from "lib/utils";
import * as styles from "./Image.css";

interface ImageProps {
  src: string;
  alt: string;
  float?: "none" | "left" | "right";
  width?: "1/1" | "1/2" | "1/3" | "1/4";
}

const Image = ({ src, alt, float = "none", width = "1/1" }: ImageProps) => {
  return (
    <div className={cn(styles.root, styles.width[width], styles.float[float])}>
      <NextImage
        src={src}
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
