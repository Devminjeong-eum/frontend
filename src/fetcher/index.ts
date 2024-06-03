import { notFound } from 'next/navigation';
import type {
  DefaultRes,
  SearchWord,
  BackendFetchRes,
  LoginData,
  likedWord,
} from './types.ts';
import { MainDataType } from '@/types/main.ts';
import { backendFetch } from '@/fetcher/backendFetch.ts';

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

// NOTE: client side fetch
export const updateLike = async (wordId: string) => {
  try {
    await backendFetch<BackendFetchRes<DefaultRes<never>>>(`/like/${wordId}`, {
      method: 'PATCH',
    });
  } catch (e) {
    if (e instanceof Error) {
      console.log(e.message);
    }
    // 401 => 권한 없음 => 로그인 모달
    // 500 => 서버 에러
  }
};

// NOTE: client side fetch
export const deleteLike = async (wordId: string) => {
  try {
    await backendFetch<BackendFetchRes<DefaultRes<never>>>(`/like/${wordId}`, {
      method: 'DELETE',
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

export const getAllPosts = async (currentPage: number) => {
  try {
    const res = await backendFetch<DefaultRes<MainDataType>>(
      `/word/list?page=${currentPage}&limit=10`,
    );

    return res.data;
  } catch (e) {
    console.log('error', e);
    notFound();
  }
};

export const getLikedWord = async (page: number, limit: number) => {
  try {
    const res = await backendFetch<DefaultRes<likedWord>>(`/word/like`, {
      params: {
        page,
        limit,
      },
    });

    return res.data;
  } catch (e) {
    // NOTE: 상황에 맞는 페이지 보여줘야 함.
    console.log('error', e);
    notFound();
  }
};
