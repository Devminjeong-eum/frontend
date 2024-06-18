import { useSuspenseQuery } from '@tanstack/react-query';
import { getQuizData } from '@/fetcher';
import QUERY_KEYS from '@/constants/queryKey';

export const useGetQuizData = () => {
  return useSuspenseQuery({
    queryKey: [QUERY_KEYS.QUIZ_KEY],
    queryFn: () => getQuizData(),
  });
};
