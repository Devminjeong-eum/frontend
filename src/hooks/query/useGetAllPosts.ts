import QUERY_KEYS from '@/constants/queryKey';
import { useSuspenseQuery } from '@tanstack/react-query';
import { getAllPostsClient } from '@/fetcher';

const useGetAllPosts = (pageNumber: number) => {
  return useSuspenseQuery({
    queryKey: [QUERY_KEYS.HOME_KEY, pageNumber],
    queryFn: () => getAllPostsClient(pageNumber),
    staleTime: 1000 * 60 * 3600,
  });
};

export default useGetAllPosts;
