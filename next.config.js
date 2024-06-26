/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "localhost",
      "moretticms.mateusz-wojcik.pl",
      "moretti.pl",
      "admin.moretti.pl",
    ],
  },
  env: {
    API_URL: process.env.API_URL,
    BASE_URL: process.env.BASE_URL,
  },
};

module.exports = nextConfig;
