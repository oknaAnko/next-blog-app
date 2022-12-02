/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // https://github.com/vercel/next.js/discussions/42994
  experimental: {
    newNextLinkBehavior: false
  }
};

module.exports = nextConfig;
