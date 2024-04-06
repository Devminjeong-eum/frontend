import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

interface WordDetail {
  wordId: number; // id
  wordName: string; // 단어 제목
  wordDescription: string; // 단어 설명
  wordSpeak: string; // 올바른 발음 리스트
  wrongSpeak: string; // 틀린 발음 리스트
  wordExamples: string; // 예문 리스트 ($로 구분)
}

export default function Detail() {
  const { wordId } = useParams();

  const data = useQuery<WordDetail>({
    queryFn: () =>
      new Promise((resolve) => {
        resolve({
          wordId: 1,
          wordName: 'AJAX',
          wordDescription:
            '개발용어의 정의가 들어가는 부분입니다. 개발용어의 정의가 들어가는 부분입니다. 개발용어의 정의가 들어가는 부분입니다. 개발용어의 정의임.',
          wordSpeak: '에이잭스',
          wrongSpeak: '아작스, 아약스, 에이작스, 에작스',
          wordExamples:
            '개발용어의 정의가 들어가는 부분입니다.$개발용어의 정의가 들어가는 부분입니다.$개발용어의 정의가 들어가는 부분입니다.$개발용어의 정의가 들어가는 부분입니다. ',
        });
      }),
    queryKey: ['get_wordDetail', wordId],
  });

  return (
    <div>
      <header className="w-full">개발용어</header>
      <h1>AJAX</h1>
    </div>
  );
}
