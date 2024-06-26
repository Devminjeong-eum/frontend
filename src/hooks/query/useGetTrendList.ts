import QUERY_KEYS from '@/constants/queryKey';
import { useSuspenseQuery } from '@tanstack/react-query';
import { getCurrentWeekTrendList } from '@/fetcher/server';

export const useGetTrendList = () => {
  return useSuspenseQuery({
    queryKey: [QUERY_KEYS.TREND],
    queryFn: () => getCurrentWeekTrendList(),
    select: (response) => response.data.data
  });
};
