/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'AF1 Kasm Registry',
    description: 'Collection of Workspace Tools for Testing within Home Lab Environment.',
    icon: 'https://avatars.githubusercontent.com/u/201309878?s=96&v=4',
    listUrl: 'https://AppliedForce1.github.io/AF1-kasm-registry',
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
