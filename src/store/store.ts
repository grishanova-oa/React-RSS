import { combineReducers } from '@reduxjs/toolkit';
import { commonReducer } from './slice/CommonSlice';

export const rootReducer = combineReducers({
  commonReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
