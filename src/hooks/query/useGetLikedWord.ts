import QUERY_KEYS from '@/constants/queryKey';
import { getLikedWord } from '@/fetcher';
import { useSuspenseQuery } from '@tanstack/react-query';

const useGetLikedWord = (
  pageNumber: number,
  limit: number,
  selectedOption: string,
) => {
  return useSuspenseQuery({
    queryKey: [QUERY_KEYS.LIKEDWORD_KEY, pageNumber, selectedOption],
    queryFn: () => getLikedWord(pageNumber, limit, selectedOption),
    staleTime: 1000 * 60 * 3600,
  });
};
export default useGetLikedWord;
