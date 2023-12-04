import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import type { PayloadAction } from '@reduxjs/toolkit';

interface INote {
  note: string;
  tags: string[];
}
interface NoteState {
  notes: INote[];
}

const initialState: NoteState = {
  notes: [],
};

const notesSlice = createSlice({
  name: 'notes',
  initialState: initialState,
  reducers: {
    addNote: (state, action) => {
      state.notes.push(action.payload);
    },
    deleteNote: (state, action) => {},
  },
});

export const { addNote, deleteNote } = notesSlice.actions;
export default notesSlice.reducer;
export const selectNotes = (state: RootState) => state.notes;
