import { useOptimistic } from 'react';
import { addLike, subLike } from '@/actions';

interface Props {
  wordId: string;
  isLike: boolean;
  likeCount: number;
}

export const useOptimisticLike = ({ wordId, isLike, likeCount }: Props) => {
  const [optimisticLikeState, setOptimisticLike] = useOptimistic(
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

  const handleOptimisticLikeClick = async () => {
    setOptimisticLike({
      isLike: !isLike,
      likeCount: isLike ? likeCount - 1 : likeCount + 1,
    });

    if (isLike) {
      await addLike(wordId);
    } else {
      await subLike(wordId);
    }
  };

  console.log(optimisticLikeState);

  return {
    optimisticLikeState,
    setOptimisticLike,
    handleOptimisticLikeClick,
  };
};
