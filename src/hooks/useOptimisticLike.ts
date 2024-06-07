import { useOptimistic } from 'react';

import { addLike, subLike } from '@/actions';

interface Props {
  wordId: string;
  isLike: boolean;
  likeCount: number;
}
export const useOptimisticLike = ({ wordId, isLike, likeCount }: Props) => {
  // const addLikeMutation = useAddLike(wordId);
  // const deleteLikeMutation = useDeleteLike(wordId);

  const [optimisticLikeState, setOptimisticLike] = useOptimistic<
    {
      isLike: boolean;
      likeCount: number;
    },
    number
  >(
    {
      isLike,
      likeCount,
    },
    (currentState, optimisticValue) => {
      // merge and return new state wih optimistic value
      return {
        isLike: !currentState.isLike,
        likeCount: currentState.likeCount + optimisticValue,
      };
    },
  );

  const handleAddLike = async () => {
    setOptimisticLike(1);
    await addLike(wordId);
  };

  const handleSubLike = async () => {
    setOptimisticLike(-1);
    await subLike(wordId);
  };

  return {
    optimisticLikeState,
    setOptimisticLike,
    handleAddLike,
    handleSubLike,
  };
};
