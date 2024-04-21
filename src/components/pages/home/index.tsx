'use client';

import Pagination from '@/components/pages/home/Pagination';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import { MainItem } from './MainItem';
// import Error from '../Error';
// import Spinner from '@/components/common/Spinner';
// import usePosts from '@/hooks/query/usePosts';

export default function Home_Client() {
  const [current, setCurrent] = useState(1);
  // const { data, isError, isLoading } = usePosts(current);
  // if (isLoading) return <Spinner />;
  // if (isError) return <Error />;

  return (
    <>
      <Header />
      <main className="p-5 rounded-[24px] bg-[#FBFCFE] -mt-[20px] z-50 flex flex-col gap-[12px]">
        {/* {[1, 2, 3, 4, 5].map((index) => (
          <Mainindex
            wordDiacritic={index.toString()}
            wordDescription={index.toString()}
            key={index.toString()}
            wordId={index}
            wordName={index.toString()}
            wordSpeak={index.toString()}
          />
        ))} */}
        {Array.from({ length: 10 }, (_, index: number) => (
          <MainItem
            wordDiacritic={index.toString()}
            wordDescription={index.toString()}
            key={index.toString()}
            wordId={index}
            wordName={index.toString()}
            wordSpeak={index.toString()}
          />
        ))}
        <Pagination
          viewPaginationNums={4}
          // total={data?.totalindexs as number}
          total={10}
          limit={10}
          setCurrent={setCurrent}
          current={current}
        />
      </main>
    </>
  );
}
