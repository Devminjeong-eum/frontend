'use client';

import Pagination from '@/components/pages/home/Pagination';
import { useState } from 'react';
import usePosts from '@/hooks/query/usePosts';
import HomeItem from './HomeItem';
import Error from '../error';
import HomeTrending from './HomeTrending';
import HomeToggleZone from './HomeToggleZone';

export type TrendingType = 'trend' | 'all';

export default function Home() {
  const [isTrending, setIsTrending] = useState<TrendingType>('trend');
  const [current, setCurrent] = useState(1);
  const { data, error } = usePosts(current);

  const handleToggle = (prev: TrendingType) => {
    setIsTrending(prev);
  };

  return (
    <>
      {error && <Error />}
      <main className="p-5 rounded-[24px] bg-[#FBFCFE] -mt-[20px] z-50 flex flex-col gap-[8px]">
        <HomeToggleZone handleToggle={handleToggle} isTrending={isTrending} />

        {isTrending === 'trend' && <HomeTrending />}

        {isTrending !== 'trend' && (
          <>
            {data?.data.map((item) => (
              <HomeItem
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
              />
            )}
          </>
        )}
      </main>
    </>
  );
}
