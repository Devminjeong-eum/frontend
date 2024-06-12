'use server';

import { revalidatePath } from 'next/cache';
import { serverFetch } from '@/fetcher/serverFetch.ts';
import { FetchRes, DefaultRes } from '@/fetcher/types.ts';

export const addLike = async (wordId: string) => {
  try {
    await serverFetch<FetchRes<DefaultRes<never>>>(`/like/${wordId}`, {
      method: 'PATCH',
    });
  } catch (e) {
    console.log(e);
    // NOTE: 발생할 수 있는 에러
    // 401 => 권한 없음
    // 500 => 서버 에러
  }

  revalidatePath(`word/${wordId}`);
};

export const subLike = async (wordId: string) => {
  try {
    await serverFetch<FetchRes<DefaultRes<never>>>(`/like/${wordId}`, {
      method: 'DELETE',
    });
  } catch (e) {
    console.log(e);
    // NOTE: 발생할 수 있는 에러
    // 401 => 권한 없음
    // 500 => 서버 에러
  }
  // NOTE: refresh하고 싶은 path를 작성
  revalidatePath(`word/${wordId}`);
};
