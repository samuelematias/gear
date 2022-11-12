import type { Sprinkles } from "styles/sprinkles.css";
import NextImage from "next/image";
import { Box } from "components/Box";

interface ImageProps {
  src: string;
  alt: string;
  aspectRatio?: Sprinkles["aspectRatio"];
  float?: Sprinkles["float"];
  width?: Extract<Sprinkles["width"], "1/1" | "1/2" | "1/3" | "1/4">;
  marginLeft: Sprinkles["marginLeft"];
  marginRight: Sprinkles["marginRight"];
  marginBottom: Sprinkles["marginBottom"];
}

const Image = ({
  src,
  alt,
  float = "none",
  width = "1/1",
  aspectRatio = "16/9",
  marginLeft,
  marginRight,
  marginBottom,
}: ImageProps) => {
  return (
    <Box
      position="relative"
      width={width}
      aspectRatio={aspectRatio}
      float={float}
      marginLeft={marginLeft}
      marginRight={marginRight}
      marginBottom={marginBottom}
    >
      <NextImage
        src={src}
        layout="fill"
        objectFit="cover"
        alt={alt}
        style={{
          borderRadius: 4,
        }}
      />
    </Box>
  );
};

export { Image };
