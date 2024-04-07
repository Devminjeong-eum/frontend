import Pagination from '@/components/main/Pagination';
import { MainItem } from './MainItem';
import { useState } from 'react';
import Error from '../Error';
import Spinner from '@/components/common/Spinner';
import usePosts from '@/hooks/query/usePosts';

export default function Main() {
  const [current, setCurrent] = useState(1);
  const { data, isError, isLoading } = usePosts(current);

  if (isLoading) return <Spinner />;
  if (isError) return <Error />;

  return (
    <main className="p-5 rounded-[24px] bg-[#FBFCFE] -mt-[20px] z-50 flex flex-col gap-[12px]">
      {data?.wordAll.map(
        ({ wordDiacritic, wordDescription, wordId, wordName, wordSpeak }) => (
          <MainItem
            wordDiacritic={wordDiacritic}
            wordDescription={wordDescription}
            key={wordId}
            wordId={wordId}
            wordName={wordName}
            wordSpeak={wordSpeak}
          />
        ),
      )}
      <Pagination
        viewPaginationNums={4}
        total={data?.totalItems as number}
        limit={10}
        setCurrent={setCurrent}
        current={current}
      />
    </main>
  );
}
