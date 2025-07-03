/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'Nekocorp',
    description: 'Custom kasm workspaces images made by nekocorp',
    icon: '/img/logo.svg',
    listUrl: 'https://l3ochan.github.io/kasm-registry/',
    contactUrl: 'https://github.com/l3ochan/kasm-registry/issues',
  },
  reactStrictMode: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
