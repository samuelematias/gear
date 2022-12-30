import type { NextPage } from "next";
import type { Page } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import { formatDate } from "lib/utils";
import { NextSeo } from "next-seo";
import { Box } from "components/Box";
import { Heading } from "components/Heading";
import { Meta } from "components/Meta";
import { Prose } from "components/Prose";
import { Text } from "components/Text";
import { Spacer } from "components/Spacer";
import { components } from "components/MDXComponents";
import { ImageCarousel } from "components/ImageCarousel";

const MdxPage: NextPage<{ page: Page }> = ({ page }) => {
  const MDXContent = useMDXComponent(page.body.code);
  return (
    <>
      <NextSeo
        title={page.title}
        description={page.description}
        openGraph={{
          type: "article",
          url: `https://gear.alexcarpenter.me/everyday-carry`,
          title: page.title,
          description: page.description,
          images: [
            {
              url: `https://gear.alexcarpenter.me${page.thumbnail}`,
            },
          ],
        }}
      />
      <Box as="article" paddingX="md" marginY="xxl">
        {page.gallery ? (
          <>
            <Box maxWidth="lg" marginX="auto">
              <ImageCarousel aspectRatio="16/9" items={page.gallery} />
            </Box>
            <Spacer height="lg" />
          </>
        ) : null}
        <Box maxWidth="md" marginX="auto">
          <Heading as="h1" fontSize="xxl">
            {page.title}
          </Heading>
          <Meta
            items={[
              {
                title: "Last updated",
                description: (
                  <Text
                    as="time"
                    dateTime={page.updated}
                    color="foregroundNeutral"
                  >
                    {formatDate(page.updated)}
                  </Text>
                ),
              },
            ]}
          />
          <Spacer height="lg" />
          <Prose>
            <MDXContent components={components} />
          </Prose>
        </Box>
      </Box>
    </>
  );
};

export { MdxPage };
