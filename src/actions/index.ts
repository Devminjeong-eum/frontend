'use server';

import { revalidatePath } from 'next/cache';
import { serverFetch } from '@/fetcher/serverFetch.ts';
import { BackendFetchRes, DefaultRes } from '@/fetcher/types.ts';

export const addLike = async (wordId: string) => {
  await updateLike(wordId);
  revalidatePath(`word/${wordId}`);
};

export const subLike = async (wordId: string) => {
  await deleteLike(wordId);
  revalidatePath(`word/${wordId}`);
};

export const updateLike = async (wordId: string) => {
  try {
    console.log('updateLike');
    await serverFetch<BackendFetchRes<DefaultRes<never>>>(`/like/${wordId}`, {
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
    await serverFetch<BackendFetchRes<DefaultRes<never>>>(`/like/${wordId}`, {
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
