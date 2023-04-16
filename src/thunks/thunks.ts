import { createAsyncThunk } from '@reduxjs/toolkit';
import { saveListFilm, setIsShowLoader } from '../store/slice/CommonSlice';

export const addListFilmAsync = createAsyncThunk(
  'addListFilmAsync',
  async (value: string, thunkAPI) => {
    thunkAPI.dispatch(setIsShowLoader(true));

    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=60e12f358c2229eee542fbb16a0630ae&query=${value}`,
    );

    setTimeout(async () => {
      const data = await response.json();
      thunkAPI.dispatch(setIsShowLoader(false));

      thunkAPI.dispatch(saveListFilm(data.results));
    }, 500);
  },
);
