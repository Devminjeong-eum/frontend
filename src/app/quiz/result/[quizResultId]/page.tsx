import QuizResult from '@/components/pages/quiz/QuizResult';
import { serverFetch } from '@/fetcher/serverFetch';
import { notFound } from 'next/navigation';
import { FetchRes, DefaultRes, QuizResultData } from '@/fetcher/types';
import GuestQuizResult from '@/components/pages/quiz/GuestQuizResult.tsx';

export type Props = {
  params: { quizResultId: string };
};

const getQuizResultData = async (id: string) => {
  try {
    return await serverFetch<FetchRes<DefaultRes<QuizResultData>>>(
      `/quiz/result/${id}`,
    );
  } catch (e) {
    console.log('error', e);
    notFound();
  }
};

export default async function QuizResultPage({ params }: Props) {
  const { quizResultId } = params;

  if (quizResultId === 'guest') {
    return <GuestQuizResult />;
  }

  const {
    data: {
      data: { userName, score, correctWords, incorrectWords },
    },
  } = await getQuizResultData(quizResultId);

  return (
    <QuizResult
      quizResultId={quizResultId}
      userName={userName}
      score={score}
      correctWords={correctWords}
      incorrectWords={incorrectWords}
    />
  );
}
