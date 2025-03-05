/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/portfolio",
  assetPrefix: "/portfolio/",
  output: "export", // Enables `next export`
  images: {
    unoptimized: true, // Required if you're using the Next.js Image component
  },
  env: {
    BASE_PATH: "/portfolio",
  },
};

module.exports = nextConfig;
