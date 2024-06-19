import { useQuery } from '@tanstack/react-query';
import { getUserInfo } from '@/fetcher';
import QUERY_KEYS from '@/constants/queryKey';

export default function useGetUser() {
  return useQuery({
    queryKey: [QUERY_KEYS.USER_KEY],
    queryFn: getUserInfo,
  });
}
