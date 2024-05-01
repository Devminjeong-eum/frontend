'use client';

// import axios from 'axios';

// import { useQuery } from '@tanstack/react-query';
// import BigMagnifierSvg from '@/components/svgComponent/BigMagnifierSvg';
// import SearchItem from '@/components/pages/search/SearchItem';

export type SearchWord = {
  wordId: number;
  wordName: string;
  wordDescription: string;
  wordSpeak: string;
  wordDiacritic: string;
};

export default function Search_Client() {
  // const { wordName } = useParams();

  // const { data: searchWord } = useQuery({
  //   queryKey: ['getSearchWord', wordName],
  //   queryFn: () =>
  //     axios.get(
  //       `http://3.37.179.21:8080/api/word/search?page=1&size=10&wordName=${wordName}`,
  //     ),
  //   enabled: !!wordName,
  // });

  // if (searchWord?.data.wordAll.length === 0)
  //   return (
  //     <div className="flex flex-col justify-center items-center pt-[200px] ">
  //       <BigMagnifierSvg />
  //       <div className="mt-5 text-[#A8AEBC]">
  //         앗! {wordName}에 대한 검색 결과가 없어요.
  //       </div>
  //     </div>
  //   );

  return (
    <div className="p-5 rounded-[24px] bg-[#FBFCFE] -mt-[20px] z-50 flex flex-col gap-[12px]">
      {/* {searchWord?.data?.wordAll.map((item: SearchWord) => (
        <SearchItem key={item.[wordId]} item={item} />
      ))} */}
      {['1', '2', '3', '4'].map(() => (
        // <SearchItem key={item} item={item} />
        <div />
      ))}
    </div>
  );
}
