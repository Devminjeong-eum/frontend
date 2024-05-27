import httpClient from '@/fetcher/fetch.ts';
import * as process from 'process';
import { ErrorRes } from '@/fetcher/types.ts';
import { cookies } from 'next/headers';

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;

export const backendFetch = httpClient({
  baseUrl: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  cache: 'no-cache',
  interceptors: {
    request: async (url, init) => {
      // NOTE: 로깅
      console.log('********* before sending request *********');
      console.log('request url: ', url.toString());
      console.log('request method: ', init.method);
      console.log('request header: ', init.headers);

      // NOTE: ServerSide 일 때에는 쿠키를 직접 넣어 요청해야 합니다.
      if (typeof window === 'undefined') {
        const accessToken = cookies().get('accessToken')?.value;
        const refreshToken = cookies().get('refreshToken')?.value;

        // NOTE: 직접 config 객체를 변경합니다. 개발 시 유의하세요.
        init.headers = {
          ...init.headers,
          Cookie: `accessToken=${accessToken}; refreshToken=${refreshToken}`,
        };

        console.log(init.headers);
      }
      return init;
    },

    response: async (response) => {
      // NOTE: 로깅
      console.log('********* after receiving response *********');
      console.log('is it ok? ', response.ok);

      // NOTE: response.ok가 아닐 때에는 Error를 발생시킨다. (axios 동작과 비슷하게)
      if (!response.ok) {
        const res = (await response.json()) as ErrorRes;

        if (400 <= response.status && response.status < 500) {
          console.log('ClientError: ', response.status);
        } else {
          console.error('ServerError : ', response.status);
        }
        throw new Error(
          JSON.stringify({ statusCode: response.status, message: res.message }),
        );
      }
      return response.json();
    },
  },
});

// NOTE: server에서 내려준 Cookie를 반환합니다.
export const serverFetch = httpClient({
  baseUrl: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  cache: 'no-cache',
  interceptors: {
    request: async (url, init) => {
      // NOTE: 로깅
      console.log('********* before sending request *********');
      console.log('request url: ', url.toString());
      console.log('request method: ', init.method);

      return init;
    },
    response: async (response) => {
      // NOTE: 로깅
      console.log('********* after receiving response *********');
      console.log('is it ok? ', response.ok);

      // NOTE: response.ok가 아닐 때에는 Error를 발생시킨다. (axios 동작과 비슷하게)
      if (!response.ok) {
        const res = (await response.json()) as ErrorRes;

        if (400 <= response.status && response.status < 500) {
          console.log('ClientError: ', response.status);
        } else {
          console.error('ServerError : ', response.status);
        }

        throw new Error(
          JSON.stringify({ statusCode: response.status, message: res.message }),
        );
      }

      const res = await response.json();

      return {
        cookie: response.headers.get('Set-Cookie'),
        response: res,
      };
    },
  },
});
