import type { Feed } from "contentlayer/generated";
import { NextSeo } from "next-seo";
import { Box } from "components/Box";
import { FeedItem } from "components/FeedItem";
import { PageHeader } from "components/PageHeader";
import { Spacer } from "components/Spacer";
import { allFeeds } from "contentlayer/generated";

export async function getStaticProps() {
  const feed = allFeeds.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  );
  return {
    props: {
      feed,
    },
  };
}

export default function Feed({ feed }: { feed: Feed[] }) {
  return (
    <>
      <NextSeo
        title="Feed"
        description="Short form updates, pocket dumps, industry news, and links."
        openGraph={{
          title: "Feed",
          description:
            "Short form updates, pocket dumps, industry news, and links.",
        }}
      />
      <PageHeader
        heading="Feed"
        description="Short form updates, pocket dumps, industry news, and links."
      />
      <Box as="section" paddingX="md" marginY="xxl">
        <Box as="ul" marginX="auto" maxWidth="md">
          {feed.map((item, index) => {
            return (
              <li key={item._id}>
                {index > 0 ? <Spacer height="lg" /> : null}
                <FeedItem key={item._id} {...item} />
              </li>
            );
          })}
        </Box>
      </Box>
    </>
  );
}
