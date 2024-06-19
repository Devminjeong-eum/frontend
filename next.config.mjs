/** @type {import('next').NextConfig} */
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

export default nextConfig;
