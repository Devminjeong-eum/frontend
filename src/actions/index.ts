'use server';
// NOTE: Server Action을 위한 함수

import { updateLike, deleteLike } from '@/fetcher';
import { revalidatePath } from 'next/cache';

export const addLike = async (wordId: string) => {
  await updateLike(wordId);
  revalidatePath(`word/${wordId}`);
};

export const subLike = async (wordId: string) => {
  await deleteLike(wordId);
  revalidatePath(`word/${wordId}`);
};
