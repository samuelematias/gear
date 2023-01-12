import Image from "next/legacy/image";
import Link from "next/link";
import { Box } from "components/Box";
import { Heading } from "components/Heading";
import { Text } from "components/Text";
import { Spacer } from "components/Spacer";
import * as styles from "./Entry.css";

interface EntryProps {
  category?: string;
  thumbnail: string;
  heading: string;
  description?: string;
  slug: string;
}

const Entry = ({
  category,
  thumbnail,
  heading,
  description,
  slug,
}: EntryProps) => {
  return (
    <article>
      <Box display={{ md: "flex" }} alignItems="flex-start" gap="md">
        <Box
          display="flex"
          float={{ sm: "right", md: "none" }}
          flexShrink={0}
          marginTop="xs"
          marginLeft={{ sm: "sm", md: "none" }}
          marginBottom={{ sm: "sm", md: "none" }}
        >
          <Image
            src={thumbnail}
            width="64"
            height="64"
            objectFit="cover"
            alt=""
            style={{
              borderRadius: 4,
            }}
          />
        </Box>
        <Box paddingBottom="lg" className={styles.content}>
          {category ? (
            <Text
              color="foregroundNeutral"
              textTransform="uppercase"
              letterSpacing="wide"
              fontSize="sm"
              fontFamily="mono"
            >
              {category}
            </Text>
          ) : null}
          <Spacer height="xs" />
          <Heading as="h3" fontSize="xl" style={{ lineHeight: 1.2 }}>
            <Link href={`/posts/${slug}`} className={styles.anchor}>
              {heading}
            </Link>
          </Heading>
          {description ? (
            <>
              <Spacer height="sm" />
              <Text>{description}</Text>
            </>
          ) : null}
        </Box>
      </Box>
    </article>
  );
};

export { Entry };
