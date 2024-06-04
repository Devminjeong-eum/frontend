import { MainItemType } from '@/types/main';
import { getWordDetailPath } from '@/routes/path.ts';
import { useRouter } from 'next/navigation';
import HeartSvg from '@/components/svg-component/HeartSvg';
import clsx from 'clsx';
import { useOptimisticLike } from '@/hooks/useOptimisticLike';
import { startTransition } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import QUERY_KEYS from '@/constants/queryKey.ts';

type Props = MainItemType & {
  handleModal: () => void;
  currentPage: number;
};

export default function WordItem({
  id,
  name,
  isLike,
  diacritic, // 발음 기호 (영문)
  pronunciation, // 발음 (국문)
  description,
  handleModal,
  likeCount,
  currentPage,
}: Props) {
  const router = useRouter();
  const queryClient = useQueryClient();

  const { optimisticLikeState, handleSubLike, handleAddLike } =
    useOptimisticLike({
      wordId: id,
      isLike,
      likeCount,
    });

  const handleLikeButton = () => {
    startTransition(() => {
      optimisticLikeState.isLike ? handleSubLike() : handleAddLike();
    });
  };

  return (
    <article
      key={id}
      className=" h-[98px] p-4 w-full ring-1 bg-white ring-[#F2F4F9] hover:ring-[#EFF2F7] rounded-2xl hover:bg-[#F1F4FA] hover:ring-2 cursor-pointer"
      onClick={() => router.push(getWordDetailPath(id))}
    >
      <div className="flex flex-col gap-[10px] relative ">
        <div className="flex justify-between items-center -mt-1">
          {/* 영단어, 단어 뜻, 발음 기호 컨테이너 */}

          <div className="flex flex-wrap items-center gap-2">
            {/* 영단어 */}
            <h3 className="text-main-blue font-semibold text-[16px]">{name}</h3>

            {/* 단어 뜻 */}
            <div className="text-main-charcoal break-words text-[14px]">
              <span className="mr-[1px] text-[#E1E5ED] font-extralight">|</span>{' '}
              {pronunciation.join(', ')}
            </div>

            {/* 발음기호 */}
            <p className="text-[#858596] text-[11px] font-[300] -ml-[1px]">
              {diacritic.join(', ')}
            </p>
          </div>

          {/* 좋아요 버튼 */}
          <div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleLikeButton();
                // 로그인 유무 확인 로직 필요
                handleModal();
                // NOTE: queryClient.removeQueries로 query Cache를 날리면 업데이트됩니다.
                queryClient.removeQueries({
                  queryKey: [QUERY_KEYS.HOME_KEY, currentPage],
                });
              }}
              className={clsx(isLike ? 'text-main-blue' : 'text-[#D3DAED]')}
            >
              <HeartSvg />
            </button>
          </div>
        </div>

        {/* 설명 */}
        <p className="text-main-gray text-[14px] font-[300] leading-[19px] line-clamp-2">
          {description}
        </p>
      </div>
    </article>
  );
}
