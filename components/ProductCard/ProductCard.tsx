import type { Kit } from "contentlayer/generated";
import Image from "next/legacy/image";
import { ExternalLink } from "react-feather";
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
        <span>
          <Text fontFamily="mono" fontSize="sm" color="foregroundNeutral">
            {brand}
          </Text>
          <Heading>{name}</Heading>
        </span>
        <span className={styles.icon}>
          <ExternalLink width={".8em"} />
        </span>
      </div>
    </a>
  );
};

export { ProductCard };
