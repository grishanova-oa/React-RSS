import { createSlice } from '@reduxjs/toolkit';
import { IFormCard, IListFilm } from '../../components/types';

interface IState {
  cards: IFormCard[],
  listFilm: IListFilm[];
  searchValue: string;
}

const initialState: IState = {
  cards: [],
  listFilm: [],
  searchValue: '',
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
    saveSetListFilm: (state: IState, { payload }) => {
      state.listFilm = payload;
    },
    addListFilm: (state: IState, { payload }) => {
      state.listFilm = payload;
    },
    saveSearchValue: (state: IState, { payload }) => {
      state.searchValue = payload;
    },

  },
});

export const {
  saveAddNewCard, saveSetListFilm, addNewCard, addListFilm, saveSearchValue,
} = commonSlice.actions;

export const commonReducer = commonSlice.reducer;
