import QUERY_KEYS from '@/constants/queryKey';
import { getLikedWord } from '@/fetcher';
import { useSuspenseQuery } from '@tanstack/react-query';

const useGetLikedWord = (pageNumber: number, limit: number) => {
  return useSuspenseQuery({
    queryKey: [QUERY_KEYS.LIKEDWORD_KEY, pageNumber],
    queryFn: () => getLikedWord(pageNumber, limit),
    staleTime: 1000 * 60 * 3600,
  });
};
export default useGetLikedWord;
