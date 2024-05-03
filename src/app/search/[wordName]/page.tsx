import Spinner from '@/components/common/Spinner';
import Header from '@/components/layout/Header';
import SearchClientPage from '@/components/pages/search';
import QUERY_KEYS from '@/constants/queryKey';
import { fetchFakeData_Home } from '@/hooks/query/usePosts';
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query';
import { Suspense } from 'react';

type Props = { params: { wordName: string } };

export default async function SearchPage({ params }: Props) {
  const wordName = decodeURI(params.wordName);
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryFn: () => fetchFakeData_Home(1),
    queryKey: [QUERY_KEYS.HOME_KEY, 1],
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Header />
      <Suspense fallback={<Spinner />}>
        <SearchClientPage wordName={wordName} />
      </Suspense>
    </HydrationBoundary>
  );
}
