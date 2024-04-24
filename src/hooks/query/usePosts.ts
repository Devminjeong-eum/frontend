import QUERY_KEYS from '@/constants/queryKey';
import { useQuery } from '@tanstack/react-query';

const dummyData = [] as { [key: string]: string }[];

for (let i = 0; i <= 100; i++) {
  dummyData.push({
    wordId: `${i}`,
    wordName: `AJAX ${i}`,
    wordDiacritic: '[ey-jaks]',
    wordDescription:
      '개발용어의 정의가 들어가는 부분입니다. 개발용어의 정의가 들어가는 부분입니다. 개발용어의 정의가 들어가는 부분입니다. 개발용어의 정의임.',
    wordSpeak: '에이잭스',
  });
}

interface MainDataType {
  offset: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
  data: { [key: string]: string }[];
}

export const fetchFakeData_Home = (
  pageNumber: number,
): Promise<MainDataType> => {
  const pageSize = 10; // 한 페이지에 표시할 데이터 수

  return new Promise<MainDataType>((resolve) => {
    setTimeout(() => {
      const start = pageSize * (pageNumber - 1);
      const end = start + pageSize;
      const pageData = dummyData.slice(start, end);
      const totalItems = dummyData.length;
      const totalPages = Math.ceil(totalItems / pageSize);

      resolve({
        offset: start,
        pageSize: pageSize,
        totalItems: totalItems,
        totalPages: totalPages,
        data: pageData,
      });
    }, 500);
  });
};

const usePosts = (pageNumber: number) => {
  return useQuery<MainDataType>({
    queryKey: [QUERY_KEYS.HOME_KEY, pageNumber],
    queryFn: () => fetchFakeData_Home(pageNumber),
    staleTime: 1000 * 60 * 3600,
  });
};
export default usePosts;

/*
NOTE: 예시 데이터
{
          wordId : 1,
          wordName: 'AJAX',
          wordDiacritic: '[ey-jaks]',
          wordDescription:
            '개발용어의 정의가 들어가는 부분입니다. 개발용어의 정의가 들어가는 부분입니다. 개발용어의 정의가 들어가는 부분입니다. 개발용어의 정의임.',
          wordSpeak: '에이잭스',
        
 }
 */
