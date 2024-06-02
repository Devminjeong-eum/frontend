'use client';

import { useState } from 'react';
import HomeToggleZone from './HomeToggleZone';
import AllPosts from './all-posts';
import useGetAllPosts from '@/hooks/query/useGetAllPosts';
import TrendingPosts from './trending-posts';
import Error from '../error';

export type TrendingType = 'trend' | 'all';

export default function HomeClientPage() {
  const [isTrending, setIsTrending] = useState<TrendingType>('all');
  const [currentPage, setCurrentPage] = useState(1);

  const {
    data: { data: allPostsData, status: statusCode },
  } = useGetAllPosts(currentPage);

  const handleToggle = (prev: TrendingType) => {
    setIsTrending(prev);
  };

  if (statusCode !== 200) return <Error />;

  return (
    <main className="p-5 rounded-[24px] bg-[#FBFCFE] -mt-[20px] z-50 flex flex-col gap-[8px]">
      <HomeToggleZone handleToggle={handleToggle} isTrending={isTrending} />

      {isTrending === 'trend' ? (
        <TrendingPosts />
      ) : (
        <AllPosts
          data={allPostsData}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </main>
  );
}
