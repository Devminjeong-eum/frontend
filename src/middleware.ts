import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
  const accessToken = request.cookies.get('accessToken')?.value;
  const refreshToken = request.cookies.get('refreshToken')?.value;
  console.log('req', request);
  console.log('middleware');
  console.log(accessToken, refreshToken);

  const next = NextResponse.next();

  // accessToken이 없고 refreshToken이 있을 경우
  if (!accessToken && refreshToken) {
    console.log('accessToken이 없습니다. 새로운 access Token을 세팅해줍니다.');
    next.cookies.set('accessToken', 'accessToken');
  }
  // accessToken이 있거나 refreshToken이 없으면 요청을 계속 진행

  return next;
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
