import httpClient from '@/fetcher/fetch.ts';
import * as process from 'process';
import { ErrorRes } from '@/fetcher/types.ts';

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
