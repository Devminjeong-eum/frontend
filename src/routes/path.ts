export const WORD_LIST_PATH = '/home?view=all&page=1';
export const WORD_DETAIL_PATH = '/words/:wordId';
export const LOGIN_PATH = '/';
export const QUIZ_PATH = '/quiz';
export const WORDBOOK_PATH = '/user/wordbook';

export const NOTICE_PATH = '/notice';
export const SEARCH_PATH = '/word/search/:wordName';

export const getWordDetailPath = (wordName: string) => `/words/${wordName}`;
export const getSearchPath = (wordName: string) => `/word/search/${wordName}`;

export const getQuizResultPath = (quizId: string) =>
  `/quiz/result/${quizId}/share`;
