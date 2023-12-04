import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './slices/filterSlice';
import notesReducer from './slices/notesSlice';

export const store = configureStore({
  reducer: {
    notes: notesReducer,
    filter: filterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
