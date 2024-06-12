'use client';

import DetailLikeSvg from '@/components/svg-component/DetailLikeSvg.tsx';
import DetailLikeActiveSvg from '@/components/svg-component/DetailLikeActiveSvg.tsx';
import { useOptimisticLike } from '@/hooks/useOptimisticLike.ts';
import useAuthQuery from '@/hooks/query/useAuthQuery.ts';
import { useState } from 'react';
import LoginAlertModal from '@/components/common/LoginAlertModal.tsx';

interface Props {
  wordId: string;
  initialLike: boolean;
  initialLikeCount: number;
}

export default function LikeButton({
  initialLike,
  initialLikeCount,
  wordId,
}: Props) {
  const { data: isLoggedIn } = useAuthQuery();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { optimisticLikeState, handleSubLike, handleAddLike } =
    useOptimisticLike({
      wordId,
      isLike: initialLike,
      likeCount: initialLikeCount,
    });

  // TODO: loading 시 클릭 안되게 할 필요 있음

  function handleClick(isLike: boolean) {
    // NOTE: 2초간 로그인 toast UI
    if (isLoggedIn?.error) {
      setIsOpenModal(true);
      setTimeout(() => {
        setIsOpenModal(false);
      }, 2000);

      return;
    }

    isLike ? handleSubLike() : handleAddLike();
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center cursor-pointer">
        <button onClick={() => handleClick(optimisticLikeState.isLike)}>
          {optimisticLikeState.isLike ? (
            <DetailLikeActiveSvg />
          ) : (
            <DetailLikeSvg />
          )}
        </button>
        <span className="text-xs text-[#E1E2F8]">
          {optimisticLikeState.likeCount}
        </span>
      </div>
      <LoginAlertModal isOpen={isOpenModal} />
    </>
  );
}
