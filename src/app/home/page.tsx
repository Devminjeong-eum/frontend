import Header from '@/components/layout/Header';
import QUERY_KEYS from '@/constants/queryKey';
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query';
import { Suspense } from 'react';
import {
  getAllPostsServer,
  getCurrentWeekTrendList,
} from '@/fetcher/server.ts';
import HomeSkeleton from '@/components/pages/home/HomeSkeleton';
import type { MainItemType, MainResponse } from '@/types/main';
import HomeClientPage from '@/components/pages/home';

export default async function HomePage({
  searchParams: { page },
}: {
  searchParams: { page: string };
}) {
  const queryClient = new QueryClient();

  await Promise.all([
    queryClient.prefetchQuery({
      queryFn: () => getAllPostsServer(Number(page)),
      queryKey: [QUERY_KEYS.HOME_KEY, Number(page)],
    }),
    queryClient.prefetchQuery({
      queryFn: () => getCurrentWeekTrendList(),
      queryKey: [QUERY_KEYS.TREND],
    }),
  ]);

  const postsData: MainResponse<MainItemType> | undefined =
    queryClient.getQueryData([QUERY_KEYS.HOME_KEY, Number(page)]);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Header />
      <Suspense
        fallback={<HomeSkeleton limit={Number(postsData?.data?.limit)} />}
      >
        <HomeClientPage />
      </Suspense>
    </HydrationBoundary>
  );
}
