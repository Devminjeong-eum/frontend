import { notFound } from 'next/navigation';
import { backendFetch } from '@/fetcher/backendFetch.ts';
import type { DefaultRes, SearchWord } from './types.ts';
import { BackendFetchRes, ErrorRes, LoginData } from './types.ts';

export const getWordSearch = async (wordName: string) => {
  try {
    const res = await backendFetch<BackendFetchRes<DefaultRes<SearchWord>>>(
      `/word/search`,
      {
        params: { keyword: wordName, page: 1, limit: 50 },
      },
    );
    return res.data;
  } catch (e) {
    // NOTE: 상황에 맞는 페이지 보여줘야 함.
    console.log('error', e);
    notFound();
  }
};

export const login = async (code: string) => {
  try {
    return await backendFetch<BackendFetchRes<DefaultRes<LoginData>>>(
      `/auth/kakao`,
      {
        params: { code },
      },
    );
  } catch (e) {
    console.error('login error: ', e);
    throw e;
  }
};

export function isServer() {
  return typeof window === 'undefined';
}

export async function responseInterceptor(response: Response) {
  if (isServer()) {
    console.log('********* after sending request in server *********\n');
    console.log(response.status);
  }

  const data = await response.json();

  if (!response.ok) {
    // NOTE: 서버사이드에서 호출 시에는 로깅합니다.
    if (isServer()) {
      if (400 <= response.status && response.status < 500) {
        console.log('ClientError: ', response.status);
      } else {
        console.error('ServerError : ', response.status);
      }
    }

    //NOTE: 에러 시 내려오는 객체의 형식으로 type assertion 합니다.
    const res = data as ErrorRes;

    // NOTE: axios 기본 동작과 동일하게, response.ok가 아니면 Error 를 throw 합니다.
    throw new Error(
      JSON.stringify({
        statusCode: response.status,
        message: res.message,
      }),
    );
  }

  return {
    status: response.status,
    statusText: response.statusText,
    headers: response.headers,
    data,
  };
}
