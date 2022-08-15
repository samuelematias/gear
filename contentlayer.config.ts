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

export const ExternalLink = defineDocumentType(() => ({
  name: "ExternalLink",
  filePathPattern: `external-links/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    date: {
      type: "date",
      required: true,
    },
    link: {
      type: "string",
      required: true,
    },
  },
}));

export const Photo = defineDocumentType(() => ({
  name: "Photo",
  filePathPattern: `photos/*.mdx`,
  contentType: "mdx",
  fields: {
    date: {
      type: "date",
      required: true,
    },
    image: {
      type: "nested",
      of: Image,
      required: true,
    },
    link: {
      type: "string",
      required: false,
    },
    description: {
      type: "string",
      required: false,
    },
  },
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Post, ExternalLink, Photo],
  mdx: {
    remarkPlugins: [remarkGfm],
  },
});
