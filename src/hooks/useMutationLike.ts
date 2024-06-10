import { addLike, subLike } from '@/actions';
import QUERY_KEYS from '@/constants/queryKey';
import { deleteLike, updateLike } from '@/fetcher';
import { useQueryClient, useMutation } from '@tanstack/react-query';
import { Dispatch, SetStateAction } from 'react';
import useAuthQuery from './query/\buseAuthQuery';

type Props = {
  wordId: string;
  setIsOpenModal: Dispatch<SetStateAction<boolean>>;
};

export const useMutationLike = ({ wordId, setIsOpenModal }: Props) => {
  const queryClient = useQueryClient();

  // 로그인 유무 판별
  const { data: isLoggedIn } = useAuthQuery();

  const updateLikeMutation = useMutation({
    mutationFn: () =>
      isLoggedIn?.error ? updateLike(wordId) : addLike(wordId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.LIKEDWORD_KEY, wordId],
      });
    },
    onError: (error) => {
      console.error('Failed to update like:', error);
    },
  });

  const deleteLikeMutation = useMutation({
    mutationFn: () =>
      isLoggedIn?.error ? deleteLike(wordId) : subLike(wordId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.LIKEDWORD_KEY, wordId],
      });
    },
    onError: (error) => {
      console.error('Failed to delete like:', error);
    },
  });

  const handleAddLike = () => {
    if (isLoggedIn?.error) {
      setIsOpenModal(true);
      setTimeout(() => {
        setIsOpenModal(false);
      }, 2000);
    }
    updateLikeMutation.mutate();
  };

  const handleSubLike = () => {
    deleteLikeMutation.mutate();
  };

  return { handleAddLike, handleSubLike };
};
