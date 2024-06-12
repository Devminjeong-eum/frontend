import { MainItemType } from '@/types/main';
import { getWordDetailPath } from '@/routes/path.ts';
import { useRouter } from 'next/navigation';
import HeartSvg from '@/components/svg-component/HeartSvg';
import clsx from 'clsx';
import { useMutationLike } from '@/hooks/useMutationLike';
import { Dispatch, SetStateAction } from 'react';

type Props = MainItemType & {
  setIsOpenModal: Dispatch<SetStateAction<boolean>>;
};

export default function WordItem({
  id,
  name,
  isLike,
  diacritic, // 발음 기호 (영문)
  pronunciation, // 발음 (국문)
  description,
  setIsOpenModal,
}: Props) {
  const router = useRouter();

  const { handleAddLike, handleSubLike } = useMutationLike({
    wordId: id,
    setIsOpenModal,
  });

  const handleLikeButton = () => {
    isLike ? handleSubLike() : handleAddLike();
  };

  return (
    <article
      key={id}
      className="h-[98px] p-4 w-full ring-1 bg-white ring-[#F2F4F9] hover:ring-[#EFF2F7] rounded-2xl hover:bg-[#F1F4FA] hover:ring-2 cursor-pointer"
      onClick={() => router.push(getWordDetailPath(name))}
    >
      <div className="flex flex-col relative ">
        <div className="flex justify-between items-center -mt-1">
          {/* 영단어, 단어 뜻, 발음 기호 컨테이너 */}
          <div className="flex flex-wrap items-center gap-2">
            {/* 영단어 */}
            <h3 className="text-main-blue font-semibold text-[16px]">{name}</h3>
            {/* 단어 뜻 */}
            <div className="text-main-charcoal break-words text-[14px]">
              <span className="mr-[2px] text-[#F2F4F9] font-extralight">|</span>{' '}
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
              }}
              className={clsx(isLike ? 'text-main-blue' : 'text-[#D3DAED]')}
            >
              <HeartSvg />
            </button>
          </div>
        </div>

        {/* 설명 */}
        <p className="text-main-gray text-[14px] mt-[7px] font-[300] leading-[19px] line-clamp-1 xs:line-clamp-2">
          {description}
        </p>
      </div>
    </article>
  );
}
