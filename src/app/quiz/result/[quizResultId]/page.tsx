import { getQuizResultData } from '@/fetcher';
import QuizResult from '@/components/pages/quiz/QuizResult';

export type Props = {
  params: { quizResultId: string };
};

export default async function QuizResultPage({ params }: Props) {
  const { quizResultId } = params;
  const {
    data: {
      data: { score, correctWords, incorrectWords },
    },
  } = await getQuizResultData(quizResultId);

  return (
    <QuizResult
      score={score}
      correctWords={correctWords}
      incorrectWords={incorrectWords}
    />
  );
}
