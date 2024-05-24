import { notFound } from 'next/navigation';
import { backendFetch } from '@/fetcher/instance.ts';
import type { DefaultRes, WordDetail, SearchWord } from './types.ts';

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
    return await backendFetch<DefaultRes<SearchWord>>(`/word/search`, {
      params: { keyword: wordName, page: 1, limit: 50 },
    });
  } catch (e) {
    // NOTE: 상황에 맞는 페이지 보여줘야 함.
    console.log('error', e);
    notFound();
  }
};

export const updateLike = async (wordId: string) => {
  console.log('update');
  try {
    await backendFetch<DefaultRes<never>>(`/like/${wordId}`, {
      method: 'PATCH',
    });
  } catch (e) {
    if (e instanceof Error) {
      console.log(e.message);
    }
    // NOTE: 발생할 수 있는 에러
    // 401 => 권한 없음 => 로그인 모달
    // 500 => 서버 에러
  }
};

export const deleteLike = async (wordId: string) => {
  try {
    await backendFetch<DefaultRes<never>>(`/like/${wordId}`, {
      method: 'DELETE',
    });
  } catch (e) {
    console.log(e);
  }
};
