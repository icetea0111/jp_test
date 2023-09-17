/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'jpassets.jobplanet.co.kr',
          port: '',
          pathname: '/**',
        }
      ]
    },
    experimental: {
      serverActions: true,
    },
};
module.exports = nextConfig
