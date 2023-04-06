export interface IFormCard {
  inputTitle: string;
  inputCost: string;
  date: string;
  inputImage: string | undefined;
  inputSelect: string;
  inputDescription: string;
  current: string;
  inputCheckbox: boolean;
}
export interface IListFilm {
  id: number;
  original_title: string;
  release_date: string;
  vote_average: number;
  overview: string;
  poster_path: string;
}
