const { withContentlayer } = require("next-contentlayer");
const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");
const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/posts/kyle-snarr-edc-winter-2022",
        destination: "/posts/kyle-snarr-edc",
        permanent: true,
      },
      {
        source: "/posts/jon-gaffney-edc-winter-2021",
        destination: "/posts/jon-gaffney-edc",
        permanent: true,
      },
    ];
  },
};

module.exports = withContentlayer(withVanillaExtract(nextConfig));
