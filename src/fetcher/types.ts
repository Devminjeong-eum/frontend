export type WordDetail = {
  id: string;
  name: string;
  description: string;
  diacritic: string[];
  pronunciation: string[];
  wrongPronunciation: string[];
  // NOTE: \n으로 구분해 사용
  exampleSentence: string;

  // NOTE: 좋아요 관련 데이터
  // 비로그인 시에는 무조건 false
  isLike: boolean;
  likeCount: number;

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

export type LoginData = {
  id: string;
  name: string;
  profileImage: string;
  socialType: string;
};

export type ErrorRes = {
  statusCode: number;
  timestamp: string;
  path: string;
  method: string;
  message: string;
};

export type BackendFetchRes<TRes> = {
  status: number;
  statusText: string;
  headers: Headers;
  data: TRes;
};
