'use client';

import Pagination from '@/components/pages/home/Pagination';
import { useState } from 'react';
import Header from '@/components/layout/Header';
import usePosts from '@/hooks/query/usePosts';
import Spinner from '@/components/common/Spinner';
import Error from '../error';
import HomeItem from './HomeItem';

export default function HomeClientPage() {
  const [current, setCurrent] = useState(1);
  const limit = 10; // 한 페이지에 보여줄 아이템 수

  const { data, isLoading, error } = usePosts(current);

  return (
    <>
      {error && <Error />}
      {isLoading && <Spinner />}
      <Header />
      <main className="p-5 rounded-[24px] bg-[#FBFCFE] -mt-[20px] z-50 flex flex-col gap-[8px]">
        {data?.data.map((item) => (
          <HomeItem
            wordDiacritic={item.wordDiacritic}
            wordDescription={item.wordDescription}
            key={item.wordId}
            wordId={+item.wordId}
            wordName={item.wordName}
            wordSpeak={item.wordSpeak}
            wordLike={item.wordLike}
          />
        ))}
        {data && (
          <Pagination
            viewPaginationNums={4}
            total={data?.totalItems || 0}
            limit={limit}
            setCurrent={setCurrent}
            current={current}
          />
        )}
      </main>
    </>
  );
}
