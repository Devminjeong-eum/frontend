import QUERY_KEYS from '@/constants/queryKey';
import { deleteLike, updateLike } from '@/fetcher';
import { useQueryClient, useMutation } from '@tanstack/react-query';
import { Dispatch, SetStateAction } from 'react';
import useAuthQuery from './query/useAuthQuery';

type Props = {
  wordId: string;
  setIsOpenModal: Dispatch<SetStateAction<boolean>>;
};

export const useMutationLike = ({ wordId, setIsOpenModal }: Props) => {
  const queryClient = useQueryClient();

  // 로그인 유무 판별
  const { data } = useAuthQuery();

  const updateLikeMutation = useMutation({
    mutationFn: () => updateLike(wordId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.HOME_KEY],
      });
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.SEARCH_KEY],
      });
    },
    onError: (error: Error) => {
      console.error('Failed to update like:', error);
    },
  });

  const deleteLikeMutation = useMutation({
    mutationFn: () => deleteLike(wordId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.HOME_KEY],
      });
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.SEARCH_KEY],
      });
    },
    onError: (error: Error) => {
      console.error('Failed to delete like:', error);
    },
  });

  const handleAddLike = () => {
    if (data.error) {
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
