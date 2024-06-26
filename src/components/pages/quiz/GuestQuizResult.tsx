'use client';

import { useAtomValue } from 'jotai/react';
import { guestQuizAtom } from '@/store';
import QuizResult from '@/components/pages/quiz/QuizResult.tsx';

export default function GuestQuizResult() {
  const { correctWordData, incorrectWordData } = useAtomValue(guestQuizAtom);
  const score = correctWordData.length * 10;

  const correctWords = correctWordData.map((data) => {
    return {
      ...data,
      pronunciation: data.correct,
      isLike: false,
    };
  });

  const incorrectWords = incorrectWordData.map((data) => {
    return {
      ...data,
      pronunciation: data.correct,
      isLike: false,
    };
  });

  return (
    <QuizResult
      quizResultId={'guest'}
      userName={'사용자'}
      score={score}
      correctWords={correctWords}
      incorrectWords={incorrectWords}
    />
  );
}
