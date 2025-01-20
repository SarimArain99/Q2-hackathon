import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "cdn.sanity.io",
      "media.johnlewiscontent.com",
      "www.alankaram.in",
      "img.freepik.com",
      "images.prismic.io",
    ],
  },

  reactStrictMode: true,
  swcMinify: true,
};

export default nextConfig;
