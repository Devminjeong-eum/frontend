import { notFound } from 'next/navigation';
import type { DefaultRes, SearchWord, LoginData, likedWord } from './types.ts';
import { PaginationRes, MainItemType } from '@/types/main.ts';
import { backendFetch } from '@/fetcher/backendFetch.ts';
import { FetchRes } from './types.ts';

export const getWordSearch = async (wordName: string) => {
  try {
    const res = await backendFetch<FetchRes<DefaultRes<SearchWord>>>(
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
    return await backendFetch<FetchRes<DefaultRes<LoginData>>>(`/auth/kakao`, {
      params: { code },
    });
  } catch (e) {
    console.error('login error: ', e);
    throw e;
  }
};

// NOTE: for client side fetch
export const updateLike = async (wordId: string) => {
  try {
    await backendFetch<FetchRes<DefaultRes<never>>>(`/like/${wordId}`, {
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

// NOTE: for client side fetch
export const deleteLike = async (wordId: string) => {
  try {
    await backendFetch<FetchRes<DefaultRes<never>>>(`/like/${wordId}`, {
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
    const res = await backendFetch<
      FetchRes<DefaultRes<PaginationRes<MainItemType[]>>>
    >(`/word/list`, {
      params: {
        page: currentPage,
        limit: 10,
      },
    });

    return res.data;
  } catch (e) {
    console.log('error', e);
    notFound();
  }
};

export const getLikedWord = async (
  page: number,
  limit: number,
  selectedOption: string,
) => {
  try {
    return await backendFetch<DefaultRes<likedWord>>(
      `/word/like?page=${page}&limit=${limit}&sorting=${selectedOption}`,
      {
        headers: {
          Authorization: 'dev_malssami_admin',
        },
      },
    );
  } catch (e) {
    // NOTE: 상황에 맞는 페이지 보여줘야 함.
    console.log('error', e);
    notFound();
  }
};
