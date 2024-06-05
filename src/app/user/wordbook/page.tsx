import Wordbook from '@/components/pages/wordbook';
import QUERY_KEYS from '@/constants/queryKey';
import {
  DROPDOWN_DEFAULT_OPTION,
  sortOptionMapping,
} from '@/constants/sortingOptions';
import { getLikedWord } from '@/fetcher';
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query';

export default async function WordbookPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryFn: () =>
      getLikedWord(1, 10, sortOptionMapping[DROPDOWN_DEFAULT_OPTION]),
    queryKey: [
      QUERY_KEYS.LIKEDWORD_KEY,
      1,
      sortOptionMapping[DROPDOWN_DEFAULT_OPTION],
    ],
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Wordbook />
    </HydrationBoundary>
  );
}
