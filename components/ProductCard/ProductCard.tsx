import type { Kit } from "contentlayer/generated";
import Image from "next/legacy/image";
import { Heading } from "components/Heading";
import { Text } from "components/Text";
import { Spacer } from "components/Spacer";
import * as styles from "./ProductCard.css";

const ProductCard = ({ name, brand }: Kit) => {
  return (
    <a href="" className={styles.root}>
      {/* <Image
        src="/img/benchmade-bugouts.jpeg"
        width={800}
        height={800}
        objectFit="cover"
        alt=""
      />
      <Spacer height="xs" /> */}
      <div className={styles.info}>
        <Text fontFamily="mono" fontSize="sm" color="foregroundNeutral">
          {brand}&nbsp;
          <span aria-hidden={true} className={styles.labelArrow}>
            ↗
          </span>
        </Text>
        <Heading>{name}</Heading>
      </div>
    </a>
  );
};

export { ProductCard };
