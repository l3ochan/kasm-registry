/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'Nekocorp',
    description: 'Custom kasm worspaces for Nekocorp',
    icon: 'https://github.com/l3ochan/kasm-registry/blob/d384afc5789677f8b705c10d663d83f369691439/site/public/logo%20round.png',
    listUrl: 'https://l3ochan.github.io/nekocorp-workspace-kasm/1.1/',
    contactUrl: 'https://github.com/l3ochan/nekocorp-workspace-kasm/issues',
  },
  reactStrictMode: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
