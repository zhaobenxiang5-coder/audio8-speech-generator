/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/audio8-speech-generator',
  assetPrefix: '/audio8-speech-generator/',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
