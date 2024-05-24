'use server';
// NOTE: Server Action을 위한 함수

import { updateLike, deleteLike } from '@/fetcher';

export const addLike = async (wordId: string) => {
  await updateLike(wordId);
};

export const subLike = async (wordId: string) => {
  await deleteLike(wordId);
};
