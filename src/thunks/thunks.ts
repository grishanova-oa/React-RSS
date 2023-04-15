import { createAsyncThunk } from '@reduxjs/toolkit';
import { useGetMovieByNameQuery } from '../services/api';

export const addListFilmAsync = createAsyncThunk(
  'users/fetchByIdStatus',
  async (value: string) => {
    const response = await useGetMovieByNameQuery(value);
    return response.data;
  },
);
