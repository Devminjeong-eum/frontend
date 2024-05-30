export const WORD_LIST_PATH = '/home';
export const WORD_DETAIL_PATH = '/words/:wordId';
export const LOGIN_PATH = '/';
export const QUIZ_PATH = '/quiz';
export const WORDBOOK_PATH = '/user/wordbook';
export const NOTICE_PATH = '/notice';
export const SEARCH_PATH = '/word/search/:wordName';
export const REPORT_FORM_URL = 'https://forms.gle/McGVzfsVT9SQkt1g8';

export const getWordDetailPath = (wordId: string) => `/words/${wordId}`;
export const getSearchPath = (wordName: string) => `/word/search/${wordName}`;
