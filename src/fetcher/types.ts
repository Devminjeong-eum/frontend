export type WordDetail = {
  id: string;
  name: string;
  description: string;
  diacritic: string[];
  pronunciation: string[];
  wrongPronunciations: string[];
  // \n으로 구분해 사용
  exampleSentence: string;

  // NOTE: metadata
  createdAt: Date;
  updatedAt: Date;
};

export type DefaultRes<TData> = {
  status: number;
  data: TData;
};
