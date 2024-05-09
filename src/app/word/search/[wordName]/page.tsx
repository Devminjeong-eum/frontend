import Header from '@/components/layout/Header';
import SearchClientPage from '@/components/pages/search';

type Props = {
  params: { wordName: string };
};

export default async function SearchPage({ params }: Props) {
  const wordName = decodeURI(params.wordName);

  return (
    <>
      <Header />
      <SearchClientPage wordName={wordName} />
    </>
  );
}
