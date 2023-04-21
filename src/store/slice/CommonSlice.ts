import { createSlice } from '@reduxjs/toolkit';
import { IFormCard, IListFilm } from '../../components/types';

interface IState {
  cards: IFormCard[],
  listFilm: IListFilm[];
  searchValue: string;
  isShowLoader: boolean;
}

const initialState: IState = {
  cards: [],
  listFilm: [],
  searchValue: '',
  isShowLoader: false,
};

const commonSlice = createSlice({
  name: 'commonSlice',
  initialState,
  reducers: {
    addNewCard: (state: IState, { payload }) => {
      state.cards = [...state.cards, payload];
    },
    saveListFilm: (state: IState, { payload }) => {
      state.listFilm = payload;
    },
    saveSearchValue: (state: IState, { payload }) => {
      state.searchValue = payload;
    },
    setIsShowLoader: (state: IState, { payload }) => {
      state.isShowLoader = payload;
    },
  },
});

export const {
  saveListFilm, addNewCard, saveSearchValue, setIsShowLoader,
} = commonSlice.actions;

export const commonReducer = commonSlice.reducer;
