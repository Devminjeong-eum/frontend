import DetailHeader from '@/components/pages/detail/DetailHeader.tsx';
import LikeButton from '@/components/pages/detail/LikeButton.tsx';
import CorrectSvg from '@/components/svg-component/CorrectSvg.tsx';
import WrongSvg from '@/components/svg-component/WrongSvg.tsx';
import ReportButton from '@/components/pages/detail/ReportButton.tsx';

import type { DefaultRes, FetchRes, WordDetail } from '@/fetcher/types.ts';
import { serverFetch } from '@/fetcher/serverFetch.ts';
import { notFound } from 'next/navigation';
import { ResolvingMetadata } from 'next';

// eslint-disable-next-line react-refresh/only-export-components
export async function generateMetadata(
  { params }: { params: { wordName: string } },
  parent: ResolvingMetadata,
) {
  const parentMetadata = (await parent) || [];

  const openGraph = parentMetadata?.openGraph ?? {};
  const twitter = parentMetadata?.twitter ?? {};

  const {
    data: { name, pronunciation, wrongPronunciation },
  } = await getWordDetail('NAME', params.wordName.toLowerCase());

  return {
    ...parentMetadata,
    title: {
      absolute: `'${name}' | 데브말싸미`,
    },
    description: `올바른 발음: ${pronunciation} 잘못된 발음: ${wrongPronunciation}`,
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      ...openGraph,
      title: { absoulte: `'${name}' | 데브말싸미` },
      description: `올바른 발음: ${pronunciation} 잘못된 발음: ${wrongPronunciation}`,
      url: `https://dev-malssami.site/words/${name}`,
    },
    twitter: {
      ...twitter,
      title: { absoulte: `'${name}' | 데브말싸미` },
      description: `올바른 발음: ${pronunciation} 잘못된 발음: ${wrongPronunciation}`,
    },
  };
}

const getWordDetail = async (type: 'ID' | 'NAME', value: string) => {
  try {
    const res = await serverFetch<FetchRes<DefaultRes<WordDetail>>>(
      `/word/detail`,
      {
        params: {
          searchType: type,
          searchValue: value,
        },
      },
    );

    return res.data;
  } catch (e) {
    // NOTE: 상황에 맞는 페이지 보여줘야 함.
    console.log(e);
    notFound();
  }
};

export default async function WordsPage({
  params,
}: {
  params: { wordName: string };
}) {
  const { wordName } = params;
  const {
    data: {
      id,
      name,
      description,
      diacritic,
      pronunciation,
      wrongPronunciation,
      exampleSentence,
      isLike,
      likeCount,
    },
  } = await getWordDetail('NAME', wordName.toLowerCase());

  /*
  NOTE: 한글 발음 표기 - 영어 발음 표기  1 : 1로 라고 생각함.
  만약 다를 시 구글 스프레드 시트에서 변경해야 함
  */

  const correctWordLen = Math.min(pronunciation.length, diacritic.length);

  return (
    <>
      <div className="bg-main-gradient-full px-[16px]">
        <header className="w-full">
          <DetailHeader />
        </header>
        <div className="pt-6 pb-[22px]">
          <div className="flex justify-between">
            <div className="flex items-end mb-[8px] gap-2.5">
              <h1 className="text-[30px] align-bottom font-semibold text-white">
                {name}
              </h1>
              <span className="text-[#E1E2F8] font-medium pb-[6px]">
                {/*{NOTE: 대표 발음은 스프레드시트의 첫 번째 발음으로 합니다}*/}
                {pronunciation[0]}
              </span>
            </div>
            <LikeButton
              initialLike={isLike}
              initialLikeCount={likeCount}
              wordId={id}
            />
          </div>
          <div className="inline-flex flex-col gap-2.5">
            <div className="flex flex-shrink">
              <div className="h-[25px] bg-[#4068D0] rounded-[8px] flex items-center gap-2.5 px-2">
                <CorrectSvg />
                <span className="text-[13px] font-semibold text-white">
                  올바른 발음
                </span>
                <>
                  <div className="text-[13px] text-[#EAEEF8]">
                    {new Array(correctWordLen).fill(0).map((_, idx) => (
                      <span key={idx}>
                        {pronunciation[idx]} {diacritic[idx]}
                      </span>
                    ))}
                  </div>
                </>
              </div>
            </div>
            <div className="flex flex-shrink">
              <div className="h-[25px] bg-[#6264A8] rounded-[8px] flex items-center gap-2.5 px-2">
                <WrongSvg />
                <span className="text-[13px] font-semibold text-white">
                  잘못된 발음
                </span>
                {wrongPronunciation.map((wrongPronunciation, idx) => (
                  <span className="text-[13px] text-[#EBEBF5]" key={idx}>
                    {wrongPronunciation}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <main className="p-5 flex flex-col gap-2">
        <div className="p-[18px] rounded-[16px] border border-[#F2F4F9] shadow-base bg-white">
          <h3 className="font-semibold text-main-black pb-1.5">의미</h3>
          <p className="text-main-gray">{description}</p>
        </div>
        {exampleSentence && (
          <div className="p-[18px] rounded-[16px] border border-[#F2F4F9] shadow-base bg-white">
            <h3 className="font-semibold text-main-black pb-1.5">예문</h3>
            {exampleSentence
              .split('\n')
              .filter((example) => example.trim())
              .map((example, idx) => (
                <div
                  className="text-main-gray flex items-center gap-2"
                  key={idx}
                >
                  <div className="w-1 h-1 rounded-full bg-main-charcoal self-start mt-2.5 flex-shrink-0" />
                  <p className="text-main-gray">{example}</p>
                </div>
              ))}
          </div>
        )}
        <ReportButton />
      </main>
    </>
  );
}
