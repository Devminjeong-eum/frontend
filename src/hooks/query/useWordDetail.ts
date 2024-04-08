import { useSuspenseQuery } from '@tanstack/react-query';
import { WordDetail } from '@/types/main.ts';
import { fetchWordDetail } from '@/api/main.ts';

const useWordDetail = (wordId: number) => {
  return useSuspenseQuery<WordDetail>({
    queryFn: () => fetchWordDetail(wordId),
    queryKey: ['get_wordDetail', wordId],
  });
};

export default useWordDetail;

/*
NOTE: 예시 데이터
{
          wordId : 1,
          wordName: 'AJAX',
          wordDiacritic: '[ey-jaks]',
          wordDescription:
            '개발용어의 정의가 들어가는 부분입니다. 개발용어의 정의가 들어가는 부분입니다. 개발용어의 정의가 들어가는 부분입니다. 개발용어의 정의임.',
          wordSpeak: '에이잭스',
          wrongSpeak: '아작스, 아약스, 에이작스, 에작스',
          wordExamples:
            '개발용어의 정의가 들어가는 부분입니다.조금 길 수도 있어요 이렇게요.$개발용어의 정의가 들어가는 부분입니다.$개발용어의 정의가 들어가는 부분입니다.$개발용어의 정의가 들어가는 부분입니다. ',
 };
 */
