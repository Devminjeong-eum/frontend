import { PaginationPropType } from '@/types/main';

export default function usePagination({
  limit = 10,
  total = 100,
  viewPaginationNums = 4,
  setCurrent,
  current,
}: PaginationPropType) {
  const totalPages = Math.ceil(total / limit); // 총 페이지 개수

  const noPrev = current === 1;
  const noNext = current >= totalPages;

  const onChangePage = (newPage: number) =>
    setCurrent(Math.max(1, Math.min(newPage, totalPages)));

  const calculateStartPage = () => {
    const startPage = current - Math.floor(viewPaginationNums / 2);
    return Math.max(
      1,
      Math.min(startPage, totalPages - viewPaginationNums + 1),
    );
  };

  const goToFirstPage = () => setCurrent(1);

  const goToLastPage = () => setCurrent(totalPages);

  const goToPrevPage = () =>
    setCurrent((current: number) => Math.max(1, current - 1));

  const goToNextPage = () =>
    setCurrent((current: number) => Math.min(totalPages, current + 1));

  return {
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
  };
}
