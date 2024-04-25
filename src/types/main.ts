export type MainItemType = {
  wordId: number;
  wordName: string;
  wordDescription: string;
  wordDiacritic: string;
  wordSpeak?: string;
  wrongSpeak?: string;
  wordExample?: string;
  wordLike: boolean
};

export type MainDataType = {
  offset: number; // 현재 페이지
  pageSize: number; // 한페이지에 보여줄 아이템 개수
  totalItems: number;
  totalPages: number;
  wordAll: Array<MainItemType>;
};

export type PaginationPropType = {
  limit: number; // 페이지당 보여줄 데이터 개수
  total: number; // 전체 데이터 개수
  viewPaginationNums?: number; // 보여줄 페이지 개수, 기본값 4
  setCurrent: (value: number | ((prevCurrent: number) => number)) => void;
  current: number;
};

export type TextSlicePrams = {
  text: string;
  limitLength: number;
  sliceLength: number;
};

export type WordDetail = {
  wordId: number; // id
  wordName: string; // 단어
  wordSpeak: string; // 올바른 발음 리스트 (컴마까지 합쳐서 스트링으로)
  wrongSpeak: string; // 틀린 발음 리스트 (컴마까지 합쳐서 스트링으로)
  wordDiacritic: string; // 한국 -> 영어 발음 기호
  wordDescription: string; // 단어 설명
  wordExample: string | null; // 예문 리스트 ($로 구분)
};
