/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'AF1 Kasm Registry',
    description: 'Collection of Workspace Tools for Testing within Home Lab Environment',
    icon: 'https://github.com/AppliedForce1/AF1-kasm-registry/blob/1.1/site/KASM_Registry_Thumbnail_v3.png',
    listUrl: 'https://AppliedForce1.github.io/AF1-kasm-registry/',
    contactUrl: 'https://github.com/AppliedForce1/AF1-kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/AF1-kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
