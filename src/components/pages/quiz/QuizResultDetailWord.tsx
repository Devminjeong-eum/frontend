import type { QuizResultWordData } from '@/fetcher/types';
import EmptyHeartSvg from '@/components/svg-component/EmptyHeartSvg';
import clsx from 'clsx';
import { startTransition } from 'react';
import Heart1Svg from '@/components/svg-component/Heart1Svg';
import { useOptimisticLike } from '@/hooks/useOptimisticLike';

type Props = {
  data: QuizResultWordData;
  correctWords: QuizResultWordData[];
};

export default function QuizResultDetailWord({ data, correctWords }: Props) {
  const { optimisticLikeState, handleSubLike, handleAddLike } =
    useOptimisticLike({
      wordId: data.wordId,
      isLike: data.isLike,
    });

  const handleLikeClick = () => {
    startTransition(() => {
      optimisticLikeState.isLike ? handleSubLike() : handleAddLike();
    });
  };

  return (
    <div className="flex flex-col mt-[14px] mx-5 border-b-2">
      <div className="flex items-center justify-between pb-3">
        <div>
          <div
            className={clsx(
              'text-[17px] font-semibold',
              correctWords.includes(data) ? 'text-quiz-blue' : 'text-quiz-red',
            )}
          >
            {data.name}
          </div>
          <span className="text-[14px] text-[#5E5E5E] font-medium">
            {data.pronunciation}
          </span>
          <span className="text-[14px] text-[#5E5E5E] opacity-60 ml-[3px]">{`${data.diacritic}`}</span>
        </div>
        <button onClick={handleLikeClick}>
          {optimisticLikeState.isLike ? <Heart1Svg /> : <EmptyHeartSvg />}
        </button>
      </div>
    </div>
  );
}
