import type { NextSeoProps } from "next-seo";

export default {
  titleTemplate: "%s | Alex Carpenter",
  title: "Alex Carpenter",
  description: "Serial hobbyist",
  openGraph: {
    locale: "en_US",
    type: "website",
    url: "https://gear.alexcarpenter.me",
    site_name: "Alex Carpenter",
  },
  twitter: {
    handle: "@hybrid_alex",
    cardType: "summary_large_image",
  },
} as NextSeoProps;
