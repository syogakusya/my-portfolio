/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: ['localhost', 'tsuchidas0814.com']
  },
  output: "export",
}

module.exports = nextConfig
