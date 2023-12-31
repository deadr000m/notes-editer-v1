import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState: string[] = [];

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialState,
  reducers: {
    setInitialFilter: (state, action) => {
      return action.payload;
    },
    setFilter: (state, action: PayloadAction<string>) => {
      state.push(action.payload);
    },
    deleteFilter: (state, action) => {
      return state.filter((item) => {
        return item !== action.payload;
      });
    },
  },
});

export const { setFilter, deleteFilter, setInitialFilter } =
  filterSlice.actions;
export default filterSlice.reducer;
export const selectFilter = (state: RootState) => state.filter;
