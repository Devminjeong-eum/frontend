import { useMutation } from '@tanstack/react-query';
import { deleteLike } from '@/fetcher';

const useDeleteLike = () => {
  return useMutation({
    mutationFn: (wordId: string) => deleteLike(wordId),
  });
};

export default useDeleteLike;
