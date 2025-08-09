/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  // GitHub Pages project site under /boemare-final
  basePath: '/boemare-final',
  assetPrefix: '/boemare-final/',
  trailingSlash: true,
}

module.exports = nextConfig


