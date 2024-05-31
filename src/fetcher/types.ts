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

export type QuizData = {
  correct: string;
  selections: string[];
  wordId: string;
  name: string;
  diacritic: string;
};

export type QuizResultData = {
  quizResultId: string;
  score: number;
  correctWords: QuizResultWordData[];
  incorrectWords: QuizResultWordData[];
};

export type QuizResultWordData = {
  wordId: string;
  name: string;
  pronunciation: string;
  diacritic: string;
  isLike: boolean;
};

export type QuizResultUserIdData = {
  quizResultId: string;
  correctWordIds: string[];
  incorrectWordIds: string[];
};
