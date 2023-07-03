/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    output: 'standalone',
    compress: false,
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'avatars.githubusercontent.com',
                port: '',
                pathname: '/u/**',
            },
        ],
    },
}

module.exports = nextConfig
