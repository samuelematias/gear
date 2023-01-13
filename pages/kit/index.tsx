import type { Kit } from "contentlayer/generated";
import { NextSeo } from "next-seo";
import { Box } from "components/Box";
import { PageHeader } from "components/PageHeader";
import { ProductCard } from "components/ProductCard";
import { allKits } from "contentlayer/generated";

export async function getStaticProps() {
  return {
    props: {
      kit: allKits,
    },
  };
}

export default function Kit({ kit }: { kit: Kit[] }) {
  return (
    <>
      <NextSeo
        title="Kit"
        description=""
        openGraph={{
          title: "Kit",
          description: "",
        }}
      />
      <PageHeader heading="Kit" description="" />
      <Box as="section" paddingX="md" marginY="xxl">
        <Box
          display="grid"
          gridTemplateColumns={{
            sm: "1/1",
            md: "1/2",
            lg: "1/3",
          }}
          gap="sm"
          rowGap="lg"
          maxWidth="lg"
          marginX="auto"
        >
          {kit.map((product) => {
            return <ProductCard key={product._id} {...product} />;
          })}
        </Box>
      </Box>
    </>
  );
}
