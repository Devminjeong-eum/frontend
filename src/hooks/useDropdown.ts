'use client';

import { useState } from 'react';

export default function useDropdown(initialOption = '최신순') {
  const [selectedOption, setSelectedOption] = useState(initialOption);

  return {
    selectedOption,
    setSelectedOption,
  };
}
