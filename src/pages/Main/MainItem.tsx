import SpeakerSvg from '@/components/svgComponent/SpeakerSvg';

type Props = {
  id: string | number;
};

export const MainItem = ({ id }: Props) => {
  return (
    <article
      key={id}
      className="p-4 w-full ring-1 bg-white ring-[#F2F4F9] rounded-2xl hover:bg-[#EFF2F9] hover:ring-4 overflow-hidden cursor-pointer"
    >
      <div className="flex flex-col">
        <header className="flex flex-wrap gap-2">
          <h3 className="text-main-blue font-semibold text-[18px] break-words">
            Ajax
          </h3>
          <span className="text-[#E1E5ED]">|</span>
          <div className="flex-1 text-main-charcoal break-words">에이젝스</div>
          <div className="bg-[#F8F9FD] w-auto min-w-[70px] h-[30px] rounded-[6px] flex items-center justify-center gap-1">
            <SpeakerSvg />
            <p className="text-main-charcoal text-[13px] break-words">
              {'[aj:ex]'}
            </p>
          </div>
        </header>

        <p className="text-main-gray">
          개발용어의 정의가 들어가는 부분입니다. 개발용어의 정의가 들어가는
          부분입니다. 개발용어의 정의가 들..
        </p>
      </div>
    </article>
  );
};
