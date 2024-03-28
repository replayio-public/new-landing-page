/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{ hostname: "basehub.earth" }],
    },
}

module.exports = nextConfig
