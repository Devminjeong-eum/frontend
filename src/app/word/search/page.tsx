import Header from '@/components/layout/Header';
import SearchClientPage from '@/components/pages/search';

type Props = {
  searchParams: { keyword: string };
};

export default async function SearchPage({ searchParams }: Props) {
  const wordName = decodeURI(searchParams.keyword);

  return (
    <>
      <Header />
      <SearchClientPage wordName={wordName} />
    </>
  );
}
