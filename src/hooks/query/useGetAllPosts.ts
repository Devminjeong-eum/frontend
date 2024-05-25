import QUERY_KEYS from '@/constants/queryKey';
import { useSuspenseQuery } from '@tanstack/react-query';
import { MainDataType } from '@/types/main';
import { getAllPosts } from '@/fetcher';

const useGetAllPosts = (pageNumber: number) => {
  return useSuspenseQuery<MainDataType>({
    queryKey: [QUERY_KEYS.HOME_KEY, pageNumber],
    queryFn: () => getAllPosts(pageNumber),
    staleTime: 1000 * 60 * 3600,
  });
};

export default useGetAllPosts;
