import { announcement, mockNewCardData } from '../../announcement';
import { addNewCard, commonReducer, saveListFilm } from './CommonSlice';

const initialState = {
  cards: [],
  listFilm: [],
  searchValue: '',
  isShowLoader: false,
};

describe('commonSlice', () => {
  describe('reducers', () => {
    it('sets fetching true when ListFilm is pending', () => {
      const action = { type: saveListFilm.type, payload: announcement };
      const state = commonReducer(initialState, action);

      expect(state.listFilm[0].id).toEqual(announcement[0].id);
    });
    it('sets fetching true when FormCards is pending', () => {
      const action = { type: addNewCard.type, payload: mockNewCardData };
      const state = commonReducer(initialState, action);

      expect(state.cards[0].inputTitle).toEqual(mockNewCardData.inputTitle);
    });
  });
});
