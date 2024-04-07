import TwoButtonSvg from '../svgComponent/TwoButtonSvg';
import OneButtonSvg from '../svgComponent/OneButtonSvg';
import usePagination, { Props } from '@/hooks/usePagination';

export default function Pagination({
  limit = 10,
  total = 100,
  viewPaginationNums = 4,
}: Props) {
  const {
    onChangePage,
    calculateStartPage,
    noPrev,
    noNext,
    current,
    totalPages,
    goToFirstPage,
    goToLastPage,
    goToPrevPage,
    goToNextPage,
  } = usePagination({ limit, total, viewPaginationNums });

  const startPage = calculateStartPage();

  return (
    <div className="flex gap-4 mx-auto my-3">
      <button
        onClick={goToFirstPage}
        disabled={noPrev}
        className={`customButton ${!noPrev ? 'hover-enabled' : 'hover-disabled'}`}
      >
        <TwoButtonSvg />
      </button>

      <button
        onClick={goToPrevPage}
        disabled={noPrev}
        className={`text-[#E5E8F2] ${!noPrev && 'hover:text-main-blue'}`}
      >
        <OneButtonSvg />
      </button>

      {Array.from(
        { length: Math.min(viewPaginationNums, totalPages) },
        (_, i) => {
          const page = startPage + i;
          return (
            page <= totalPages && (
              <div key={page} className="flex gap-[12px]">
                <button
                  className={`text-[18px] ${current === page ? 'text-main-blue font-extrabold' : ''}`}
                  onClick={() => onChangePage(page)}
                >
                  {page}
                </button>
              </div>
            )
          );
        },
      )}

      <button
        onClick={goToNextPage}
        disabled={noNext}
        className={`rotate-180 text-[#E5E8F2] ${!noNext && 'hover:text-main-blue'}`}
      >
        <OneButtonSvg />
      </button>

      <button
        onClick={goToLastPage}
        disabled={noNext}
        className={`rotate-180 customButton ${!noNext ? 'hover-enabled' : 'hover-disabled'}`}
      >
        <TwoButtonSvg />
      </button>
    </div>
  );
}
