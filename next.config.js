/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // eslint-disable-next-line prettier/prettier
    domains: ["http://localhost:1337/public/*"],
  },
};

module.exports = nextConfig;
