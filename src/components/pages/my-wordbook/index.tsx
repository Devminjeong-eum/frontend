import MyWordbookHeader from './MyWordbookHeader';
import QuizBanner from './QuizBanner';

export default function MyWordbook() {
  return (
    <>
      <div className="bg-wordbook-gradient">
        <MyWordbookHeader />
        <div className="pt-3">
          <div className="w-[calc(46%+30px)] h-9 overflow-hidden rounded-tl-xl relative top-px">
            <div className="bg-[#FBFCFE] [transform:rotateY(180deg)_skew(-30deg)_translate(30px,0px)] h-full rounded-tl-md flex justify-center items-center">
              <div className="[transform:rotateY(180deg)_skew(-30deg)_translate(-40px,0px)] text-[#313140] font-medium text-sm leading-[18px] tracking-[-0.02em] opacity-90">
                총 00개
              </div>
            </div>
          </div>
        </div>
      </div>
      <QuizBanner />
    </>
  );
}
