'use client';

import BigMagnifierSvg from '@/components/svg-component/BigMagnifierSvg';
import { useWordSearch } from '@/hooks/query/useWordSearch';
import Error from '../error';
import SearchItem from './SearchItem';
import { SearchWordData } from '@/hooks/query/useWordSearch';
import { useState } from 'react';
import Pagination from '../home/Pagination';

type Props = {
  wordName: string;
};

export default function SearchClientPage({ wordName }: Props) {
  const { data, error } = useWordSearch(wordName);
  const [current, setCurrent] = useState(1);

  if (data.data.data.length === 0)
    return (
      <div className="flex flex-col justify-center items-center pt-[200px] ">
        <BigMagnifierSvg />
        <div className="mt-5 text-[#A8AEBC]">
          앗! {wordName}에 대한 검색 결과가 없어요.
        </div>
      </div>
    );

  return (
    <>
      {error && <Error />}
      <main className="p-5 rounded-[24px] bg-[#FBFCFE] -mt-[20px] z-50 flex flex-col gap-[8px]">
        {data.data.data.map((item: SearchWordData) => (
          <SearchItem key={item.id} item={item} />
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
