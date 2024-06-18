import { useMutation } from '@tanstack/react-query';
import { postQuizResult } from '@/fetcher';

const usePostsQuizResult = () => {
  return useMutation({
    mutationFn: ({
      correctWordIds,
      incorrectWordIds,
    }: {
      correctWordIds: string[];
      incorrectWordIds: string[];
    }) => postQuizResult(correctWordIds, incorrectWordIds),
  });
};

export default usePostsQuizResult;
