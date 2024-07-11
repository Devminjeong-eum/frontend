import clsx from 'clsx';
import { type TrendingType } from './index';

type Props = {
  handleToggle: (isTrending: 'trend' | 'all') => void;
  isTrending: TrendingType;
};

const STYLE_P_TAG =
  'absolute transition-all duration-[600ms] w-1/2 text-center';

export default function HomeToggleZone({ handleToggle, isTrending }: Props) {
  const isTrend = isTrending === 'trend';

  return (
    <div
      className={clsx(
        'relative flex justify-between w-full',
        isTrend ? 'mb-11' : 'mb-4',
      )}
    >
      <div
        className={clsx(
          'absolute w-1/2 -top-[8px] h-[40px] rounded-full bg-[#ECF0FF] transition-transform duration-[600ms]',
          isTrend ? ' translate-x-0' : ' translate-x-full',
        )}
      />

      <p
        className={clsx(
          STYLE_P_TAG,
          isTrend
            ? `text-main-blue font-semibold opacity-100`
            : 'text-[#D7DCEB] translate-x-full opacity-0',
        )}
      >
        트렌딩 용어
      </p>

      <button
        onClick={() => handleToggle('trend')}
        className={clsx(
          'absolute w-1/2 text-center translate-x-0 text-[#D7DCEB] transition-all duration-[600ms]',
          isTrend ? 'opacity-0' : 'opacity-100 ',
        )}
      >
        {!isTrend && '트렌딩 단어'}
      </button>

      <p
        className={clsx(
          STYLE_P_TAG,
          !isTrend
            ? 'text-main-blue font-semibold opacity-100 translate-x-full'
            : 'text-[#D7DCEB] translate-x-0 opacity-0',
        )}
      >
        모든 용어 보기
      </p>

      <button
        onClick={() => handleToggle('all')}
        className={clsx(
          'absolute w-1/2 translate-x-full text-center text-[#D7DCEB] transition-all duration-[600ms]',
          isTrend ? 'opacity-100' : 'opacity-0',
        )}
      >
        {isTrend && '모든 용어 보기'}
      </button>
    </div>
  );
}
