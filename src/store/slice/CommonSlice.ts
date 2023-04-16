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

export const commonSlice = createSlice({
  name: 'commonSlice',
  initialState,
  reducers: {
    saveAddNewCard: (state: IState, { payload }) => {
      state.cards = payload;
    },
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
  saveAddNewCard, saveListFilm, addNewCard, saveSearchValue, setIsShowLoader,
} = commonSlice.actions;

export const commonReducer = commonSlice.reducer;
