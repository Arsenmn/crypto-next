/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.coinranking.com"], // ✅ add the external hostname here
  },
};

module.exports = nextConfig;
