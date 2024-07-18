'use client';

import HomeToggleZone from './HomeToggleZone';
import AllPosts from './all-posts';
import useGetAllPosts from '@/hooks/query/useGetAllPosts';
import TrendingPosts from './trending-posts';
import useSyncURLHomeRouteState from '@/hooks/useSyncURLHomeRouteState';
import { useCallback } from 'react';

export type TrendingType = 'trend' | 'all';

const HomeClientPage = () => {
  const { currentPage, setCurrentPage, isTrending, setIsTrending } =
    useSyncURLHomeRouteState();
  const { data: allPostsData } = useGetAllPosts(currentPage).data;

  const handleToggle = useCallback(
    (prev: TrendingType) => {
      setIsTrending(prev);
    },
    [setIsTrending],
  );

  return (
    <main className="py-5 rounded-[24px] bg-[#FBFCFE] min-h-screen -mt-[20px] z-50 flex flex-col gap-[8px] px-5">
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
};

export default HomeClientPage;
