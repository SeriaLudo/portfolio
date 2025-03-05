/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/nextjs-blog",
  assetPrefix: "/nextjs-blog/",
  output: "export", // Enables `next export`
  images: {
    unoptimized: true, // Required if you're using the Next.js Image component
  },
  env: {
    BASE_PATH: "/nextjs-blog",
  },
};

module.exports = nextConfig;
