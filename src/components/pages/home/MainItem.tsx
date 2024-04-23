import SpeakerSvg from '@/components/svg-component/SpeakerSvg';
import { MainItemType } from '@/types/main';
import { getWordDetailPath } from '@/routes/path.ts';
import { useRouter } from 'next/navigation';

export const MainItem = ({
  wordId,
  wordName,
  wordDescription,
  wordDiacritic,
  wordSpeak,
}: MainItemType) => {
  const router = useRouter();
  return (
    <article
      key={wordId}
      className="p-4 w-full ring-1 bg-white ring-[#F2F4F9] rounded-2xl hover:bg-[#EFF2F9] hover:ring-2 cursor-pointer"
      onClick={() => router.push(getWordDetailPath(wordId))}
    >
      <div className="flex flex-col gap-2 relative">
        <div className="flex justify-between items-center">
          <div className="flex flex-wrap gap-2">
            <h3 className="text-main-blue font-semibold text-[18px] break-words flex-auto">
              {wordName || '-'}
            </h3>
            <div className="text-main-charcoal break-words flex-auto">
              <span className="mr-1 text-[#E1E5ED]">|</span> {wordSpeak || '-'}
            </div>
          </div>
          <div className="bg-[#F8F9FD] px-2 w-auto h-[30px] rounded-[6px] flex items-center justify-center gap-1">
            <div className=" flex-shrink-0">
              <SpeakerSvg />
            </div>
            <p className="text-main-charcoal text-[13px] whitespace-nowrap">
              {/* {wordDiacritic.split(',').join(' | ') || '-'} */}
            </p>
          </div>
        </div>
        <p className="text-main-gray line-clamp-2">{wordDescription || '-'}</p>
      </div>
    </article>
  );
};
