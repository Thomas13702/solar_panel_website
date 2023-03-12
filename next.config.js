/** @type {import('next').NextConfig} */

const withVideos = require("next-videos");
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "assets.bwbx.io",
      "www.moneysavingexpert.com",
      "www.cnet.com",
      "static.euronews.com",
      "images.theecoexperts.co.uk",
      "cdn.shortpixel.ai",
      "m.media-amazon.com",
      "cdn.greenmatch.co.uk",
      "giphy.com",
    ],
  },
};

module.exports = nextConfig;

module.exports = withVideos();
