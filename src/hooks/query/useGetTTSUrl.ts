import QUERY_KEYS from '@/constants/queryKey';
import { getTTSUrl } from '@/fetcher';
import { useQuery } from '@tanstack/react-query';

const useGetTTSUrl = (id: string) => {
  return useQuery({
    queryKey: [QUERY_KEYS.TTS_KEY, id],
    queryFn: () => getTTSUrl(id),
  });
};

export default useGetTTSUrl;
