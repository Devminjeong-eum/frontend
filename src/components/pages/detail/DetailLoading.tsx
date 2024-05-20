import Spinner from '@/components/common/Spinner.tsx';
import CorrectSvg from '@/components/svg-component/CorrectSvg.tsx';
import WrongSvg from '@/components/svg-component/WrongSvg.tsx';
import DetailHeader from './DetailHeader.tsx';

export default function DetailLoading() {
  return (
    <>
      <div>
        <div className="bg-main-gradient-full px-[16px]">
          <header className="w-full">
            <DetailHeader />
          </header>
          <div className="pt-6 pb-[22px] h-[150px]">
            <div className="flex items-end mb-[8px] gap-2.5">
              <h1 className="h-[30px] align-bottom font-semibold text-white"></h1>
              <span className="text-white font-medium pb-[6px]"></span>
            </div>
            <div className="flex flex-col gap-2.5">
              <div className="h-[25px] bg-[#4068D0] rounded-[8px] flex items-center gap-2.5 pl-2">
                <CorrectSvg />
                <span className="text-[13px] font-semibold text-white">
                  올바른 발음
                </span>
                <span className="text-[13px] text-[#EAEEF8]"></span>
              </div>
              <div className="h-[25px] bg-[#6264A8] rounded-[8px] flex items-center gap-2.5 pl-2">
                <WrongSvg />
                <span className="text-[13px] font-semibold text-white">
                  잘못된 발음
                </span>
                <span className="text-[13px] text-[#EBEBF5]"></span>
              </div>
            </div>
          </div>
        </div>
        <main className="p-5 flex flex-col gap-2">
          <div className="p-[18px] rounded-[16px] border border-[#F2F4F9] shadow-base bg-white h-[250]">
            <h3 className="font-semibold text-main-black pb-1.5">의미</h3>
            <p className="text-main-gray">
              <span />
            </p>
          </div>
          <div className="p-[18px] rounded-[16px] border border-[#F2F4F9] shadow-base bg-white h-[250]">
            <h3 className="font-semibold text-main-black pb-1.5">예문</h3>
            <div />
          </div>
        </main>
      </div>
      <Spinner />
    </>
  );
}
