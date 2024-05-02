import { WordDetail } from '@/types/main.ts';

export type GetWordDetailFunc = (
  wordId: number,
) => Promise<WordDetail | undefined>;
