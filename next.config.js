/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'source.unsplash.com'],
    unoptimized: true,
  },
  // 2GB RAM optimization
  swcMinify: true,
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
}

module.exports = nextConfig
