import Pagination from '@/components/main/Pagination';
import { MainItem } from './MainItem';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import Error from '../Error';
import Spinner from '@/components/common/Spinner';

export type MainItemType = {
  wordId: number;
  wordName: string;
  wordDescription: string;
  wordDiacritic: string;
  wordSpeak?: string;
  wrongSpeak?: string;
  wordExample?: string;
};

export type MainDataType = {
  offset: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
  wordAll: Array<MainItemType>;
};

const MAIN_QUERY_KEY = 'posts';

const fetchPosts = async (pageNumber: number): Promise<MainDataType> => {
  const { data } = await axios.get<MainDataType>(
    `/api/posts?page=${pageNumber}`,
  );
  return data;
};

const usePosts = (pageNumber: number) => {
  return useQuery<MainDataType>({
    queryKey: [MAIN_QUERY_KEY, pageNumber],
    queryFn: () => fetchPosts(pageNumber),
  });
};

export default function Main() {
  const [current, setCurrent] = useState(1);
  const { data, isError, isLoading } = usePosts(current);

  if (isError) return <Error />;
  if (isLoading) return <Spinner />;

  return (
    <main className="p-5 rounded-[24px] bg-[#FBFCFE] -mt-[20px] z-50 flex flex-col gap-[12px]">
      {/* {data?.wordAll.map((item, keyIndex) => ( */}
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, keyIndex) => (
        // <MainItem key={keyIndex} id={item.id} name={item.name} />
        <MainItem
          wordDiacritic={`${item}`}
          wordDescription={`${item}`}
          key={keyIndex}
          wordId={item}
          wordName={`${keyIndex}`}
        />
      ))}
      <Pagination
        viewPaginationNums={4}
        total={data?.totalItems || 200}
        limit={10}
        setCurrent={setCurrent}
        current={current}
      />
    </main>
  );
}
