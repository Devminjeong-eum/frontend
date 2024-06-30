import { serverFetch } from '@/fetcher/serverFetch.ts';
import {
  DefaultRes,
  FetchRes,
  TrendWordData,
  UserData,
} from '@/fetcher/types.ts';
import { MainItemType, PaginationRes } from '@/types/main.ts';
import { notFound } from 'next/navigation';

export const getAllPostsServer = async (currentPage: number) => {
  try {
    const res = await serverFetch<
      FetchRes<DefaultRes<PaginationRes<MainItemType[]>>>
    >(`/word/list`, {
      params: {
        page: currentPage,
        limit: 16,
      },
    });

    return res.data;
  } catch (e) {
    console.log('error', e);
    notFound();
  }
};

export const getUserInfoServer = async () => {
  return await serverFetch<FetchRes<DefaultRes<UserData>>>(`/user`);
};

export const getCurrentWeekTrendList = async () => {
  try {
    return await serverFetch<FetchRes<DefaultRes<TrendWordData>>>(
      `ranking/week?year=2024&week=25`,
    );
  } catch (e) {
    console.log('error', e);
    notFound();
  }
};
