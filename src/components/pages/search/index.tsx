'use client';

import { useWordSearch } from '@/hooks/query/useWordSearch';
import Error from '../error';
import SearchItem from './SearchItem';
import { SearchWordData } from '@/types/search';
import NotFoundWord from './NotFoundWord';

type Props = {
  wordName: string;
};

export default function SearchClientPage({ wordName }: Props) {
  const { data, error } = useWordSearch(wordName);

  return (
    <>
      {error && <Error />}
      <main className="p-5 rounded-[24px] bg-[#FBFCFE] -mt-[20px] z-50 flex flex-col gap-[8px]">
        {data.data.data.length === 0 && <NotFoundWord wordName={wordName} />}
        {data.data.data.map((item: SearchWordData) => (
          <SearchItem key={item.id} item={item} />
        ))}
      </main>
    </>
  );
}
