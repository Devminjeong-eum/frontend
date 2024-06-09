import { useMutation } from '@tanstack/react-query';
import { updateLike } from '@/fetcher';

const useAddLike = () => {
  return useMutation({
    mutationFn: (wordId: string) => updateLike(wordId),
  });
};

export default useAddLike;
