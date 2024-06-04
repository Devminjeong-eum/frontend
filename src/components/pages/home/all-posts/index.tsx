'use client';

import LoginAlertModal from '@/components/common/LoginAlertModal';
import Pagination from '@/components/common/Pagination';
import WordItem from '@/components/common/WordItem';
import { type MainDataType } from '@/types/main';
import { Dispatch, SetStateAction, useState } from 'react';

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
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  return (
    // FIXME: 트렌딩 단어 오픈 후에는 아래 px-5 제거하기
    <div className="flex flex-col gap-[7px] mt-[17px] px-5">
      {data.data.map((item) => (
        <WordItem key={item.id} {...item} handleModal={handleModal} />
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
