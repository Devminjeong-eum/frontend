import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import {
  RequestCookies,
  ResponseCookies,
} from 'next/dist/server/web/spec-extension/cookies';
import { serverFetch } from '@/fetcher/serverFetch.ts';
import type { FetchRes, DefaultRes } from '@/fetcher/types.ts';
import { BASE_URL } from './utils';
import { getUserInfoServer } from '@/fetcher/server.ts';

export async function middleware(request: NextRequest) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const accessToken = request.cookies.get('accessToken')?.value;
  const refreshToken = request.cookies.get('refreshToken')?.value;

  const { pathname } = request.nextUrl;

  const next = NextResponse.next();

  // 비로그인 상태로 단어장 페이지에 진입할 경우 "/"으로 redirect
  if (pathname === '/user/wordbook' && !accessToken && !refreshToken)
    return NextResponse.redirect(new URL('/', BASE_URL));

  // accessToken이 없고 refreshToken이 있을 경우
  if (!accessToken && refreshToken) {
    console.log('accessToken이 없습니다. 새로운 access Token을 세팅해줍니다.');

    try {
      const { headers } = await serverFetch<FetchRes<DefaultRes<never>>>(
        `/auth/reissue`,
        {
          method: 'PATCH',
        },
      );

      console.log(headers.get('Set-Cookie'));
      const accessToken = extractAccessToken(headers.get('Set-Cookie'));
      if (accessToken) {
        next.cookies.set('accessToken', accessToken, {
          httpOnly: true,
          secure: true,
          domain: '.dev-malssami.site',
          maxAge: 5 * 60 * 1000,
          path: '/',
        });
      }
    } catch (e) {
      console.log(e);
      console.log('accessToken이 설정되지 않았습니다.');
    }

    // 응답의 Set-Cookie 헤더를 요청의 Cookie 헤더로 복사
    applySetCookie(request, next);
  }
  // 로그인 상태일 경우 로그인 화면 접근 시 홈으로 리다이렉트

  if (pathname === '/' && accessToken && refreshToken) {
    try {
      await getUserInfoServer();
      console.log('로그인된 유저입니다. 홈으로 이동합니다');
      return NextResponse.redirect(`${baseUrl}/home?view=trend&page=1`);
    } catch (e) {
      console.log('정상적이지 않은 토큰이거나, 서버 에러입니다.', e);
      // pass through
    }
  }

  return next;
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};

function applySetCookie(req: NextRequest, res: NextResponse) {
  const setCookies = new ResponseCookies(res.headers);
  const newReqHeaders = new Headers(req.headers);
  const newReqCookies = new RequestCookies(newReqHeaders);

  setCookies.getAll().forEach((cookie) => newReqCookies.set(cookie));

  const dummyRes = NextResponse.next({ request: { headers: newReqHeaders } });
  dummyRes.headers.forEach((value, key) => {
    if (
      key === 'x-middleware-override-headers' ||
      key.startsWith('x-middleware-request-')
    ) {
      res.headers.set(key, value);
    }
  });
}

function extractAccessToken(setCookieHeader: string | null) {
  if (!setCookieHeader) {
    return null;
  }

  const match = setCookieHeader.match(/accessToken=([^;]+)/);
  if (match) {
    return match[1];
  }

  return null;
}
