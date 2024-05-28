import { notFound } from 'next/navigation';
import { backendFetch } from '@/fetcher/instance.ts';
import type {
  DefaultRes,
  WordDetail,
  SearchWord,
  QuizData,
  QuizResultData,
  QuizResultUserIdData,
} from './types.ts';

export const getWordDetail = async (wordId: string) => {
  try {
    return await backendFetch<DefaultRes<WordDetail>>(`/word/${wordId}`);
  } catch (e) {
    // NOTE: 상황에 맞는 페이지 보여줘야 함.
    console.log('error');
    notFound();
  }
};

export const login = async (code: string) => {
  try {
    return await backendFetch(`/auth/kakao`, {
      params: { code },
    });
  } catch (e) {
    console.error('login error: ', e);
    throw e;
  }
};

export const getWordSearch = async (wordName: string) => {
  try {
    return await backendFetch<DefaultRes<SearchWord>>(
      `/word/search?keyword=${wordName}&page=1&limit=50`,
    );
  } catch (e) {
    console.log('error', e);
    notFound();
  }
};

export const getQuizData = async () => {
  try {
    return await backendFetch<DefaultRes<QuizData[]>>('/quiz/selection');
  } catch (e) {
    console.log('error', e);
    notFound();
  }
};

export const getQuizResultData = async (id: string) => {
  try {
    return await backendFetch<DefaultRes<QuizResultData>>(`quiz/result/${id}`);
  } catch (e) {
    console.log('error', e);
    notFound();
  }
};

export const postQuizData = async (
  correctWordIds: string[],
  incorrectWordIds: string[],
) => {
  try {
    return await backendFetch<DefaultRes<QuizResultUserIdData>>(
      '/quiz/result',
      {
        method: 'POST',
        headers: {
          Authorization: 'dev_malssami_admin',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ correctWordIds, incorrectWordIds }),
      },
    );
  } catch (e) {
    console.log('error', e);
    notFound();
  }
};
