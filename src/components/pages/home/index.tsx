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
    // FIXME: 트렌딩 단어 오픈 후에는 py-5 -> p-5로 수정 필요
    <main className="py-5 rounded-[24px] bg-[#FBFCFE] -mt-[20px] z-50 flex flex-col gap-[8px]">
      {/* FIXME: 트렌딩 단어 오픈 후 아래 div 제거 */}
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
}
