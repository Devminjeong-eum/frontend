import { atom } from 'jotai';
import { QuizData } from '@/fetcher/types.ts';

export const guestQuizAtom = atom<{
  correctWordData: QuizData[];
  incorrectWordData: QuizData[];
}>({
  correctWordData: [],
  incorrectWordData: [],
});
