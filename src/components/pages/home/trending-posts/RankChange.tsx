import clsx from 'clsx';

import FillArrowSvg from '@/components/svg-component/FillArrowSvg';
import HyphenSvg from '@/components/svg-component/HyphenSvg';

type Props = {
  className: string;
  innerClassName?: string;
  rankChange?: number;
};

export const RankChange = ({
  className,
  innerClassName,
  rankChange,
}: Props) => {
  const isNew = typeof rankChange !== 'number';
  const isSame = !isNew && rankChange === 0;
  const isChanged = !isNew && rankChange !== 0;

  return (
    <div
      className={clsx(
        'mr-[22px] rounded-xl w-[34px] h-[17px] px-[3px] flex items-center justify-center',
        className,
      )}
    >
      {isNew && (
        <p className={clsx(innerClassName, 'text-[11px] text-[#6C55F8]')}>
          New
        </p>
      )}
      {isSame && <HyphenSvg className={innerClassName} />}
      {isChanged && (
        <>
          <FillArrowSvg
            className={innerClassName}
            transform={rankChange > 0 ? '' : 'rotate(180)'}
          />
          <p className={clsx(innerClassName, 'text-[11px] font-semibold')}>
            {Math.abs(rankChange)}
          </p>
        </>
      )}
    </div>
  );
};
