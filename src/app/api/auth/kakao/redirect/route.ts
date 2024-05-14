import { login } from '@/fetcher';
import { NextResponse } from 'next/server';
// import { cookies } from 'next/headers';

export async function GET(request: Request) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');

  if (!code) {
    console.error('인증에 필요한 code parameter가 query에 없습니다.');
    return NextResponse.redirect(`${baseUrl}/api/auth/kakao`);
  }

  try {
    const response = await login(code);
    if (response) {
      return NextResponse.redirect(`${baseUrl}/home`);
      //const cookie = cookies();
      //console.log('쿠키', cookie.getAll());
    }
  } catch (err) {
    console.error(err);
    return NextResponse.redirect(`${baseUrl}`);
  }
}
