'use client';

import Pagination from '@/components/common/Pagination';
import { useState } from 'react';
import usePosts from '@/hooks/query/usePosts';
import WordItem from '@/components/common/WordItem';
import Error from '../error';
import HomeTrending from './HomeTrending';

export default function Home() {
  const [current, setCurrent] = useState(1);
  const { data, error } = usePosts(current);

  return (
    <>
      {error && <Error />}
      <main className="p-5 rounded-[24px] bg-[#FBFCFE] -mt-[20px] z-50 flex flex-col gap-[8px]">
        <HomeTrending />
        {data?.data.map((item) => (
          <WordItem
            wordDiacritic={item.wordDiacritic}
            wordDescription={item.wordDescription}
            key={item.wordId}
            wordId={item.wordId}
            wordName={item.wordName}
            wordSpeak={item.wordSpeak}
            wordLike={item.wordLike}
          />
        ))}
        {data && (
          <Pagination
            viewPaginationNums={4}
            total={data?.totalItems || 0}
            limit={10}
            setCurrent={setCurrent}
            current={current}
            style="mx-auto mt-[37px] -mb-[22px]"
          />
        )}
      </main>
    </>
  );
}
