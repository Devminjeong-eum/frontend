// 쿼리스트링 사용 시 /app/search/page.tsx

import Header from '@/components/layout/Header';
import SearchClientPage from '@/components/pages/search';

type Props = {
  params: { wordName: string };
  // searchParams: { keyword: string };
};

export default async function SearchPage({ params }: Props) {
  const wordName = decodeURI(params.wordName);
  // const wordName = decodeURI(searchParams.keyword);

  return (
    <>
      <Header />
      <SearchClientPage wordName={wordName} />
    </>
  );
}
