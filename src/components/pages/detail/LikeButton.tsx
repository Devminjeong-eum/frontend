'use client';

import DetailLikeSvg from '@/components/svg-component/DetailLikeSvg.tsx';
import DetailLikeActiveSvg from '@/components/svg-component/DetailLikeActiveSvg.tsx';
import { useOptimisticLike } from '@/hooks/useOptimisticLike.ts';

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
  const { optimisticLikeState, handleSubLike, handleAddLike } =
    useOptimisticLike({
      wordId,
      isLike: initialLike,
      likeCount: initialLikeCount,
    });

  // TODO: loading 시 클릭 안되게 할 필요 있음
  return (
    <div className="flex flex-col justify-center items-center cursor-pointer">
      <button
        onClick={optimisticLikeState.isLike ? handleSubLike : handleAddLike}
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
