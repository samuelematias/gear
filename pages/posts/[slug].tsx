import { NextPage } from "next/types";
import { NextSeo } from "next-seo";
import { format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import { components } from "@/components/MDXComponents";
import { Heading } from "@/components/Heading";
import { Gallery } from "@/components/Gallery";
import { Prose } from "@/components/Prose";
import { Spacer } from "@/components/Spacer";
import { Text } from "@/components/Text";

export async function getStaticPaths() {
  return {
    paths: allPosts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const post = allPosts.find((post) => post.slug === params.slug);
  return {
    props: {
      post,
    },
  };
}

const PostPage: NextPage<{ post: Post }> = ({ post }) => {
  const MDXContent = useMDXComponent(post.body.code);
  return (
    <>
      <NextSeo
        title={post.title}
        description={post.description}
        openGraph={{
          type: "article",
          url: `https://gear.alexcarpenter.com/${post.slug}`,
          title: post.title,
          description: post.description,
          article: {
            publishedTime: post.date,
          },
          images: [
            {
              url: `https://gear.alexcarpenter.com/img/thumbnail-${post.slug}.png`,
            },
          ],
        }}
      />
      <article>
        <Heading as="h1" fontSize="xl">
          {post.title}
        </Heading>
        <Text as="time" dateTime={post.date} color="foregroundSecondary">
          {format(parseISO(post.date), "LLLL d, yyyy")}
        </Text>
        <Spacer height="lg" />
        {post.gallery ? (
          <>
            <Gallery images={post.gallery} />
            <Spacer height="lg" />
          </>
        ) : null}
        <Prose>
          <MDXContent components={components} />
        </Prose>
      </article>
    </>
  );
};

export default PostPage;
