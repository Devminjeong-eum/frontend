import httpClient from '@/fetcher/fetch.ts';
import * as process from 'process';

import { responseInterceptor } from '@/fetcher/interceptors.ts';
import { isServer } from '@/utils';

// NOTE: 별도의 쿠키 조작을 하지 않는 기본 fetch 입니다. backend api에 request를 전송합니다.
// client side 에서 사용할 수 있습니다.
export const backendFetch = httpClient({
  baseUrl: process.env.NEXT_PUBLIC_BACKEND_BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  cache: 'no-cache',
  credentials: 'include',
  interceptors: {
    request: async (url, init) => {
      if (isServer()) {
        console.log('********* before sending request in server *********');
        console.log('request to: ', url.toString());
      }
      return init;
    },
    response: responseInterceptor,
  },
});
