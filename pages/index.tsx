import type { NextPage } from "next";
import type { Post, Link } from "contentlayer/generated";
import NextLink from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, allLinks } from "contentlayer/generated";
import { Spacer } from "@/components/Spacer";
import { NumberedList } from "@/components/NumberedList";
import { Heading } from "@/components/Heading";

export async function getStaticProps() {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });
  const links = allLinks.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });
  return { props: { posts, links } };
}

const Home: NextPage<{
  posts: Post[];
  links: Link[];
}> = ({ posts, links }) => {
  return (
    <>
      <Heading size="lg">Latest posts</Heading>

      <Spacer height="md" />

      <ul>
        {posts.map((post, idx) => (
          <li key={idx}>
            <h3>
              <NextLink href={`/posts/${post.slug}`}>
                <a>{post.title}</a>
              </NextLink>
            </h3>
            <time dateTime={post.date}>
              {format(parseISO(post.date), "LLL d, Y")}
            </time>
          </li>
        ))}
      </ul>

      <Spacer height="xl" />

      <Heading size="lg">Link feed</Heading>

      <Spacer height="md" />

      <NumberedList>
        {links.map((link, idx) => (
          <div key={idx}>
            <h3>
              <a href={link.link}>{link.title}</a>
            </h3>
            <time dateTime={link.date}>
              {format(parseISO(link.date), "LLL d, Y")}
            </time>
          </div>
        ))}
      </NumberedList>
    </>
  );
};

export default Home;
