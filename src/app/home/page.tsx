import Spinner from '@/components/common/Spinner';
import Header from '@/components/layout/Header';
import HomeClientPage from '@/components/pages/home';
import QUERY_KEYS from '@/constants/queryKey';
import { fetchFakeData_Home } from '@/hooks/query/usePosts';
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query';
import { Suspense } from 'react';

export default async function HomePage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryFn: () => fetchFakeData_Home(1),
    queryKey: [QUERY_KEYS.HOME_KEY, 1],
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
