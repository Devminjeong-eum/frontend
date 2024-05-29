import httpClient from '@/fetcher/fetch.ts';
import * as process from 'process';
import { ErrorRes } from '@/fetcher/types.ts';
import { cookies, headers } from 'next/headers';
import { NextResponse } from 'next/server';

const isServer = () => {
  return typeof window === 'undefined';
};

// NOTE: 백엔드에 직접 요청하는 client side Fetch
export const backendFetch = httpClient({
  baseUrl: process.env.NEXT_PUBLIC_BACKEND_BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  cache: 'no-cache',
  credentials: 'include',
  interceptors: {
    request: async (url, init) => {
      // NOTE: 로깅
      console.log('********* before sending request *********');
      console.log('request url: ', url.toString());
      console.log(init);

      const accessToken = cookies().get('accessToken')?.value;
      const refreshToken = cookies().get('refreshToken')?.value;

      console.log(accessToken, refreshToken);
      if (isServer()) {
        if (accessToken || refreshToken) {
          init.headers = {
            ...init.headers,
            Cookie: `accessToken: ${accessToken}; refreshToken: ${refreshToken}`,
          };
        }
      }
      return init;
    },
    response: async (response: NextResponse) => {
      if (!response.ok) {
        const res = (await response.json()) as ErrorRes;

        if (400 <= response.status && response.status < 500) {
          console.log('ClientError: ', response.status);
        } else {
          console.error('ServerError : ', response.status);
        }

        throw new Error(
          JSON.stringify({
            statusCode: response.status,
            message: res.message,
          }),
        );
      }

      console.log(response instanceof NextResponse);

      console.log('cookies: ', response.headers.get('Set-Cookie'));
      const data = response.json();

      return {
        status: response.status,
        statusText: response.statusText,
        headers: response.headers,
        data,
      };
    },
  },
});

// export const proxyFetch = httpClient({
//   baseUrl: 'http://localhost:3000/api/proxy',
//   headers: { 'Content-Type': 'application/json' },
//   cache: 'no-cache',
//   credentials: 'include',
//   interceptors: {
//     request: async (_, init) => {
//       // NOTE: ServerSide 일 때에는 쿠키를 직접 넣어 요청해야 합니다.
//
//       const accessToken = cookies().get('accessToken')?.value;
//       const refreshToken = cookies().get('refreshToken')?.value;
//
//       console.log(accessToken, refreshToken);
//
//       return init;
//     },
//     response: async (response) => {
//       // NOTE: 로깅
//       // NOTE: response.ok가 아닐 때에는 Error를 발생시킨다. (axios 동작과 비슷하게)
//       if (!response.ok) {
//         const res = (await response.json()) as ErrorRes;
//
//         if (400 <= response.status && response.status < 500) {
//           console.log('ClientError: ', response.status);
//         } else {
//           console.error('ServerError : ', response.status);
//         }
//
//         throw new Error(
//           JSON.stringify({
//             statusCode: response.status,
//             message: res.message,
//           }),
//         );
//       }
//
//       const data = response.json();
//
//       return {
//         status: response.status,
//         statusText: response.statusText,
//         headers: response.headers,
//         data,
//       };
//     },
//   },
// });
