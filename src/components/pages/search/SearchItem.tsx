import { getWordDetailPath } from '@/routes/path.ts';
import { useRouter } from 'next/navigation';
import HeartSvg from '@/components/svg-component/HeartSvg';
import type { SearchWordData } from '@/types/search';

type Props = {
  item: SearchWordData;
};

export default function SearchItem({ item }: Props) {
  const router = useRouter();

  return (
    <article
      className=" h-[98px] p-4 w-full ring-1 bg-white ring-[#F2F4F9] hover:ring-[#EFF2F7] rounded-2xl hover:bg-[#F1F4FA] hover:ring-2 cursor-pointer"
      onClick={() => router.push(getWordDetailPath(item.id))}
    >
      <div className="flex flex-col gap-[10px] relative justify-center">
        <div className="flex justify-between items-center -mt-1">
          <div className="flex flex-wrap items-center gap-2">
            {/* 영단어 */}
            <h3 className="text-main-blue font-semibold text-[17px] break-words flex-auto">
              {item.name}
            </h3>
            {/* 단어 뜻 */}
            <div className="text-main-charcoal break-words flex-auto text-[14px] font-[400]">
              <span className="mr-[1px] text-[#E1E5ED] font-extralight">|</span>{' '}
              {item.pronunciation}
            </div>
            {/* 발음기호 */}
            <p className="text-[#858596] text-[11px] whitespace-nowrap font-[300] -ml-[1px]">
              {/* 아래 로직은 기존 데이터가 ,로 구분되어서 이렇게 해두었는데 수정될 시에 추가 수정 필요 */}
              {item.diacritic}
              {/* .includes(',')
                 ? item.wordDiacritic.split(',').join(' | ')
                 : item.wordDiacritic} */}
            </p>
          </div>

          {/* 좋아요 버튼 */}
          <button
            className={item.wordLike ? 'text-main-blue' : 'text-[#D3DAED]'}
          >
            <HeartSvg />
          </button>
        </div>

        {/* 설명 */}
        <p className="text-main-gray text-[13px] font-[300] leading-[19px] line-clamp-2">
          {item.description}
        </p>
      </div>
    </article>
  );
}
