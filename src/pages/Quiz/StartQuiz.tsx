import { useState } from 'react';
import { quizData } from '@/pages/Quiz/quizData';
import { useNavigate } from 'react-router-dom';
import OSVG from '@/components/svgComponent/OSVG';
import XSVG from '@/components/svgComponent/XSVG';
import BlackBackSpaceSVG from '@/components/svgComponent/BlackBackSpaceSVG';

export default function StartQuiz() {
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectOption, setSelectOption] = useState<string | null>(null);
  const navigate = useNavigate();
  const progress = ((currentQuiz + 1) / quizData.length) * 100;

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

  const restartQuiz = () => {
    setCurrentQuiz(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="flex justify-center min-h-screen">
      <div className="flex flex-col items-center w-full max-w-[430px] border-1 border-x border-gray-200 shadow-xl">
        {showScore ? (
          <div className="">
            {quizData.length} 문제 중 {score} 문제를 맞추셨습니다
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-md mt-4 focus:outline-none focus:ring focus:ring-blue-500"
              onClick={restartQuiz}
            >
              다시 풀기
            </button>
          </div>
        ) : (
          <div className="w-full flex flex-col justify-center items-center bg-[#fbfcfe] relative">
            <header
              className="absolute top-7 left-7 cursor-pointer"
              onClick={() => navigate('/quiz')}
            >
              <BlackBackSpaceSVG />
            </header>
            <header className="flex justify-center items-center h-[68px] font-bold">
              TEST 중이에요.
            </header>
            <div className="w-full bg-[#ECEFF5] flex">
              <div
                className="bg-[#0C3FC1] h-[3px]"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <div className="flex flex-col items-center mt-[150px]">
              <p className="text-[#5E5E5E] mb-2">아래 단어의 발음은?</p>
              <div className=" text-[30px] font-bold mb-10">
                {quizData[currentQuiz].question}
              </div>
            </div>
            <div className="flex flex-col items-center w-full">
              {quizData[currentQuiz].options.map((option) => (
                <button
                  key={option}
                  className={`w-[90%] font-bold ring-1 ring-[#F2F4F9] h-[48px] rounded-[16px] mb-4 shadow ${
                    selectOption === option
                      ? option === quizData[currentQuiz].correctAnswer
                        ? 'bg-[#0C3FC1] text-white'
                        : 'bg-[#912828] text-white'
                      : 'bg-white'
                  }`}
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
        )}
      </div>
    </div>
  );
}
