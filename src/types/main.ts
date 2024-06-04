export type MainItemType = {
  id: string;
  name: string; // 영문 명
  description: string; // 단어 설명
  pronunciation: string[]; // 발음 기호 (국문)
  diacritic: string[]; // 발음 기호 (영문)
  isLike: boolean;
  likeCount: number; 
};

export type PaginationRes<TData> = {
  data: TData;
  page: number;
  limit: number;
  isLast: boolean;
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
