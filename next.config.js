/** @type {import('next').NextConfig} */

const withCSS = require("@zeit/next-css");
const withFonts = require("next-fonts");

const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

module.exports = withFonts(
  withCSS({
    webpack(config, options) {
      config.module.rules.push({
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 100000,
            name: "[name].[ext]",
          },
        },
      });

      return config;
    },
  })
);
