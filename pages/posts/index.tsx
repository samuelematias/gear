import { Box } from "components/Box";
import { Entry } from "components/Entry";
import { Spacer } from "components/Spacer";
import type { Post } from "contentlayer/generated";
import { allPosts } from "contentlayer/generated";

export async function getStaticProps() {
  const posts = allPosts
    .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
    .filter((post) =>
      process.env.VERCEL_ENV === "preview" ? !post.draft : post
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
