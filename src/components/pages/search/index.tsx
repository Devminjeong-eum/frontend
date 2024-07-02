'use client';

// import type { SearchWordData } from '@/fetcher/types';
import WordItem from '@/components/common/WordItem';
import LoginAlertModal from '@/components/common/LoginAlertModal';
import { useState } from 'react';
import { useGetSearchWord } from '@/hooks/query/useGetSearchWord';
import NotFoundWord from './NotFoundWord';

type Props = {
  word: string;
};

export default function Search({ word }: Props) {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const {
    data: {
      data: { data, totalCount },
    },
  } = useGetSearchWord(word.toLowerCase());

  return (
    <div className="flex flex-col gap-[7px] mt-[17px] px-5">
      {!totalCount && <NotFoundWord />}
      {data.map((item) => (
        <WordItem key={item.id} {...item} setIsOpenModal={setIsOpenModal} />
      ))}
      <LoginAlertModal isOpen={isOpenModal} />
    </div>
  );
}
