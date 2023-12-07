import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAdverts } from '../api';

export const fetchAdverts = createAsyncThunk(
  'adverts/fetchAll',
  async (_, thunkApi) => {
    try {
      const adverts = await getAdverts();

      return adverts;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
