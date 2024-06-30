import HeartSvg from '@/components/svg-component/HeartSvg';

export default function HomeSkeleton() {
  return (
    <div className="flex flex-col gap-2 mt-4 px-5">
      {Array.from({ length: 16 }, (_, idx) => (
        <div
          key={idx}
          className="animate-pulse min-h-[98px] p-[18px] pb-[14px] w-full ring-1 bg-white ring-[#F2F4F9] rounded-2xl"
        >
          <div className="flex justify-between items-center">
            {/* 영문, 국문, 발음기호 */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="w-[53px] h-[17px] bg-gray-200 rounded"></div>
              <div className="text-[#F2F4F9] font-extralight">|</div>
              <div className="w-[24px] h-[17px] bg-gray-200 rounded"></div>
              <div className="w-[42px] h-[17px] bg-gray-200 rounded"></div>
            </div>
            {/* 하트 */}
            <div className="text-[#D3DAED] h-6">
              <HeartSvg />
            </div>
          </div>

          {/* 설명 */}
          <div className="h-3 mt-3 bg-gray-200 rounded"></div>
          <div className="h-3 mt-2 bg-gray-200 rounded w-[70%]"></div>
        </div>
      ))}
    </div>
  );
}