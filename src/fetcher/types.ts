import { DefaultRes, WordDetail } from '@/types/main.ts';

export type GetWordDetailFunc = (
  wordId: string,
) => Promise<DefaultRes<WordDetail>>;
