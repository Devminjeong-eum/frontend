import { UserAnswer } from '@/types/quiz';

type QuizAnswerProps = {
  userAnswer: UserAnswer[];
};

export default function QuizAnswer({ userAnswer }: QuizAnswerProps) {
  return (
    <>
      <div className="w-[100%] bg-[#F2F4F9]">
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
          <div
            key={idx}
            className="flex flex-col my-[14px] px-5 border-b-2 bg-purple-200"
          >
            <div className="flex items-center justify-between bg-red-100">
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
            </div>
          </div>
        ))}
      </div>
      <div>퀴즈 결과 접기</div>
    </>
  );
}
