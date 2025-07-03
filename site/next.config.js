/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'Nekocorp',
    description: 'Custom kasm workspaces images made by nekocorp',
    icon: 'https://raw.githubusercontent.com/l3ochan/kasm-registry/refs/heads/1.1/site/public/logo%20round.png',
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
