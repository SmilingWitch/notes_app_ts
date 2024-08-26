import { createSlice } from '@reduxjs/toolkit';

interface Note {
  id: number;
  title: string;
  content: string;
  date: number,
  category: string,
}
interface Folder {
  id: number,
  name: string
}

export interface UserState {
  notes: Note[];
  folder: Folder[],
  selectedFolderID: {}
}

const initialState: UserState = {
  notes: [],
  folder: [],
  selectedFolderID: {}
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    createFolder: (state, action) => {
      const newFolder: Folder = {
        id: Date.now(), // Puedes usar un generador de ID más robusto
        name: action.payload.name,
      };
      state.folder.push(newFolder);
    },
    deleteFolder: (state, action) => {
      const folderId = action.payload;
      const name = action.payload
      console.log("NAME", folderId)
      state.folder = state.folder.filter((folder: any) => folder.id !== folderId.category.id);
      state.notes = state.notes.filter((note: any) => note.category !== name.category.name);
    },
    selectedFolder: (state, action) => {
      const folderId = action.payload;
      const category = action.payload
      console.log("SELECTED",folderId)
      state.selectedFolderID = {folderId, category};
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

export const { addNote, updateNote, deleteNote, createFolder, deleteFolder, selectedFolder } = userSlice.actions;
export default userSlice.reducer;