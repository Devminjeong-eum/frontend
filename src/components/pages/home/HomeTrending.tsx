import CrownSvg from '@/components/svg-component/CrownSvg';
import TriangleSvg from '@/components/svg-component/TriangleSvg';

/**
 * FIXME: 일단 에셋 가져와서 단순 퍼블리싱만 해두고 픽스되면 수정 예정할 컴포넌트
 * 여름과 논의 한 결과 메인 홈 페이지에서 토글로 전체 사전/트렌딩 단어로 수정할 예정
 * 토글 상태관리도 추후 적용 예정 (부모의 상태에 따라 같은 컴포넌트 내에서 다르게 보여줄 것인지 등)
 */

export default function HomeTrending() {
  return (
    <>
      <h1 className="text-center text-main-black text-[20px] font-semibold">
        사용자가 많이 찾아본 개발 용어
      </h1>
      <div className="flex gap-[4px] ">
        {Array.from({ length: 3 }, (_, index) => (
          <div key={index} className="flex flex-col justify-end items-center">
            <div className=" relative justify-center flex">
              <CrownSvg />
              <p
                className={` font-extrabold  absolute  ${index === 1 ? 'top-[6px] left-[10px] text-main-blue text-[14px]' : 'top-[8px] left-[10px] text-main-blue/70 text-[12px]'}`}
              >
                {index === 0 ? 2 : index === 1 ? 1 : 3}
              </p>
            </div>
            <div
              className={`flex flex-col items-center w-[127px] ${index === 0 ? 'h-[84px]' : index === 1 ? 'h-[108px]' : 'h-[64px]'} bg-white  ring-1 ring-[#F2F4F9] rounded-t-2xl`}
            >
              <p className="mt-[14px] text-[20px] leading-[17px] font-semibold text-main-blue">
                Asset
              </p>
              <p className="text-[14px] flex-1">에셋</p>
              <div className="flex items-center justify-center mb-[6px] w-[29px] h-[16px] rounded-2xl ring-1 ring-[#EDF1FF]">
                <TriangleSvg />
                <p className="text-[10px] font-semibold text">1</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-[6px]">
        {Array.from({ length: 7 }, (_, index) => (
          <div key={index} className="flex ">
            <div
              className={`flex gap-[8px] items-center w-full ring-1 ring-[#EDF1FF] bg-white rounded-2xl h-[49px]`}
            >
              <p className="ml-[19px] text-main-blue font-extrabold">
                {index + 4}
              </p>
              <p className="ml-[4px] text-main-black text-[14px] font-semibold">
                Asset
              </p>
              <span className="text-[#F2F4F9]">|</span>
              <p className="text-[13px] text-main-charcoa">에셋</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
