/* eslint-disable @typescript-eslint/no-explicit-any */
const getCommon = (state: any) => state.commonReducer || { listFilm: [] };

export const getCards = (state: any) => getCommon(state).cards;
export const getListFilms = (state: any) => getCommon(state).listFilm;
export const getSearchValue = (state: any) => getCommon(state).searchValue;
