'use client';

import Header from '@/components/layout/Header';
import SearchItem from '@/components/pages/search/SearchItem';
import NotFoundWord from '@/components/pages/search/NotFoundWord';
import Link from 'next/link';
import { getWordSearch } from '@/fetcher';
import { useState, useEffect } from 'react';
import { SearchWordData } from '@/fetcher/types';
import { useSearchParams } from 'next/navigation';
import { useDebounce } from '@/hooks/useDebounce';

export default function PageClient() {
  const [totalCount, setTotalCount] = useState(0);
  const [data, setData] = useState<SearchWordData[]>();
  const searchParams = useSearchParams();
  const searchWord = searchParams.get('keyword')?.toLowerCase() || '';
  const debouncedWord = useDebounce(searchWord, 200);

  const fetchWordData = async (word: string) => {
    if (word.length >= 3) {
      const {
        data: { totalCount, data },
      } = await getWordSearch(word);
      setTotalCount(totalCount);
      setData(data);
    }
  };

  useEffect(() => {
    fetchWordData(debouncedWord);
  }, [debouncedWord]);

  return (
    <>
      <Header />
      <main className="p-5 rounded-[24px] bg-[#FBFCFE] -mt-[20px] z-50 flex flex-col gap-[8px]">
        {!totalCount && <NotFoundWord />}
        {data &&
          data.map((item) => (
            <Link href={`/words/${item.id}`} key={item.id}>
              <SearchItem item={item} searchWord={searchWord} />
            </Link>
          ))}
      </main>
    </>
  );
}
