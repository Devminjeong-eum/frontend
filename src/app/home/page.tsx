import Spinner from '@/components/common/Spinner';
import Header from '@/components/layout/Header';
import HomeClientPage from '@/components/pages/home';
import QUERY_KEYS from '@/constants/queryKey';

import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query';
import { Suspense } from 'react';
import { getAllPostsServer } from '@/fetcher/server.ts';

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

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Header />
      <Suspense fallback={<Spinner />}>
        <HomeClientPage />
      </Suspense>
    </HydrationBoundary>
  );
}
