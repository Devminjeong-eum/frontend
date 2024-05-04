import clsx from 'clsx';
import { type TrendingType } from './index';

type Props = {
  handleToggle: (isTrending: 'trend' | 'all') => void;
  isTrending: TrendingType;
};

export default function HomeToggleZone({ handleToggle, isTrending }: Props) {
  const isTrend = isTrending === 'trend';

  return (
    <div className="text-main-blue flex gap-20 mx-auto w-full justify-center relative mb-[16px]">
      <div
        className={clsx(
          'absolute w-[182px] -top-[8px] h-[40px] rounded-full bg-[#ECF0FF] transition-transform duration-300',
          {
            '-translate-x-[84px]': isTrending === 'trend',
            'translate-x-[84px]': isTrending === 'all',
          },
        )}
      />
      <button
        onClick={() => handleToggle('trend')}
        className={clsx(
          'z-10 w-[90px]',
          isTrend ? 'text-main-blue font-semibold ' : 'text-[#D7DCEB]',
        )}
      >
        트렌딩 단어
      </button>
      <button
        onClick={() => handleToggle('all')}
        className={clsx(
          'z-10',
          !isTrend ? 'text-main-blue font-semibold ' : 'text-[#D7DCEB] ',
        )}
      >
        모든 용어 보기
      </button>
    </div>
  );
}
