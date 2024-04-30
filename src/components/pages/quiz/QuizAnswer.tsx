import EmptyHeartSvg from '@/components/svg-component/EmptyHeartSvg';
import HeartSvg from '@/components/svg-component/HeartSvg';
import { UserAnswer } from '@/types/quiz';
import { Dispatch, SetStateAction } from 'react';

type QuizAnswerProps = {
  userAnswer: UserAnswer[];
  setUserAnswer: Dispatch<SetStateAction<UserAnswer[]>>;
};

export default function QuizAnswer({
  userAnswer,
  setUserAnswer,
}: QuizAnswerProps) {
  const handleLikeClick = (clickedId: number) =>
    setUserAnswer((prevUserAnswer) =>
      prevUserAnswer.map((answer) =>
        answer.id === clickedId
          ? { ...answer, isLike: !answer.isLike }
          : answer,
      ),
    );

  return (
    <>
      <div className="w-[100%] bg-[#F2F4F9]">
        <div className="relative flex justify-between px-[34px] mt-[-12px] z-9999">
          <span className="h-[24px] border border-l-[6px] border-[#ABB9D5] rounded-md"></span>
          <span className="h-[24px] mr-[224px] border border-l-[6px] border-[#ABB9D5] rounded-md"></span>
          <span className="h-[24px] border border-l-[6px] border-[#ABB9D5] rounded-md"></span>
          <span className="h-[24px] border border-l-[6px] border-[#ABB9D5] rounded-md"></span>
        </div>
        <div className="flex justify-between items-center px-5 pt-[50px]">
          <span className="text-[21px] font-semibold">퀴즈 정답이에요!</span>

          <div className="inline-block space-x-1">
            <span className="inline-block h-2 w-2 rounded-full bg-quiz-blue"></span>
            <span className="text-[12px] pr-2">맞았어요</span>
            <span className="inline-block h-2 w-2 rounded-full bg-quiz-red"></span>
            <span className="text-[12px]">틀렸어요</span>
          </div>
        </div>
        {userAnswer.map((data, idx) => (
          <div key={idx} className="flex flex-col my-[14px] px-5 border-b-2">
            <div className="flex items-center justify-between">
              <div>
                <div
                  className={`text-[17px] font-semibold ${data.isAnswer ? 'text-quiz-blue' : 'text-quiz-red'}`}
                >
                  {data.answer}
                </div>
                <div className="pb-2 text-[17px] text-[#5E5E5E]">
                  개발용어 [test]
                </div>
              </div>
              <button className="" onClick={() => handleLikeClick(data.id)}>
                {data.isLike ? <HeartSvg /> : <EmptyHeartSvg />}
              </button>
            </div>
          </div>
        ))}
      </div>
      <div>퀴즈 결과 접기</div>
    </>
  );
}
