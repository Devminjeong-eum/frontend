import './global.css';
import localFont from 'next/font/local';
import QueryProvider from '@/providers/QueryProvider.tsx';
import { GoogleAnalytics } from '@next/third-parties/google';
import Script from 'next/script';
import { Metadata } from 'next';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BASE_URL, PRODUCTION_URL } from '@/utils';

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
  title: {
    template: '데브말싸미 | %s',
    default: '데브말싸미 | 개발 용어 발음 사전',
  },
  description:
    '발음이 헷갈리는 개발 용어에 대해 손쉽게 발음과 뜻을 검색해보세요.',
  keywords:
    '개발, 용어, 발음, 사전, 프로그래밍, 코딩, 개발자, 소프트웨어, IT용어사전, 개발용어사전',
  authors: [
    { name: '뎁민정음', url: 'https://github.com/Devminjeong-eum/frontend' },
  ],
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL(BASE_URL || PRODUCTION_URL),
  openGraph: {
    title: {
      template: '데브말싸미 | %s',
      default: '데브말싸미 | 개발 용어 발음 사전',
    },
    description:
      '발음이 헷갈리는 개발 용어에 대해 손쉽게 발음과 뜻을 검색해보세요.',
    url: BASE_URL,
    siteName: '데브말싸미',
    type: 'website',
    locale: 'ko_KR',
    images: [
      {
        url: '/opengraph-image.png',
        alt: '데브말싸미 로고',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: {
      template: '데브말싸미 | %s',
      default: '데브말싸미 | 개발 용어 발음 사전',
    },
    description:
      '발음이 헷갈리는 개발 용어에 대해 손쉽게 발음과 뜻을 검색해보세요.',
    images: [
      {
        url: '/opengraph-image.png',
        alt: '데브말싸미 로고',
      },
    ],
  },
  appleWebApp: {
    title: '데브말싸미',
    statusBarStyle: 'black-translucent',
  },
  icons: {
    apple: [{ url: '/apple-touch-icon.png' }],
  },
};

const gugi = localFont({
  src: [
    {
      path: './fonts/Gugi-Regular.woff2',
      //weight: '400',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-gugi',
});

const pretendard = localFont({
  src: [
    {
      path: './fonts/Pretendard-Thin.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: './fonts/Pretendard-ExtraLight.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: './fonts/Pretendard-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/Pretendard-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Pretendard-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/Pretendard-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/Pretendard-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/Pretendard-ExtraBold.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: './fonts/Pretendard-Black.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-pretendard',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="ko" className={`${gugi.variable} ${pretendard.variable}`}>
      <GoogleAnalytics gaId="G-JVH2GTHE6P" />
      <body className="font-pretendard">
        <div className="flex justify-center min-h-screen bg-[#FBFCFE] scrollbar-hide">
          <div className="w-full max-w-[430px] shadow-xl ">
            <QueryProvider>
              {children}
              <ReactQueryDevtools initialIsOpen={false} />
            </QueryProvider>
          </div>
        </div>
        <Script src="https://developers.kakao.com/sdk/js/kakao.js" />
      </body>
    </html>
  );
}
