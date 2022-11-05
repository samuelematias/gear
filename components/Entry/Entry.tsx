import Image from "next/image";
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
      <Box
        display="flex"
        alignItems="flex-start"
        flexDirection={{ sm: "row-reverse", md: "row" }}
        gap="md"
      >
        <Box display={{ sm: "flex", md: "flex" }} flexShrink={0}>
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
            >
              {category}
            </Text>
          ) : null}
          <Spacer height="xs" />
          <Heading fontSize="xl" style={{ lineHeight: 1.2 }}>
            <Link href={`/posts/${slug}`}>
              <a>{heading}</a>
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
