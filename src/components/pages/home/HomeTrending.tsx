import CrownSvg from '@/components/svg-component/CrownSvg';
import TriangleSvg from '@/components/svg-component/TriangleSvg';

/**
 * 일단은 UI만 구현해두고 나중에 정해지면 수정예정
 * 둘러보기, 트렌딩을 다른 컴포넌트로 구분할것인지
 * 부모의 상태에 따라 같은 컴포넌트 내에서 다르게 보여줄 것인지도 추후 결정
 * 아직 확실히 정해진게 없기때문
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

      {/* 내 맘대로 수정본 */}
      {/* <div className="flex gap-[2px] ">
        {Array.from({ length: 3 }, (_, index) => (
          <div
            key={index}
            className="flex flex-col justify-end items-center min-h-[200px]"
          >
            <div className=" relative justify-center flex ">
              <CrownSvg />
              <p
                className={` font-extrabold  absolute  ${index === 1 ? 'top-[6px] left-[10px] text-main-blue text-[14px]' : 'top-[8px] left-[10px] text-main-blue/70 text-[12px]'}`}
              >
                {index === 0 ? 2 : index === 1 ? 1 : 3}
              </p>
            </div>
            <div
              className={`items-center w-[127px] ${index === 0 ? 'h-[40px]' : index === 1 ? 'h-[60px]' : 'h-[20px]'} bg-white  ring-1 ring-[#F2F4F9] rounded-t-2xl`}
            >
              <div className="flex flex-col items-center -mt-28 ">
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
          </div>
        ))}
      </div> */}

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
