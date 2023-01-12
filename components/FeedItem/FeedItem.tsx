import type { Feed } from "contentlayer/generated";
import { formatDateTime } from "lib/utils";
import { useMDXComponent } from "next-contentlayer/hooks";
import { components } from "components/MDXComponents";
import { Prose } from "components/Prose";
import { Text } from "components/Text";
import { Spacer } from "components/Spacer";
import * as styles from "./FeedItem.css";

const FeedItem = ({ date, slug, body }: Feed) => {
  const MDXContent = useMDXComponent(body.code);
  return (
    <article className={styles.root}>
      <Prose>
        <MDXContent components={components} />
      </Prose>
      <Spacer height="md" />
      <Text as="time" dateTime={date} fontSize="sm" color="foregroundNeutral">
        {formatDateTime(date)}
      </Text>
    </article>
  );
};

export { FeedItem };
