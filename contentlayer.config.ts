import { formatDate } from "./lib/utils";
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
    width: { type: "number", required: false },
    height: { type: "number", required: false },
    alt: { type: "string", required: true },
  },
}));

////////////////////////////////////////////////////////////////////////////////
// Posts

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
      options: ["Interview", "Gear"],
    },
    tags: {
      type: "list",
      of: {
        type: "string",
      },
      required: false,
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
    published: {
      type: "date",
      required: true,
    },
    updated: {
      type: "date",
      required: false,
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
    dateFormatted: {
      type: "string",
      resolve: (post: any) => formatDate(post.published),
    },
  },
}));

////////////////////////////////////////////////////////////////////////////////
// Feed

export const Feed = defineDocumentType(() => ({
  name: "Feed",
  filePathPattern: `feed/*.mdx`,
  contentType: "mdx",
  fields: {
    date: {
      type: "date",
      required: true,
    },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (post) => post._raw.sourceFileName.replace(/\.mdx$/, ""),
    },
  },
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Feed, Post],
  mdx: {
    remarkPlugins: [remarkGfm],
  },
});
