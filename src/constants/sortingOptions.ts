export const sortOptionMapping: { [key: string]: string } = {
  최신순: 'CREATED',
  좋아요순: 'LIKED',
  // 조회순: 'VIEWED',
  알파벳순: 'ALPHABET',
};

export const dropdownOptions = Object.keys(sortOptionMapping);
export const DROPDOWN_DEFAULT_OPTION = '최신순';
