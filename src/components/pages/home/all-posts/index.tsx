'use client';

import { useState, type Dispatch, type SetStateAction } from 'react';
import LoginAlertModal from '@/components/common/LoginAlertModal';
import Pagination from '@/components/common/Pagination';
import WordItem from '@/components/common/WordItem';
import { type PaginationRes, type MainItemType } from '@/types/main';

type AllPostsProps = {
  data: PaginationRes<MainItemType[]>;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
};

export default function AllPosts({
  data,
  currentPage,
  setCurrentPage,
}: AllPostsProps) {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    // FIXME: 트렌딩 단어 오픈 후에는 아래 px-5 제거하기
    <div className="flex flex-col gap-[7px] mt-[20px] px-5">
      {data.data.map((item) => (
        <WordItem
          key={item.id}
          {...item}
          setIsOpenModal={setIsOpenModal}
          isOpenModal={isOpenModal}
        />
      ))}

      <Pagination
        style="mx-auto my-[22px] min-w-[264px]"
        viewPaginationNums={4}
        total={data.totalCount}
        limit={data.limit}
        setCurrent={setCurrentPage}
        current={currentPage}
      />

      <LoginAlertModal isOpen={isOpenModal} />
    </div>
  );
}
