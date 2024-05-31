'use server';

import httpClient from '@/fetcher/fetch.ts';
import * as process from 'process';
import { cookies } from 'next/headers';
import { responseInterceptor } from '@/fetcher/interceptors.ts';

// NOTE: 서버 사이드 전용으로 사용하는 fetch 입니다. backend api에 request를 요청합니다.
// request interceptors 에서 Cookie header에 쿠키를 넣어줍니다.

export const serverFetch = httpClient({
  baseUrl: process.env.NEXT_PUBLIC_BACKEND_BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  cache: 'no-cache',
  credentials: 'include',
  interceptors: {
    request: async (url, init) => {
      // NOTE: 로깅
      console.log('********* before sending request in server *********');
      console.log('request to: ', url.toString());

      // NOTE: Cookie를 직접 세팅해줘야 합니다.
      const accessToken = cookies().get('accessToken')?.value;
      const refreshToken = cookies().get('refreshToken')?.value;
      console.log('accessToken: ', accessToken);
      console.log('refreshToken: ', refreshToken);

      if (accessToken || refreshToken) {
        init.headers = {
          ...init.headers,
          Cookie: `refreshToken=${refreshToken}; accessToken=${accessToken}`,
        };
      }
      return init;
    },

    response: responseInterceptor,
  },
});
