const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: 'basehub.earth' }, { hostname: '"image-forwarder.notaku.so"' }]
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'src')]
  }
}

module.exports = nextConfig
