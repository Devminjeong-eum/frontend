import QUERY_KEYS from '@/constants/queryKey';
import { useSuspenseQuery } from '@tanstack/react-query';
import type { SearchWord } from '@/types/search';

export const getSearchWord = async (wordName: string) => {
  const res = await fetch(
    `https://api.dev-malssami.site/word/search?keyword=${wordName}&page=1&limit=50`,
  );
  return res.json();
};

export const useWordSearch = (wordName: string) => {
  return useSuspenseQuery<SearchWord>({
    queryKey: [QUERY_KEYS.SEARCH_KEY, wordName],
    queryFn: () => getSearchWord(wordName),
    staleTime: 1000 * 60 * 3600,
  });
};
