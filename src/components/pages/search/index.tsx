'use client';

import type { SearchWordData } from '@/fetcher/types';
import WordItem from '@/components/common/WordItem';
import LoginAlertModal from '@/components/common/LoginAlertModal';
import { useState } from 'react';

type Props = {
  data: SearchWordData[];
};

export default function Search({ data }: Props) {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    // FIXME: 트렌딩 단어 오픈 후에는 아래 px-5 제거하기
    <div className="flex flex-col gap-[7px] mt-[17px] px-5">
      {data.map((item) => (
        <WordItem key={item.id} {...item} setIsOpenModal={setIsOpenModal} />
      ))}
      <LoginAlertModal isOpen={isOpenModal} />
    </div>
  );
}
