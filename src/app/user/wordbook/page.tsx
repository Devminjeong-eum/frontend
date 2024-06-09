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
import { ResolvingMetadata } from 'next';

// eslint-disable-next-line react-refresh/only-export-components
export async function generateMetadata(
  _: { [x: string]: never },
  parent: ResolvingMetadata,
) {
  const parentMetadata = (await parent) || [];

  const openGraph = parentMetadata?.openGraph ?? {};
  const twitter = parentMetadata?.twitter ?? {};

  return {
    ...parentMetadata,
    title: '단어장',
    description: '좋아요한 단어를 확인하고 관리해보세요.',
    robots: {
      index: false,
      follow: false,
    },
    openGraph: {
      ...openGraph,
      title: '단어장',
      description: '좋아요한 단어를 확인하고 관리해보세요.',
      url: 'https://dev-malssami.site/user/wordbook',
    },
    twitter: {
      ...twitter,
      title: '단어장',
      description: '좋아요한 단어를 확인하고 관리해보세요.',
    },
  };
}

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
