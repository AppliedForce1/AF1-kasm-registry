/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'AF1 Kasm Registry',
    description: 'Collection of Workspace Tools for Testing within Home Lab Environment.',
    icon: '/img/logo.svg',
    listUrl: 'https://github.com/AppliedForce1/AF1-kasm-registry',
    contactUrl: 'https://github.com/AppliedForce1/AF1-kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
