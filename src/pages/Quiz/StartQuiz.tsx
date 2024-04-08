import { useState } from 'react';
import { quizData } from '@/pages/Quiz/quizData';
import { useNavigate } from 'react-router-dom';
import OSVG from '@/components/svgComponent/OSVG';
import XSVG from '@/components/svgComponent/XSVG';
import BlackBackSpaceSVG from '@/components/svgComponent/BlackBackSpaceSVG';
import QuizResult from './QuizResult';
import { QUIZ_PATH } from '@/routes/path.ts';

export default function StartQuiz() {
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectOption, setSelectOption] = useState<string | null>(null);
  const navigate = useNavigate();
  const progress = (currentQuiz / quizData.length) * 100;

  const nextQuiz = () => {
    setTimeout(() => {
      if (currentQuiz < quizData.length - 1) {
        setCurrentQuiz(currentQuiz + 1);
        setSelectOption(null);
      } else {
        setShowScore(true);
      }
    }, 1000);
  };

  const handleAnswerOptionClick = (selectedOption: string) => {
    if (selectedOption === quizData[currentQuiz].correctAnswer) {
      setScore(score + 1);
    }
    setSelectOption(selectedOption);
    nextQuiz();
  };

  if (showScore) return <QuizResult score={score} />;

  return (
    <div className="flex justify-center min-h-screen text-main-black">
      <div className="flex flex-col items-center w-full max-w-[430px] border-1 border-x border-gray-200 shadow-xl">
        <div className="w-full flex flex-col justify-center items-center bg-[#fbfcfe] relative">
          <header
            className="absolute top-7 left-7 cursor-pointer"
            onClick={() => navigate(QUIZ_PATH)}
          >
            <BlackBackSpaceSVG />
          </header>
          <header className="flex justify-center items-center h-[68px] font-medium">
            <p>TEST중이에요.</p>
          </header>
          <div className={`w-full bg-[#ECEFF5] flex`}>
            <div
              className="bg-[#0C3FC1]  h-[2px] transition-all"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="text-[14px] flex flex-col items-center mt-[73px]">
            <p className="text-main-gray">아래 단어의 발음은?</p>
            <div className={`text-[30px] font-semibold mb-10`}>
              {quizData[currentQuiz].question}
            </div>
          </div>
          <div className="flex flex-col items-center w-full">
            {quizData[currentQuiz].options.map((option) => (
              <button
                key={option}
                className={`shadow-quiz-button w-[90%] font-medium h-[56px] 
                rounded-[16px] mb-4 ${
                  selectOption === option
                    ? option === quizData[currentQuiz].correctAnswer
                      ? 'bg-[#0C3FC1] text-white'
                      : 'bg-[#912828] text-white'
                    : 'bg-white'
                }
                border-px
                border-[#F2F4F9]
                `}
                onClick={() => handleAnswerOptionClick(option)}
              >
                <div className="flex justify-center items-center relative">
                  {selectOption === option &&
                    (selectOption === quizData[currentQuiz].correctAnswer ? (
                      <div className="absolute left-4">
                        <OSVG />
                      </div>
                    ) : (
                      <div className="absolute left-4 top-1">
                        <XSVG />
                      </div>
                    ))}
                  {option}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
