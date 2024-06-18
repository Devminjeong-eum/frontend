/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  images: {
    domains: ['t1.kakaocdn.net'],
  },
};

export default nextConfig;
