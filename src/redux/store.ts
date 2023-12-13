import { configureStore, combineReducers } from '@reduxjs/toolkit';
import filterReducer from './slices/filterSlice';
import notesReducer from './slices/notesSlice';
import { loadState, saveState } from '../utils/workWithLocalStorage';

const persistedState = loadState();

export const rootReducer = combineReducers({
  notes: notesReducer,
  filter: filterReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: persistedState,
});

store.subscribe(() => {
  // Получите только необходимую часть состояния (в данном случае, из Slice)
  const userState = store.getState();

  // Сохраняем только необходимую часть состояния в localStorage
  saveState(userState);
});

// export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
