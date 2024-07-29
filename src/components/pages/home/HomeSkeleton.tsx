import HeartSvg from '@/components/svg-component/HeartSvg';
import clsx from 'clsx';

export default function HomeSkeleton({ limit }: { limit: number }) {
  return (
    <div className="flex flex-col gap-2 mt-4 px-5 bg-[#FBFCFE]">
      {Array.from({ length: limit }, (_, idx) => (
        <div
          key={idx}
          className={clsx(
            'h-[120px] px-[18px] py-[16px] w-full ring-1 bg-white ring-[#F2F4F9] rounded-2xl animate-pulse',
          )}
        >
          <header className="flex justify-between leading-[16px] mb-[5px]">
            <div className="w-1/3 h-4 bg-[#EAECF3] rounded-[2px]"></div>
            <div className={clsx('text-[#F5F6FA]', 'ml-[2px] mb-[3px]')}>
              <HeartSvg />
            </div>
          </header>

          <section className="flex gap-1 items-center leading-[19px] mb-[6px]">
            <div className="w-12 h-4 bg-[#F3F4F9] rounded-[2px]"></div>
            <div className="flex items-center px-[6px] py-[3px] gap-1 bg-[#F3F4F9] h-[19px] text-gray-300 rounded-[2px]">
              <div className="w-[12px] h-[12px] bg-[#EAECF3] rounded-full"></div>
              <div className="w-8 h-3 bg-[#EAECF3] rounded-[2px]"></div>
            </div>
          </section>

          <div className="w-full h-4 bg-[#F3F4F9] rounded-[2px] mt-[4px]"></div>
          <div className="w-3/4 h-4 bg-[#F3F4F9] rounded-[2px] mt-[4px]"></div>
        </div>
      ))}
    </div>
  );
}
