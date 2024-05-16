export type SearchWordData = {
  id: string;
  name: string;
  description: string;
  diacritic: string[];
  pronunciation: string[];
  wordLike: boolean;
};

export type SearchWord = {
  data: {
    data: SearchWordData[];
  };
};
