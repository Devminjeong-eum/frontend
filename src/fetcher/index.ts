import { notFound } from 'next/navigation';
import { backendFetch } from '@/fetcher/instance.ts';
import type { DefaultRes, WordDetail, SearchWord, likedWord } from './types.ts';
import { MainDataType } from '@/types/main.ts';

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
    // NOTE: 상황에 맞는 페이지 보여줘야 함.
    console.log('error', e);
    notFound();
  }
};

export const getAllPosts = async (currentPage: number) => {
  try {
    return await backendFetch<DefaultRes<MainDataType>>(
      `/word/list?page=${currentPage}&limit=10`,
    );
  } catch (e) {
    console.log('error', e);
    notFound();
  }
};

export const getLikedWord = async (page: number, limit: number) => {
  try {
    return await backendFetch<DefaultRes<likedWord>>(`/word/like`, {
      params: {
        page,
        limit,
      },
    });
  } catch (e) {
    // NOTE: 상황에 맞는 페이지 보여줘야 함.
    console.log('error', e);
    notFound();
  }
};
