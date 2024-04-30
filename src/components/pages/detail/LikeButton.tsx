'use client';

import { useOptimistic } from 'react';
import DetailLikeSvg from '@/components/svg-component/DetailLikeSvg.tsx';

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
  return (
    <div className="flex flex-col justify-center items-center cursor-pointer">
      <DetailLikeSvg />
      <span className="text-xs text-[#E1E2F8]">
        {optimisticLikeState.likeCount}
      </span>
    </div>
  );
}
