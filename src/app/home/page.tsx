import Header from '@/components/layout/Header';
import HomeClientPage from '@/components/pages/home';
import QUERY_KEYS from '@/constants/queryKey';
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query';
import { Suspense } from 'react';
import { cookies } from 'next/headers';
import { getAllPostsServer } from '@/fetcher/server.ts';
import HomeSkeleton from '@/components/pages/home/HomeSkeleton';

export default async function HomePage({
  searchParams: { page },
}: {
  searchParams: { page: string };
}) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryFn: () => getAllPostsServer(Number(page)),
    queryKey: [QUERY_KEYS.HOME_KEY, Number(page)],
  });

  const isToken = cookies().has('accessToken');

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Header isToken={isToken} />
      <Suspense fallback={<HomeSkeleton />}>
        <HomeClientPage />
      </Suspense>
    </HydrationBoundary>
  );
}
