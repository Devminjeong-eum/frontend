import { SearchWord } from '.';
import SpeakerSvg from '@/components/svgComponent/SpeakerSvg';

type SearchItemProps = {
  item: SearchWord;
};

export default function SearchItem({ item }: SearchItemProps) {
  return (
    <article
      key={item.wordId}
      className="p-4 w-full ring-1 bg-white ring-[#F2F4F9] rounded-2xl hover:bg-[#EFF2F9] hover:ring-4 overflow-hidden cursor-pointer"
    >
      <div className="flex flex-col">
        <header className="flex flex-wrap gap-2">
          <h3 className="text-main-blue font-semibold text-[18px] break-words">
            {item.wordName}
          </h3>
          <span className="text-[#E1E5ED]">|</span>
          <div className="flex-1 text-main-charcoal break-words">
            {item.wordSpeak}
          </div>
          <div className="bg-[#F8F9FD] w-auto min-w-[70px] h-[30px] rounded-[6px] flex items-center justify-center gap-1">
            <SpeakerSvg />
            <p className="text-main-charcoal text-[13px] break-words">
              {item.wordDiacritic}
            </p>
          </div>
        </header>

        <p className="text-main-gray">{item.wordDescription}</p>
      </div>
    </article>
  );
}
