export interface IOldWord {
  word: string;
  meaning: string;
  pronunciation: string;
  examples: string[];
}

export interface IWord {
  _id?: string;
  __v?: number;
  word: string;
  meaning: string;
  pronunciation: string;
  level?: string;
  category?: string;
  language: string;
  createdAt: string;
  updatedAt: string;
}
