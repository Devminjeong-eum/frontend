export type MainItemType = {
  description: string;
  diacritic: string[];
  id: string;
  isLike: boolean;
  name: string;
  pronunciation: string[];
};

export type MainDataType = {
  data: MainItemType[];
  isLast: boolean;
  limit: number;
  page: number;
  totalCount: number;
};

export type PaginationPropType = {
  limit: number; // 페이지당 보여줄 데이터 개수
  total: number; // 전체 데이터 개수
  viewPaginationNums?: number; // 보여줄 페이지 개수, 기본값 4
  setCurrent: (value: number | ((prevCurrent: number) => number)) => void;
  current: number;
  style?: string;
};

export type TextSlicePrams = {
  text: string;
  limitLength: number;
  sliceLength: number;
};
