'use client';

import { useOptimistic } from 'react';
import DetailLikeSvg from '@/components/svg-component/DetailLikeSvg.tsx';
import DetailLikeActiveSvg from '@/components/svg-component/DetailLikeActiveSvg.tsx';
import { toggleWordLike } from '@/actions';

interface Props {
  isLike: boolean;
  likeCount: number;
}

export default function LikeButton({ isLike, likeCount }: Props) {
  const [optimisticLikeState, addOptimisticLikeState] = useOptimistic(
    {
      isLike,
      likeCount,
    },
    (currentState) => {
      return {
        isLike: !currentState.isLike,
        likeCount: currentState.isLike
          ? currentState.likeCount - 1
          : currentState.likeCount + 1,
      };
    },
  );

  console.log(optimisticLikeState);

  return (
    <div className="flex flex-col justify-center items-center cursor-pointer">
      <button
        onClick={async () => {
          console.log('button clicked');

          addOptimisticLikeState({
            isLike: !isLike,
            likeCount: isLike ? likeCount - 1 : likeCount + 1,
          });

          await toggleWordLike(isLike, likeCount);
        }}
      >
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
  );
}
