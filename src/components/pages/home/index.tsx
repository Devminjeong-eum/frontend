'use client';

import Pagination from '@/components/common/Pagination';
import { useState } from 'react';
import usePosts from '@/hooks/query/usePosts';
import { Dispatch, SetStateAction } from 'react';
import WordItem from '@/components/common/WordItem';
import HomeTrending from './HomeTrending';
import HomeToggleZone from './HomeToggleZone';
import { MainItemType } from '@/types/main';

export type TrendingType = 'trend' | 'all';

type TPaginationData = {
  data: MainItemType[];
  totalItems: number;
  totalPages: number;
};

type TAllPostsProps = {
  data: TPaginationData;
  current: number;
  setCurrent: Dispatch<SetStateAction<number>>;
};

function TrendingPosts() {
  return <HomeTrending />;
}

function AllPosts({ data, current, setCurrent }: TAllPostsProps) {
  return (
    <div className="flex flex-col gap-[7px] mt-[17px]">
      {data?.data?.map((item) => <WordItem key={item.wordId} {...item} />)}
      <Pagination
      style='mx-auto my-[22px] min-w-[264px]'
        viewPaginationNums={4}
        total={data.totalItems || 0}
        limit={10}
        setCurrent={setCurrent}
        current={current}
      />
    </div>
  );
}

export default function HomeClientPage() {
  const [isTrending, setIsTrending] = useState<TrendingType>('trend');
  const [current, setCurrent] = useState(1);
  const { data } = usePosts(current);

  const handleToggle = (prev: TrendingType) => {
    setIsTrending(prev);
  };

  return (
    <main className="p-5 rounded-[24px] bg-[#FBFCFE] -mt-[20px] z-50 flex flex-col gap-[8px]">
      <HomeToggleZone handleToggle={handleToggle} isTrending={isTrending} />

      {isTrending === 'trend' ? (
        <TrendingPosts />
      ) : (
        <AllPosts data={data} current={current} setCurrent={setCurrent} />
      )}
    </main>
  );
}
