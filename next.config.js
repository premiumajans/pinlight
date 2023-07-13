const { i18n } = require('./next-i18next.config')

/** @type {import('next').NextConfig} */


const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  i18n,
  images: {
    domains: ["admin.pinlight.az"],
  },
}

module.exports = nextConfig
