import { notFound } from 'next/navigation';
import type { GetWordDetailFunc } from './types.ts';
import { backendFetch } from '@/fetcher/instance.ts';

export const getWordDetail: GetWordDetailFunc = async (wordId) => {
  try {
    return await backendFetch<ReturnType<GetWordDetailFunc>>(`/words`, {
      method: 'GET',
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

// NOTE: 임시 값
export const putWordLike = async (isLike: boolean) => {
  try {
    return await backendFetch<ReturnType<never>>(`/words/like`, {
      method: 'PUT',
      body: JSON.stringify({
        isLike,
      }),
    });
  } catch (e) {
    console.log('error');
  }
};
