import { NextSeo } from "next-seo";
import { Box } from "components/Box";
import { Entry } from "components/Entry";
import { Spacer } from "components/Spacer";
import type { Post } from "contentlayer/generated";
import { allPosts } from "contentlayer/generated";

export async function getStaticProps() {
  const posts = allPosts
    .sort(
      (a, b) => Number(new Date(b.published)) - Number(new Date(a.published))
    )
    .filter((post) =>
      process.env.VERCEL_ENV === "production" ? !post.draft : post
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
      <NextSeo
        title="Posts"
        openGraph={{
          title: "Posts",
        }}
      />
      <Box as="section" paddingX="md" marginY="xxl">
        <Box as="ul" marginX="auto" maxWidth="md">
          {posts.map((post, index) => {
            return (
              <li key={post._id}>
                {index > 0 ? <Spacer height="lg" /> : null}
                <Entry
                  slug={post.slug}
                  thumbnail={post.thumbnail}
                  category={post.category}
                  heading={post.title}
                  description={post.description}
                />
              </li>
            );
          })}
        </Box>
      </Box>
    </>
  );
}
