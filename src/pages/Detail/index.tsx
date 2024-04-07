import { useSuspenseQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import ExternalSvg from '@/components/svgComponent/ExternalSvg.tsx';
import CorrectSvg from '@/components/svgComponent/CorrectSvg.tsx';
import WrongSvg from '@/components/svgComponent/WrongSvg.tsx';

import BackButton from '@/components/common/BackButton.tsx';

function DetailHeader() {
  return (
    <div className="h-12 flex justify-between items-center border-b border-[#4152C1]">
      <BackButton />
      <h1 className="text-white">개발용어</h1>
      <ExternalSvg />
    </div>
  );
}

interface WordDetail {
  wordId: number; // id
  wordName: string; // 단어 제목
  wordSpeak: string; // 올바른 발음 리스트 (컴마까지 합쳐서 스트링으로)
  wrongSpeak: string; // 틀린 발음 리스트 (컴마까지 합쳐서 스트링으로)
  wordDiacritic: string; // 한국 -> 영어 발음 기호
  wordDescription: string; // 단어 설명
  wordExamples: string; // 예문 리스트 ($로 구분)
}

export default function Detail() {
  const { wordId } = useParams();

  const {
    data: {
      wordName,
      wordDescription,
      wordSpeak,
      wrongSpeak,
      wordExamples,
      wordDiacritic,
    },
  } = useSuspenseQuery<WordDetail>({
    queryFn: () =>
      new Promise((resolve) => {
        resolve({
          wordId: 1,
          wordName: 'AJAX',
          wordDiacritic: '[ey-jaks]',
          wordDescription:
            '개발용어의 정의가 들어가는 부분입니다. 개발용어의 정의가 들어가는 부분입니다. 개발용어의 정의가 들어가는 부분입니다. 개발용어의 정의임.',
          wordSpeak: '에이잭스',
          wrongSpeak: '아작스, 아약스, 에이작스, 에작스',
          wordExamples:
            '개발용어의 정의가 들어가는 부분입니다.조금 길 수도 있어요 이렇게요.$개발용어의 정의가 들어가는 부분입니다.$개발용어의 정의가 들어가는 부분입니다.$개발용어의 정의가 들어가는 부분입니다. ',
        });
      }),
    queryKey: ['get_wordDetail', wordId],
  });

  return (
    <>
      <div>
        <div className="bg-main-gradiant-full px-[16px]">
          <header className="w-full">
            <DetailHeader />
          </header>
          <div className="pt-6 pb-[22px]">
            <div className="flex items-end mb-[8px] gap-2.5">
              <h1 className="text-[30px] align-bottom font-semibold text-white">
                {wordName}
              </h1>
              <span className="text-white font-medium pb-[6px]">
                {wordSpeak}
              </span>
            </div>
            <div className="flex flex-col gap-2.5">
              <div className="h-[25px] bg-[#4068D0] rounded-[8px] flex items-center gap-2.5 pl-2">
                <CorrectSvg />
                <span className="text-[13px] font-semibold text-white">
                  올바른 발음
                </span>
                <span className="text-[13px] text-[#EAEEF8]">
                  {wordSpeak} {wordDiacritic}
                </span>
              </div>
              <div className="h-[25px] bg-[#6264A8] rounded-[8px] flex items-center gap-2.5 pl-2">
                <WrongSvg />
                <span className="text-[13px] font-semibold text-white">
                  잘못된 발음
                </span>
                <span className="text-[13px] text-[#EBEBF5]">{wrongSpeak}</span>
              </div>
            </div>
          </div>
        </div>
        <main className="p-5 flex flex-col gap-2">
          <div className="p-[18px] rounded-[16px] border border-[#F2F4F9] shadow-base bg-white">
            <h3 className="font-semibold text-main-black pb-1.5">의미</h3>
            <p className="text-main-gray">{wordDescription}</p>
          </div>
          <div className="p-[18px] rounded-[16px] border border-[#F2F4F9] shadow-base bg-white">
            <h3 className="font-semibold text-main-black pb-1.5">예문</h3>
            {wordExamples.split('$').map((example, idx) => (
              <div className="text-main-gray flex items-center gap-2" key={idx}>
                <div className="w-1 h-1 rounded-full bg-main-charcoal self-start mt-2.5 flex-shrink-0" />
                <p className="text-main-gray">{example}</p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}
