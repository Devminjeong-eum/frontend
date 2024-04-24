import WordDetailClientPage from '@/components/pages/detail';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { fetchFakeWordDetail } from '@/hooks/query/useWordDetail.ts';
import { notFound } from 'next/navigation';

export default async function WordsPage({
  params,
}: {
  params: { wordId: string };
}) {
  const queryClient = new QueryClient();
  const wordId = Number(params.wordId);

  if (isNaN(wordId)) {
    notFound();
  }

  await queryClient.prefetchQuery({
    queryFn: () => fetchFakeWordDetail(wordId),
    queryKey: ['get_wordDetail', wordId],
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <WordDetailClientPage wordId={wordId} />
    </HydrationBoundary>
  );
}
