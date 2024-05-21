export type WordDetail = {
  id: string;
  name: string;
  description: string;
  diacritic: string[];
  pronunciation: string[];
  wrongPronunciations: string[];
  // NOTE: \n으로 구분해 사용
  exampleSentence: string;

  // NOTE: metadata
  createdAt: Date;
  updatedAt: Date;
};

export type DefaultRes<TData> = {
  status: number;
  data: TData;
};

export type SearchWord = {
  data: SearchWordData[];
  page: number;
  limit: number;
  isLast: boolean;
  totalCount: number;
};

export type SearchWordData = {
  id: string;
  name: string;
  description: string;
  diacritic: string[];
  pronunciation: string[];
  wordLike: boolean;
};
