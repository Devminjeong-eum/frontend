import QUERY_KEYS from '@/constants/queryKey';
import { useSuspenseQuery } from '@tanstack/react-query';
import { getWordSearch } from '@/fetcher';

export const useGetSearchWord = (word: string) => {
  return useSuspenseQuery({
    queryKey: [QUERY_KEYS.SEARCH_KEY, word],
    queryFn: () => getWordSearch(word),
  });
};
