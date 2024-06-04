import { useMutation } from '@tanstack/react-query';
import { updateLike } from '@/fetcher';

const useAddLike = (wordId: string) => {
  return useMutation({
    mutationFn: () => updateLike(wordId),
  });
};

export default useAddLike;
