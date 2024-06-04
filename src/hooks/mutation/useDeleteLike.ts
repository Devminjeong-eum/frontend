import { useMutation } from '@tanstack/react-query';
import { deleteLike } from '@/fetcher';

const useDeleteLike = (wordId: string) => {
  return useMutation({
    mutationFn: () => deleteLike(wordId),
  });
};

export default useDeleteLike;
