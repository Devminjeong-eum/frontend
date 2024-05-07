import TwoButtonSvg from '@/components/svg-component/TwoButtonSvg';
import OneButtonSvg from '@/components/svg-component/OneButtonSvg';
import usePagination from '@/hooks/usePagination';
import { PaginationPropType } from '@/types/main';

// 총 페이지 개수 < 페이지네이션 단위 인 경우, 페이지네이션 단위까지 disabled한 버튼을 추가적으로 생성하는 함수
const createFixedButtons = (
  totalPage: number,
  viewPaginationNums: number = 4,
) => {
  const buttons = [];

  for (let i = 1; i <= viewPaginationNums - totalPage; i++) {
    const page = totalPage + i;

    buttons.push(
      <div key={page} className="flex gap-[12px]">
        <button className="text-[18px] text-[#D7DCEB]" disabled={true}>
          {page}
        </button>
      </div>,
    );
  }
  return buttons;
};

export default function Pagination({
  limit = 10,
  total = 100,
  viewPaginationNums = 4,
  setCurrent,
  current,
  style,
}: PaginationPropType) {
  const {
    onChangePage,
    calculateStartPage,
    noPrev,
    noNext,
    totalPages,
    goToFirstPage,
    goToLastPage,
    goToPrevPage,
    goToNextPage,
  } = usePagination({ limit, total, viewPaginationNums, current, setCurrent });

  const startPage = calculateStartPage();

  return (
    <div className={`flex gap-4 ${style || ''}`}>
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
        className={`rotate-180  ${noPrev ? 'text-[#E5E8F2]' : 'text-main-blue'}`}
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
                  className={`text-[18px] ${current === page ? 'text-main-blue font-bold' : 'text-main-gray font-normal'}`}
                  onClick={() => onChangePage(page)}
                >
                  {page}
                </button>
              </div>
            )
          );
        },
      )}

      {totalPages < viewPaginationNums &&
        createFixedButtons(totalPages, viewPaginationNums)}

      <button
        onClick={goToNextPage}
        disabled={noNext}
        className={` ${noNext ? 'text-[#E5E8F2]' : 'text-main-blue'}`}
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
