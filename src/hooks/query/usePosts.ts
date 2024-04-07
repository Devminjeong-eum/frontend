import { fetchPosts } from '@/api/main';
import { MainDataType } from '@/types/main';
import { useQuery } from '@tanstack/react-query';

const MAIN_QUERY_KEY = 'posts';

const usePosts = (pageNumber: number) => {
  return useQuery<MainDataType>({
    queryKey: [MAIN_QUERY_KEY, pageNumber],
    queryFn: () => fetchPosts(pageNumber),
    staleTime: 1000 * 60 * 3600,
  });
};

export default usePosts;
