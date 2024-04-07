import SpeakerSvg from '@/components/svgComponent/SpeakerSvg';
import { MainItemType, TextSlicePrams } from '@/types/main';

export const MainItem = ({
  wordId,
  wordName,
  wordDescription,
  wordDiacritic,
  wordSpeak,
}: MainItemType) => {
  const formatDescription = ({
    text,
    limitLength,
    sliceLength,
  }: TextSlicePrams) => {
    return text?.length > limitLength
      ? `${text.substring(0, sliceLength)}...`
      : text;
  };

  return (
    <article
      key={wordId}
      className="p-4 w-full ring-1 bg-white ring-[#F2F4F9] rounded-2xl hover:bg-[#EFF2F9] hover:ring-4 overflow-hidden cursor-pointer"
    >
      <div className="flex flex-col">
        <header className="flex flex-wrap gap-2">
          <h3 className="text-main-blue font-semibold text-[18px] break-words">
            {wordName}
          </h3>
          <span className="text-[#E1E5ED]">|</span>
          <div className="flex-1 text-main-charcoal break-words max-w-[100px]">
            {wordSpeak}
          </div>
          <div className="bg-[#F8F9FD] px-2 w-auto min-w-[70px] h-[30px] rounded-[6px] flex items-center justify-center gap-1 cursor-pointer">
            <SpeakerSvg />
            <p className="text-main-charcoal text-[13px] break-words">
              {wordDiacritic}
            </p>
          </div>
        </header>

        <p className="text-main-gray">
          {formatDescription({
            text: wordDescription,
            limitLength: 40,
            sliceLength: 60,
          })}
        </p>
      </div>
    </article>
  );
};
