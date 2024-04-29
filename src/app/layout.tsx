import { Gugi } from 'next/font/google';
import './global.css';
import localFont from 'next/font/local';
import QueryProvider from '@/providers/QueryProvider.tsx';
import { GoogleAnalytics } from '@next/third-parties/google';

const gugi = Gugi({
  weight: '400',
  subsets: ['latin'],
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
        <div className="flex justify-center min-h-screen bg-[#FBFCFE]">
          <div className="w-full max-w-[430px] border-1 border-x border-gray-200 shadow-xl">
            <QueryProvider>{children}</QueryProvider>
          </div>
        </div>
      </body>
    </html>
  );
}
