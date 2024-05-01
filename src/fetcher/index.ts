import httpClient from '@/fetcher/fetch.ts';
import { notFound } from 'next/navigation';
import type { GetWordDetailFunc } from './types.ts';
import * as process from 'process';

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;

const backendFetch = httpClient({
  baseUrl: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  cache: 'no-cache',
  interceptors: {
    request: async (url, init) => {
      // NOTE: 로깅
      console.log('********* before sending request *********');
      console.log('request url: ', url.toString());

      return init;
    },
    response: async (response) => {
      // NOTE: 로깅
      console.log('********* after receiving response *********');
      console.log('is it ok? ', response.ok);

      if (!response.ok) {
        if (400 <= response.status && response.status < 500) {
          console.log('ClientError: ', response.status);
        } else {
          console.error('ServerError : ', response.status);
        }
        throw Error(response.status + response.statusText);
      }
      return response.json();
    },
  },
});

export const getWordDetail: GetWordDetailFunc = async (wordId) => {
  try {
    return await backendFetch<ReturnType<GetWordDetailFunc>>(`words`, {
      params: {
        wordId,
      },
    });
  } catch (e) {
    // NOTE: 상황에 맞는 페이지 보여줘야 함.
    console.log('error');
    notFound();
  }
};
