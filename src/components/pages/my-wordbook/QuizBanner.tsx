export default function QuizBanner() {
  return (
    <div className="w-11/12 h-24 rounded-2xl bg-[#242C4B] flex gap-6 items-center justify-center">
      <div className="flex flex-col gap-2">
        <span className="text-white opacity-70 font-medium text-sm">
          퀴즈 풀고 내 점수 알아보자!
        </span>
        <span className="text-white font-semibold text-lg">
          나의 개발 용어 발음 실력은?
        </span>
      </div>
      <div className="flex justify-center items-center w-16 h-16 rounded-[50%] bg-quiz-banner-circle-gradient">
        <div className="font-gugi [transform:rotate(-15deg)] flex gap-[1px] items-baseline">
          <span className="text-xl text-[#E1E6FF]">Q</span>
          <span className="text-sm text-[#5D77FF] font-semibold">UIZ</span>
        </div>
      </div>
    </div>
  );
}
