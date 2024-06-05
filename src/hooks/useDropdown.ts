'use client';

import { useEffect, useState } from 'react';

export default function useDropdown(initialOption = '최신순') {
  const [selectedOption, setSelectedOption] = useState(initialOption);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedOption]);

  return {
    selectedOption,
    setSelectedOption,
    currentPage,
    setCurrentPage,
  };
}
