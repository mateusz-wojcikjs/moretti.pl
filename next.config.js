/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [process.env.BASE_URL],
  },
  env: {
    API_URL: process.env.API_URL,
    BASE_URL: process.env.BASE_URL,
  },
};

module.exports = nextConfig;
