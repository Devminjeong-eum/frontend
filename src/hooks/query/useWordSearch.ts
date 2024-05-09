import QUERY_KEYS from '@/constants/queryKey';
import { useSuspenseQuery } from '@tanstack/react-query';

export type SearchWordData = {
  id: string;
  name: string;
  description: string;
  diacritic: string[];
  pronunciation: string[];
  wordLike: boolean;
};

export type SearchWord = {
  data: {
    data: SearchWordData[];
  };
};

export const getSearchWord = async (wordName: string) => {
  const res = await fetch(
    `https://api.dev-malssami.site/word/search?keyword=${wordName}&page=1&limit=1`,
  );
  return res.json();
};

export const useWordSearch = (wordName: string) => {
  return useSuspenseQuery<SearchWord>({
    queryKey: [QUERY_KEYS.HOME_KEY, wordName],
    queryFn: () => getSearchWord(wordName),
    staleTime: 1000 * 60 * 3600,
  });
};
