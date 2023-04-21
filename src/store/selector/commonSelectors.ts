import { RootState } from '../store';

const getCommon = (state: RootState) => state.commonReducer;

export const getCards = (state: RootState) => getCommon(state).cards;
export const getListFilms = (state: RootState) => getCommon(state).listFilm;
export const getSearchValue = (state: RootState) => getCommon(state).searchValue;
export const getIsShowLoader = (state: RootState) => getCommon(state).isShowLoader;
