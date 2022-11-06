import { NextPage } from "next/types";
import { NextSeo } from "next-seo";
import { allPosts, Post } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import { formatDate } from "lib/utils";
import { Box } from "components/Box";
import { Heading } from "components/Heading";
import { Prose } from "components/Prose";
import { Text } from "components/Text";
import { Spacer } from "components/Spacer";
import { components } from "components/MDXComponents";
import { Mosaic } from "components/Mosaic";

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
          url: `https://gear.alexcarpenter.me/${post.slug}`,
          title: post.title,
          description: post.description,
          article: {
            publishedTime: post.date,
          },
          images: [
            {
              url: `https://gear.alexcarpenter.me/img/thumbnail-${post.slug}.png`,
            },
          ],
        }}
      />
      <Box as="article" paddingX="md" marginY="xxl">
        {/* <Box maxWidth="lg" marginX="auto">
          <Mosaic />
        </Box>
        <Spacer height="lg" /> */}
        <Box maxWidth="md" marginX="auto">
          <Heading as="h1" fontSize="xxl">
            {post.title}
          </Heading>
          <Text as="time" dateTime={post.date} color="foregroundNeutral">
            {formatDate(post.date)}
          </Text>
          <Spacer height="lg" />
          <Prose>
            <MDXContent components={components} />
          </Prose>
        </Box>
      </Box>
    </>
  );
};

export default PostPage;
