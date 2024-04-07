import { useState } from 'react';

export type Props = {
  limit: number; // 페이지당 보여줄 데이터 개수
  total: number; // 전체 데이터 개수
  viewPaginationNums?: number; // 보여줄 페이지 개수, 기본값 4
};

export default function usePagination({
  limit,
  total,
  viewPaginationNums = 4,
}: Props) {
  const [current, setCurrent] = useState(1); // 시작, 현재 페이지
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

  const goToPrevPage = () => setCurrent((current) => Math.max(1, current - 1));

  const goToNextPage = () =>
    setCurrent((current) => Math.min(totalPages, current + 1));

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
