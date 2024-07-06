import { MainItemType } from '@/types/main';
import { getWordDetailPath } from '@/routes/path.ts';
import { useRouter } from 'next/navigation';
import HeartSvg from '@/components/svg-component/HeartSvg';
import clsx from 'clsx';
import { useMutationLike } from '@/hooks/useMutationLike';
import { Dispatch, SetStateAction } from 'react';
import SpeakerSvg from '../svg-component/SpeakerSvg';

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
      className="h-[120px] px-[18px] py-[16px] w-full ring-1 bg-white ring-[#F2F4F9] hover:ring-[#EFF2F7] rounded-2xl hover:bg-[#F1F4FA] hover:ring-2 cursor-pointer"
      onClick={() => router.push(getWordDetailPath(name))}
    >
      <header className="flex justify-between leading-[16px] mb-[5px]">
        <h3 className="text-main-blue font-semibold text-[17px]">{name}</h3>
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleLikeButton();
          }}
          className={clsx(
            isLike ? 'text-main-blue' : 'text-[#DEE3F1]',
            'ml-[2px] mb-[3px]',
          )}
        >
          <HeartSvg />
        </button>
      </header>

      <section className="flex gap-1 items-center leading-[19px] mb-[6px]">
        <p className="font-medium text-[14px] text-main-charcoal">
          {pronunciation[0]}
        </p>

        <div className="flex items-center px-[6px] py-[3px] gap-1 bg-[#F6F8FA] h-[19px] text-[#69699C] rounded-3xl">
          <div className="w-[12px] h-[12px]">
            <SpeakerSvg />
          </div>
          <p className="leading-[13px] text-[11px]">
            {diacritic[0].slice(1, -1)}
          </p>
        </div>
      </section>

      <p className="text-[14px] leading-[20px] text-main-gray line-clamp-2 tracking-[-2%] mt-[4px]">
        {description}
      </p>
    </article>
  );
}
