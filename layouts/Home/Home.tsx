import * as React from "react";
import type { NextPage } from "next";
import type { Post, Photo, ExternalLink } from "contentlayer/generated";
import NextLink from "next/link";
import { NextSeo } from "next-seo";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, allExternalLinks, allPhotos } from "contentlayer/generated";
import { Spacer } from "@/components/Spacer";
import { Heading } from "@/components/Heading";
import { PhotoGrid } from "@/components/PhotoGrid";
import { Glyph } from "@/components/Glyph";
import { List } from "@/components/List";
import { Text } from "@/components/Text";

export async function getStaticProps() {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });
  const photos = allPhotos.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });
  const externalLinks = allExternalLinks.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });
  return { props: { posts, photos, externalLinks } };
}

export const Home: NextPage<{
  posts: Post[];
  photos: Photo[];
  externalLinks: ExternalLink[];
}> = ({ posts, photos, externalLinks }) => {
  return (
    <>
      <NextSeo title="Gear" />

      <h1 hidden>Home</h1>

      <Heading fontSize="lg">Posts</Heading>

      <Spacer height="md" />

      <List>
        {posts.map((post, idx) => {
          return (
            <React.Fragment key={idx}>
              <h3>
                <NextLink href={`/posts/${post.slug}`}>
                  <a>{post.title}</a>
                </NextLink>
              </h3>
              <Text as="time" dateTime={post.date} color="foregroundSecondary">
                {format(parseISO(post.date), "LLL d, Y")}
              </Text>
            </React.Fragment>
          );
        })}
      </List>

      <Spacer height="xl" />

      <Heading fontSize="lg">Photos</Heading>

      <Spacer height="md" />

      <PhotoGrid photos={photos.map(({ image }) => image)} />

      <Spacer height="xl" />

      <Heading fontSize="lg">Links</Heading>

      <Spacer height="md" />

      <List>
        {externalLinks.map((link, idx) => (
          <React.Fragment key={idx}>
            <h3>
              <a href={link.link}>{link.title}</a>
              {"\u00A0"}
              <Glyph name="externalArrow" />
            </h3>
            <Text as="time" dateTime={link.date} color="foregroundSecondary">
              {format(parseISO(link.date), "LLL d, Y")}
            </Text>
          </React.Fragment>
        ))}
      </List>
    </>
  );
};
