import { notFound } from 'next/navigation';
import { backendFetch } from '@/fetcher/instance.ts';
import { DefaultRes, WordDetail } from './types.ts';

export const getWordDetail = async (wordId: string) => {
  try {
    return backendFetch<DefaultRes<WordDetail>>(`/word/${wordId}`);
  } catch (e) {
    // NOTE: 상황에 맞는 페이지 보여줘야 함.
    console.log('error');
    notFound();
  }
};
