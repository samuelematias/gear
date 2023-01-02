import * as React from "react";
import type { ImageProps } from "next/legacy/image";
import Image from "next/legacy/image";
import { Carousel } from "components/Carousel";

interface CarouselProps {
  aspectRatio?: "16/9" | "4/3";
  items: ImageProps[];
}

const ImageCarousel = ({ aspectRatio = "4/3", items }: CarouselProps) => {
  const [antecedent, consequent] = aspectRatio.split("/");
  return (
    <Carousel>
      {items.map((item, index) => {
        return (
          <Image
            key={index}
            src={item.src}
            alt={item.alt}
            width={1024}
            height={(Number(consequent) / Number(antecedent)) * 1024}
            objectFit="cover"
          />
        );
      })}
    </Carousel>
  );
};

export { ImageCarousel };
