import { allPages } from "contentlayer/generated";
import { MdxPage } from "views/MdxPage";

export default MdxPage;

export async function getStaticProps() {
  const page = allPages.find((page) => page.slug === "everyday-carry");
  return {
    props: {
      page,
    },
  };
}
