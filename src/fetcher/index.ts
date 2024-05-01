import httpClient from '@/fetcher/fetch.ts';
import { WordDetail } from '@/types/main.ts';
import { notFound } from 'next/navigation';

const BASE_URL = 'https://api.dev-malssami.site';

const backendFetch = httpClient({
  baseUrl: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  cache: 'no-cache',
  interceptors: {
    request: async (url, init) => {
      console.log('********* before sending request *********');
      console.log('url: ', url.toString());
      console.log('requestInit:', init);

      return init;
    },
    response: async (response) => {
      console.log('********* after receiving response *********');
      console.log('response: ', response);
      console.log('is it ok?: ', response.ok);

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

type GetWordDetailFunc = (wordId: number) => Promise<WordDetail | undefined>;

export const getWordDetail: GetWordDetailFunc = async (wordId) => {
  try {
    const response = await backendFetch<ReturnType<GetWordDetailFunc>>(
      `words`,
      {
        params: {
          wordId,
        },
      },
    );
    return response;
  } catch (e) {
    // NOTE: 상황에 맞는 페이지 보여줘야 함.
    console.log('error');
    notFound();
  }
};
