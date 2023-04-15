import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../types';
import {
//   saveAddNewCard,
} from '../slice/CommonSlice';
// import { IFormCard } from '../../components/types';

export const useAppDispatch: () => AppDispatch = useDispatch;

// export const addNewCard = () => (dispatch: AppDispatch) => {
//   const date = addNewCard();

//   dispatch(saveAddNewCard(date));
// };

// export const addNewCard = (data: IFormCard) => ({ type: 'INCREMENT', payload: data });
