/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        // Temp: REMOVE THIS,
        ignoreBuildErrors: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**",
            },
        ],
    },
}

module.exports = nextConfig
