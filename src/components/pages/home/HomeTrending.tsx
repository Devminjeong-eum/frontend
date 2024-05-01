import CrownLinearSvg from '@/components/svg-component/CrownLinearSvg';
import FillArrowSvg from '@/components/svg-component/FillArrowSvg';
import clsx from 'clsx';

/**
 * FIXME: 일단 에셋 가져와서 단순 퍼블리싱만 해두고 픽스되면 수정 예정할 컴포넌트
 * 여름과 논의 한 결과 메인 홈 페이지에서 토글로 전체 사전/트렌딩 단어로 수정할 예정
 * 토글 상태관리도 추후 적용 예정 (부모의 상태에 따라 같은 컴포넌트 내에서 다르게 보여줄 것인지 등)
 */

export default function HomeTrending() {
  return (
    <>
      {/* text zone */}
      <div className="ml-[26px] mt-[40px]">
        <p className="text-main-charcoal text-[18px] leading-[16px]">
          사람들이 이번 주에
        </p>
        <p className="text-main-balck text-[22px] leading-[16px] mt-3 font-semibold">
          이 용어를 가장 많이 찾아봤어요!
        </p>
        <p className="text-main-charcoal/50 text-[12px] leading-[16px] mt-[16px]">
          * 매주 월요일 업데이트 예정
        </p>
      </div>

      {/* rank zone */}
      <div className="mt-[28px] w-full">
        {/* rank 1,2,3 */}
        <div className="-mx-[22px] min-h-[219px] ">
          {Array.from({ length: 3 }, (_, index) => (
            <div
              className={clsx(
                'h-[72px] rounded-r-[100px] flex items-center pl-[34px]',
                index !== 0 && 'mt-[4px]',
                index === 0 && 'w-[360px] bg-rank-gradiant-one',
                index === 1 && 'w-[304px] bg-rank-gradiant-two',
                index === 2 && 'w-[268px] bg-rank-gradiant-three h-[67px]',
              )}
            >
              {/* 아이콘 */}
              <div className="relative ">
                <CrownLinearSvg />
                <p
                  className={clsx(
                    'absolute text-[10px] left-[10px] top-3',
                    index !== 2 ? 'text-white' : 'text-main-blue',
                  )}
                >
                  {index + 1}
                </p>
              </div>
              {/* 텍스트 */}
              <div className="ml-[20px] flex-1">
                <p className="text-white text-[18px] font-semibold">
                  Application
                </p>
                <span className="flex items-center gap-[3px] text-[15px] leading-[14px]">
                  <p className="text-white font-normal">애플리케이션</p>
                  <p className="text-white/50 font-light">[application]</p>
                </span>
              </div>

              {/* rank */}
              <div className="mr-[22px] bg-white/20 rounded-xl w-[34px] h-[17px] px-[3px] text-white flex items-center justify-center">
                <FillArrowSvg />
                <p className="text-[10px]">1</p>
              </div>
            </div>
          ))}
        </div>

        {/* rank 4~ */}
        <div className="w-full mt-[26px]">
          {Array.from({ length: 7 }, (_, index) => (
            <div className="h-[17px] border-[#ECEEF5] border-b-[1px] w-full flex items-center py-[26px]">
              {/* 순위 */}
              <p className="font-semibold text-[#AAB2D0] text-[11px] ml-[20px]">
                {index + 4}
              </p>

              {/* 용어 정리 */}
              <span className="flex ml-[29px] gap-[6px] flex-1">
                <p className="text-[16px] text-main-black">Devword</p>
                <span className="text-[#F2F4F9]">|</span>
                <p className="text-[#6F6F80] text-[14px]">개발 용어</p>
              </span>

              {/* rank */}
              <div className="mr-[22px] bg-[#F4F6FB] rounded-xl w-[34px] h-[17px] px-[3px] text-main-blue flex items-center justify-center">
                <FillArrowSvg />
                <p className="text-[10px]">1</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
