'use client';

import DetailLikeSvg from '@/components/svg-component/DetailLikeSvg.tsx';
import DetailLikeActiveSvg from '@/components/svg-component/DetailLikeActiveSvg.tsx';
import { useOptimisticLike } from '@/hooks/useOptimisticLike.ts';

interface Props {
  wordId: string;
  isLike: boolean;
  likeCount: number;
}

export default function LikeButton({ isLike, likeCount, wordId }: Props) {
  const { optimisticLikeState, handleOptimisticLikeClick } = useOptimisticLike({
    wordId,
    likeCount,
    isLike,
  });

  return (
    <div className="flex flex-col justify-center items-center cursor-pointer">
      <button onClick={handleOptimisticLikeClick}>
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
