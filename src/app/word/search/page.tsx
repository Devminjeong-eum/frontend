import { ResolvingMetadata } from 'next';
import Header from '@/components/layout/Header';
import SearchItem from '@/components/pages/search/SearchItem';
import NotFoundWord from '@/components/pages/search/NotFoundWord';
import Link from 'next/link';
import { getWordSearch } from '@/fetcher';

// eslint-disable-next-line react-refresh/only-export-components
export async function generateMetadata(
  {
    searchParams,
  }: { searchParams: { [key: string]: string | string[] | undefined } },
  parent: ResolvingMetadata,
) {
  const parentMetadata = (await parent) || [];

  const openGraph = parentMetadata?.openGraph ?? {};
  const twitter = parentMetadata?.twitter ?? {};

  return {
    ...parentMetadata,
    title: {
      absolute: `'${searchParams.keyword}'의 검색결과 | 데브말싸미`,
    },
    description: `'${searchParams.keyword}'에 대한 검색 결과를 확인해보세요.`,
    robots: {
      index: false,
      follow: false,
    },
    openGraph: {
      ...openGraph,
      title: { absoulte: `'${searchParams.keyword}'의 검색결과 | 데브말싸미` },
      description: `'${searchParams.keyword}'에 대한 검색 결과를 확인해보세요.`,
      url: 'https://dev-malssami.site/search',
    },
    twitter: {
      ...twitter,
      title: { absoulte: `'${searchParams.keyword}'의 검색결과 | 데브말싸미` },
      description: `'${searchParams.keyword}'에 대한 검색 결과를 확인해보세요.`,
    },
  };
}

type Props = {
  searchParams: { keyword: string };
};

export default async function SearchPage({ searchParams }: Props) {
  const wordName = decodeURI(searchParams.keyword);

  const {
    data: { totalCount, data },
  } = await getWordSearch(wordName);

  return (
    <>
      <Header />
      <main className="p-5 rounded-[24px] bg-[#FBFCFE] -mt-[20px] z-50 flex flex-col gap-[8px]">
        {!totalCount && <NotFoundWord />}
        {data.map((item) => (
          <Link href={`/words/${item.id}`}>
            <SearchItem key={item.id} item={item} />
          </Link>
        ))}
      </main>
    </>
  );
}
