/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  output: 'export',
  bashPath: '/repo-port1',
  assetPrefix: '/repo-port1'
};

module.exports = nextConfig;
