import { login } from '@/fetcher';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const { searchParams } = new URL(request.url);
  // NOTE: params에 포함된 인가 코드를 추출한다.
  const code = searchParams.get('code');

  if (!code) {
    console.log('인증에 필요한 code parameter가 query에 없습니다.');
    return NextResponse.redirect(`${baseUrl}/api/auth/kakao`);
  }

  try {
    // NOTE: backend에 인가 코드를 보내 로그인을 시도한다.
    const { headers, data, status } = await login(code);

    if (data) {
      const redirectToHome = NextResponse.redirect(
        `${baseUrl}/home?view=all&page=1`,
      );
      const cookie = headers.get('Set-Cookie');

      if (cookie) {
        redirectToHome.headers.append('Set-Cookie', cookie);
      }
      return redirectToHome;
    }

    // NOTE: Data 가 정상적으로 오지 않았다면 Error를 발생시킨다.
    throw new Error(
      JSON.stringify({
        statusCode: status,
        message: 'data가 존재하지 않습니다.',
      }),
    );
  } catch (err) {
    console.log(err);
    return NextResponse.redirect(`${baseUrl}`);
  }
}
