'use client';

import HomeToggleZone from './HomeToggleZone';
import AllPosts from './all-posts';
import useGetAllPosts from '@/hooks/query/useGetAllPosts';
import TrendingPosts from './trending-posts';
import useSyncURLWithState from '@/hooks/useSyncURLWithState';
import { useCallback } from 'react';

export type TrendingType = 'trend' | 'all';

const HomeClientPage = () => {
  const { currentPage, setCurrentPage, isTrending, setIsTrending } =
    useSyncURLWithState();
  const { data: allPostsData } = useGetAllPosts(currentPage).data;

  const handleToggle = useCallback(
    (prev: TrendingType) => {
      setIsTrending(prev);
    },
    [setIsTrending],
  );

  return (
    <main className="py-5 rounded-[24px] bg-[#FBFCFE] -mt-[20px] z-50 flex flex-col gap-[8px]">
      <div className="px-5">
        <HomeToggleZone handleToggle={handleToggle} isTrending={isTrending} />
      </div>

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
};

export default HomeClientPage;
