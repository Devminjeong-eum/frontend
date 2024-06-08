import { ResolvingMetadata } from 'next';
import PageClient from './PageClient';
//searchParams: { [key: string]: string | string[] | undefined }
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
      url: 'https://dev-malssami.site/quiz',
    },
    twitter: {
      ...twitter,
      title: { absoulte: `'${searchParams.keyword}'의 검색결과 | 데브말싸미` },
      description: `'${searchParams.keyword}'에 대한 검색 결과를 확인해보세요.`,
    },
  };
}

export default function SearchPage() {
  return <PageClient />;
}
