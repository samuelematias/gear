import type { NextSeoProps } from "next-seo";

export default {
  titleTemplate: "%s // Alex Carpenter",
  title: "Gear",
  description: "Serial hobbyist",
  openGraph: {
    locale: "en_US",
    type: "website",
    url: "https://gear.alexcarpenter.me",
    site_name: "Gear // Alex Carpenter",
  },
  twitter: {
    handle: "@hybrid_alex",
    cardType: "summary_large_image",
  },
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/favicon.svg",
    },
  ],
  additionalMetaTags: [
    {
      name: "google-site-verification",
      content: "nfhrXCwuzTQjasCO0xSgZ0BE92C7e45vkEgs1a6AtII",
    },
  ],
} as NextSeoProps;
