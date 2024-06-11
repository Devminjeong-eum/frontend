import clsx from 'clsx';
import { type TrendingType } from './index';

type Props = {
  handleToggle: (isTrending: 'trend' | 'all') => void;
  isTrending: TrendingType;
};

export default function HomeToggleZone({ handleToggle, isTrending }: Props) {
  const isTrend = isTrending === 'trend';

  return (
    <div className="text-main-blue flex gap-[86.5px] mx-auto w-full justify-center relative">
      <div
        className={clsx(
          'absolute w-[174px] xs:w-[194px] -top-[8px] h-[40px] rounded-full bg-[#ECF0FF] transition-transform duration-[600ms]',
          isTrend ? '-translate-x-[90px] xs:-translate-x-[97px]' : 'translate-x-[90px] xs:translate-x-[97px]',
        )}
      />

      <p
        className={clsx(
          'ml-[13px] xs:mr-0 z-10 w-[90px] text-center transition-all duration-[600ms]',
          isTrend
            ? 'text-main-blue font-semibold '
            : 'text-[#D7DCEB] translate-x-[180px] opacity-0',
        )}
      >
        트렌딩 단어
      </p>

      <button
        onClick={() => handleToggle('trend')}
        className={clsx(
          'absolute left-[37px] xs:left-[42px] w-[90px] text-[#D7DCEB] transition-opacity duration-700',
          isTrend ? 'opacity-0' : 'opacity-100',
        )}
      >
        {!isTrend && '트렌딩 단어'}
      </button>

      <p
        className={clsx(
          'xs:ml-[20px] mr-[10px] text-center z-10 w-[100px] transition-all duration-[600ms]',
          !isTrend
            ? 'text-main-blue font-semibold '
            : 'text-[#D7DCEB] -translate-x-[180px] opacity-0',
        )}
      >
        모든 용어 보기
      </p>

      <button
        onClick={() => handleToggle('all')}
        className={clsx(
          ' absolute right-[43.5px] xs:right-[49.5px] text-[#D7DCEB] transition-opacity duration-700',
          isTrend ? 'opacity-100' : 'opacity-0',
        )}
      >
        {isTrend && '모든 용어 보기'}
      </button>
    </div>
  );
}
