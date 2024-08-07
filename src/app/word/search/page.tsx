import { ResolvingMetadata } from 'next';
import Header from '@/components/layout/Header';
import Search from '@/components/pages/search';

// eslint-disable-next-line react-refresh/only-export-components
export async function generateMetadata(
  { searchParams }: { searchParams: { keyword: string } },
  parent: ResolvingMetadata,
) {
  const parentMetadata = (await parent) || [];
  const decodedKeyword = decodeURI(searchParams.keyword);

  const openGraph = parentMetadata?.openGraph ?? {};
  const twitter = parentMetadata?.twitter ?? {};

  return {
    ...parentMetadata,
    title: {
      absolute: `'${decodedKeyword}'의 검색결과 | 데브말싸미`,
    },
    description: `'${decodedKeyword}'에 대한 검색 결과를 확인해보세요.`,
    robots: {
      index: false,
      follow: false,
    },
    openGraph: {
      ...openGraph,
      title: { absolute: `'${decodedKeyword}'의 검색결과 | 데브말싸미` },
      description: `'${decodedKeyword}'에 대한 검색 결과를 확인해보세요.`,
      url: `https://dev-malssami.site/word/search?keyword=${decodedKeyword}`,
    },
    twitter: {
      ...twitter,
      title: { absolute: `'${decodedKeyword}'의 검색결과 | 데브말싸미` },
      description: `'${decodedKeyword}'에 대한 검색 결과를 확인해보세요.`,
    },
  };
}

type Props = {
  searchParams: { keyword: string };
};

export default async function SearchPage({ searchParams }: Props) {
  const word = decodeURI(searchParams.keyword);

  return (
    <div className="h-full bg-[#FBFCFE]">
      <Header />
      <main className="rounded-[24px] bg-[#FBFCFE] -mt-[20px] z-50 flex flex-col gap-[8px]">
        <Search word={word} />
      </main>
    </div>
  );
}
