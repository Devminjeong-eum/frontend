'use client';

import Pagination from '@/components/pages/home/Pagination';
import { useState } from 'react';
import usePosts from '@/hooks/query/usePosts';
import HomeItem from './HomeItem';

export default function Home() {
  const [current, setCurrent] = useState(1);
  const { data } = usePosts(current);

  return (
    <>
      <main className="p-5 rounded-[24px] bg-[#FBFCFE] -mt-[20px] z-50 flex flex-col gap-[12px]">
        {data?.data.map((item) => (
          <HomeItem
            wordDiacritic={item.wordDiacritic}
            wordDescription={item.wordDescription}
            key={item.wordId}
            wordId={item.wordId}
            wordName={item.wordName}
            wordSpeak={item.wordSpeak}
          />
        ))}

        {data && (
          <Pagination
            viewPaginationNums={4}
            total={data?.totalItems || 0}
            limit={10}
            setCurrent={setCurrent}
            current={current}
          />
        )}
      </main>
    </>
  );
}
