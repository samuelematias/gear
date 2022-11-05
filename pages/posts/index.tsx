import { Spacer } from "components/Spacer";
import { Entry } from "components/Entry";
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
      </ul>
    </>
  );
}
