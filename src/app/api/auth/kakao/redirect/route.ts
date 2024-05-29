import { login } from '@/fetcher';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const { searchParams } = new URL(request.url);
  // NORE: 인가 코드
  const code = searchParams.get('code');

  if (!code) {
    // FIXME
    console.log('인증에 필요한 code parameter가 query에 없습니다.');
    return NextResponse.redirect(`${baseUrl}/api/auth/kakao`);
  }

  try {
    // NOTE: 로그인
    const { headers, data } = await login(code);

    if (data) {
      console.log('*********************\n', data);
      const redirectToHome = NextResponse.redirect(`${baseUrl}/home`);
      const cookie = headers.get('Set-Cookie');

      if (cookie) {
        redirectToHome.headers.append('Set-Cookie', cookie);
      }

      return redirectToHome;
    }
  } catch (err) {
    // FIXME
    console.log(err);
    return NextResponse.redirect(`${baseUrl}`);
  }
}
