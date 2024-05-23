'use server';

import { updateLike, deleteLike } from '@/fetcher';

export const addLike = async (wordId: string) => {
  await updateLike(wordId);
};

export const minusLike = async (wordId: string) => {
  await deleteLike(wordId);
};
