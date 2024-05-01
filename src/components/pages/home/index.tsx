'use client';

import Pagination from '@/components/pages/home/Pagination';
import { useState } from 'react';
import usePosts from '@/hooks/query/usePosts';
import HomeItem from './HomeItem';
import Error from '../error';
import HomeTrending from './HomeTrending';

export default function Home() {
  const [isTrending, setIsTrending] = useState(true);
  const [current, setCurrent] = useState(1);
  const { data, error } = usePosts(current);

  const BUTTON_STYLE = `min-h-[40px] px-10`;

  const handleToggle = () => {
    setIsTrending(!isTrending);
  };

  return (
    <>
      {error && <Error />}
      <main className="p-5 rounded-[24px] bg-[#FBFCFE] -mt-[20px] z-50 flex flex-col gap-[8px]">
        {/* 토글 존 */}
        <div className="text-main-blue flex gap-4 mx-auto">
          <button
            onClick={handleToggle}
            className={`${BUTTON_STYLE} ${isTrending ? 'bg-[#ECF0FF] rounded-full' : 'bg-none'}`}
          >
            트렌딩단어
          </button>
          <button
            onClick={handleToggle}
            className={`${BUTTON_STYLE} ${isTrending ? 'bg-none' : 'bg-[#ECF0FF] rounded-full'}`}
          >
            모든 용어 보기
          </button>
        </div>

        {isTrending && <HomeTrending />}

        {!isTrending && (
          <>
            <div className="mt-[17px]">
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
            </div>
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
