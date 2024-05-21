import Header from '@/components/layout/Header';
import SearchItem from '@/components/pages/search/SearchItem';
import NotFoundWord from '@/components/pages/search/NotFoundWord';
import Link from 'next/link';
import { getWordSearch } from '@/fetcher';

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
        {!totalCount && <NotFoundWord wordName={wordName} />}
        {data.map((item) => (
          <Link href={`/words/${item.id}`}>
            <SearchItem key={item.id} item={item} />
          </Link>
        ))}
      </main>
    </>
  );
}
