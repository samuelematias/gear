// import slugify from "@sindresorhus/slugify";
import {
  defineDocumentType,
  defineNestedType,
  makeSource,
} from "contentlayer/source-files";
import remarkGfm from "remark-gfm";

const Image = defineNestedType(() => ({
  name: "Image",
  fields: {
    src: { type: "string", required: true },
    width: { type: "number", required: true },
    height: { type: "number", required: true },
    alt: { type: "string", required: true },
  },
}));

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `posts/*.mdx`,
  contentType: "mdx",
  fields: {
    draft: {
      type: "boolean",
      required: false,
    },
    category: {
      type: "enum",
      options: ["Interview", "Gear", "Everyday Carry"],
    },
    thumbnail: {
      type: "string",
      required: true,
    },
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
      required: false,
    },
    date: {
      type: "date",
      required: true,
    },
    gallery: {
      type: "list",
      of: Image,
      required: false,
    },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (post: any) => post._raw.sourceFileName.replace(/\.mdx$/, ""),
    },
  },
}));

export const Page = defineDocumentType(() => ({
  name: "Page",
  filePathPattern: `pages/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    published: {
      type: "date",
      required: true,
    },
    updated: {
      type: "date",
      required: true,
    },
    gallery: {
      type: "list",
      of: Image,
      required: false,
    },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (page: any) => page._raw.sourceFileName.replace(/\.mdx$/, ""),
    },
  },
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Page, Post],
  mdx: {
    remarkPlugins: [remarkGfm],
  },
});
