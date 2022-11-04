import Link from "next/link";
import { Heading } from "components/Heading";
import { Text } from "components/Text";
import { Spacer } from "components/Spacer";
import type { Post } from "contentlayer/generated";
import { allPosts } from "contentlayer/generated";

export async function getStaticProps() {
  const posts = allPosts.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  );
  return {
    props: {
      posts,
    },
  };
}

export default function Home({ posts }: { posts: Post[] }) {
  return (
    <>
      <ul
        style={{
          paddingBlock: "4rem",
          maxInlineSize: "48rem",
          marginInline: "auto",
        }}
      >
        {posts.map((post, index) => {
          return (
            <li key={post._id}>
              {index > 0 ? <Spacer height="lg" /> : null}
              <article>
                {/* <Text
                  color="foregroundNeutral"
                  textTransform="uppercase"
                  letterSpacing="wide"
                  fontSize="sm"
                >
                  Xtratuf
                </Text>
                <Spacer height="xs" /> */}
                <Heading fontSize="xl" style={{ lineHeight: 1.2 }}>
                  <Link href={`/posts/${post.slug}`}>
                    <a>{post.title}</a>
                  </Link>
                </Heading>
                <Spacer height="sm" />
                <Text>{post.description}</Text>
              </article>
            </li>
          );
        })}
      </ul>
    </>
  );
}
