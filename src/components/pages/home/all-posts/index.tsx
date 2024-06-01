import Pagination from '@/components/common/Pagination';
import WordItem from '@/components/common/WordItem';
import { type MainDataType } from '@/types/main';
import { Dispatch, SetStateAction } from 'react';

type AllPostsProps = {
  data: MainDataType;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
};

export default function AllPosts({
  data,
  currentPage,
  setCurrentPage,
}: AllPostsProps) {
  return (
    <div className="flex flex-col gap-[7px] mt-[17px]">
      {data.data.map((item) => (
        <WordItem key={item.id} {...item} />
      ))}

      <Pagination
        style="mx-auto my-[22px] min-w-[264px]"
        viewPaginationNums={4}
        total={data.totalCount}
        limit={data.limit}
        setCurrent={setCurrentPage}
        current={currentPage}
      />
    </div>
  );
}
