/** @type {import('next').NextConfig} */
import nextPWA from 'next-pwa'

const withPWA = nextPWA({
  dest: 'public'
})

const nextConfig = {
  reactStrictMode: true,
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
    ],
  },
};

export default withPWA(nextConfig);
