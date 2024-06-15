import QuizResult from '@/components/pages/quiz/QuizResult';
import { serverFetch } from '@/fetcher/serverFetch';
import { notFound } from 'next/navigation';
import { FetchRes, DefaultRes, QuizResultData } from '@/fetcher/types';

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

  if (quizResultId === 'unknown') {
    return <div>로그인 안 한 유저 </div>;
  }

  const {
    data: {
      data: { score, correctWords, incorrectWords },
    },
  } = await getQuizResultData(quizResultId);

  return (
    <QuizResult
      quizResultId={quizResultId}
      score={score}
      correctWords={correctWords}
      incorrectWords={incorrectWords}
    />
  );
}
