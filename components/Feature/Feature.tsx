import Image from "next/image";
import Link from "next/link";
import { Heading } from "components/Heading";
import { Text } from "components/Text";
import { Spacer } from "components/Spacer";
import * as styles from "./Feature.css";

export interface FeatureProps {
  image: string;
  heading: string;
  description: string;
  slug: string;
}

const Feature = ({ image, heading, description, slug }: FeatureProps) => {
  return (
    <Link href={`/posts/${slug}`} className={styles.root}>
      <Image className={styles.image} src={image} fill priority alt="" />
      <span className={styles.overlay} />
      <div className={styles.content}>
        <Heading
          fontSize={{ sm: "xxl", md: "xxxl" }}
          className={styles.heading}
        >
          {heading}
        </Heading>
        <Spacer height="xs" />
        <Text
          fontSize={{
            md: "lg",
          }}
          className={styles.description}
        >
          {description}
        </Text>
      </div>
    </Link>
  );
};

export { Feature };
