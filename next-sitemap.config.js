/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://gear.alexcarpenter.com",
  generateRobotsTxt: true, // (optional)
};
