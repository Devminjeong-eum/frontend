export const WORD_LIST_PATH = '/home?view=trend&page=1';
export const LOGIN_PATH = '/';
export const QUIZ_PATH = '/quiz';
export const WORDBOOK_PATH = '/user/wordbook';
export const NOTICE_PATH = '/notice';
export const SEARCH_PATH = '/word/search/:wordName';
export const PROFILE_PATH = '/profile';

export const WORD_INQUIRY_FORM_URL = 'https://forms.gle/McGVzfsVT9SQkt1g8';
export const OTHER_INQUIRY_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSd2XQqzR3dDb1aq_ipTmagcZr3f-uSwTqQsLpSB6u_vq9oxBA/viewform';

export const getWordDetailPath = (wordName: string) => `/words/${encodeURIComponent(wordName)}`;
export const getSearchPath = (wordName: string) => `/word/search/${wordName}`;
export const getQuizResultPath = (quizId: string) => `/quiz/result/${quizId}`;
export const getQuizResultSharePath = (quizId: string) =>
  `/quiz/result/${quizId}/share`;
