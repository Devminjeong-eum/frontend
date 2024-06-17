import { useQuery } from '@tanstack/react-query';
import { checkUserAuthentication } from '@/fetcher';
import QUERY_KEYS from '@/constants/queryKey';

export default function useAuthQuery() {
  const { data } = useQuery({
    queryKey: [QUERY_KEYS.AUTH_KEY],
    queryFn: checkUserAuthentication,
  });

  return { data: data?.data };
}
