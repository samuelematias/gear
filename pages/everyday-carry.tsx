import type { NextPage } from "next";
import type { Page } from "contentlayer/generated";
import { allPages } from "contentlayer/generated";
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

export async function getStaticProps() {
  const page = allPages.find((page) => page.slug === "everyday-carry");
  return {
    props: {
      page,
    },
  };
}

const EdcPage: NextPage<{ page: Page }> = ({ page }) => {
  const MDXContent = useMDXComponent(page.body.code);
  return (
    <>
      <NextSeo title={page.title} />
      <Box as="article" paddingX="md" marginY="xxl">
        {/* <Box maxWidth="lg" marginX="auto" marginBottom="lg">
          <Mosaic />
        </Box> */}
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

export default EdcPage;
