export type WordDetail = {
  id: string;
  name: string;
  description: string;
  diacritic: string[];
  pronunciation: string[];
  wrongPronunciation: string[];
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

export type UserData = {
  id: string;
  name: string;
  profileImage: string;
  socialType: string;
};
