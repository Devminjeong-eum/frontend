/** @type {import('next').NextConfig} */
import nextPWA from 'next-pwa'

const withPWA = nextPWA({
  dest: 'public'
})

const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: false,
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.kakaocdn.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: '*.kakaocdn.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'dev-malssami-bucket.s3.ap-northeast-2.amazonaws.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default withPWA(nextConfig);
