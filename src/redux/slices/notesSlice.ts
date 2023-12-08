import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import type { PayloadAction } from '@reduxjs/toolkit';
import { INote } from '../../models/INote';

const initialState: Array<INote> = [];
const notesSlice = createSlice({
  name: 'notes',
  initialState: initialState,
  reducers: {
    setInitialState: (state, action: PayloadAction<Array<INote>>) => {
      return action.payload;
    },
    addNote: (state, action: PayloadAction<INote>) => {
      state.push(action.payload);
    },
    deleteNote: (state, action: PayloadAction<string>) => {
      return state.filter((item) => {
        return item.id !== action.payload;
      });
    },
    editNote: (state, action: PayloadAction<INote>) => {
      state.forEach((item, index, arr) => {
        if (item.id === action.payload.id) {
          arr[index].note = action.payload.note;
          arr[index].tags = action.payload.tags;
        }
      });
    },
  },
});

export const { addNote, deleteNote, editNote, setInitialState } =
  notesSlice.actions;
export default notesSlice.reducer;
export const selectNotes = (state: RootState) => state.notes;
