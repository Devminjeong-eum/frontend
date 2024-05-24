'use client';

import Header from '@/components/layout/Header';
import SearchItem from '@/components/pages/search/SearchItem';
import NotFoundWord from '@/components/pages/search/NotFoundWord';
import Link from 'next/link';
import { getWordSearch } from '@/fetcher';
import { useState, useEffect } from 'react';
import { SearchWordData } from '@/fetcher/types';
import { useSearchParams } from 'next/navigation';

export default function SearchPage() {
  const [totalCount, setTotalCount] = useState(0);
  const [data, setData] = useState<SearchWordData[]>();
  const searchParams = useSearchParams();
  const wordName = searchParams.get('keyword')?.toLowerCase();

  useEffect(() => {
    const fetchData = async () => {
      if (wordName) {
        const {
          data: { totalCount, data },
        } = await getWordSearch(wordName);
        setTotalCount(totalCount);
        setData(data);
      }
    };

    fetchData();
  }, [wordName]);

  return (
    <>
      <Header />
      <main className="p-5 rounded-[24px] bg-[#FBFCFE] -mt-[20px] z-50 flex flex-col gap-[8px]">
        {!totalCount && <NotFoundWord />}
        {data &&
          data.map((item) => (
            <Link href={`/words/${item.id}`} key={item.id}>
              <SearchItem item={item} />
            </Link>
          ))}
      </main>
    </>
  );
}
