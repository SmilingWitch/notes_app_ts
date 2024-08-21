import { createSlice } from '@reduxjs/toolkit';

interface Note {
  id: number;
  title: string;
  content: string;
  date: number,
  category: string,
}

export interface UserState {
  notes: Note[];
  folder: []
}

const initialState: UserState = {
  notes: [],
  folder: []
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    folder: (state, action) => {
      state.folder = action.payload
    },
    addNote: (state, action) => {
      const newNote: Note = {
        id: Date.now(), // Puedes usar un generador de ID más robusto
        title: action.payload.title,
        content: action.payload.content,
        date: Date.now(),
        category: action.payload.category
      };
      state.notes.push(newNote);
    },
    updateNote: (state, action) => {
      const { id, title, content } = action.payload;
      const noteIndex = state.notes.findIndex((note) => note.id === id);
      if (noteIndex !== -1) {
        state.notes[noteIndex] = { ...state.notes[noteIndex], title, content };
      }
    },
    deleteNote: (state, action) => {
      const noteId = action.payload;
      state.notes = state.notes.filter((note) => note.id !== noteId);
    },
  },
});

export const { addNote, updateNote, deleteNote } = userSlice.actions;
export default userSlice.reducer;