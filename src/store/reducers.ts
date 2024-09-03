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
  name: string,
}

export interface UserState {
  notes: Note[];
  folder: Folder[],
  selectedFolderID: any[],
  selectedNoteID: any[]
}

const initialState: UserState = {
  notes: [],
  folder: [],
  selectedFolderID: [],
  selectedNoteID: []
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
      const name = action.payload
      // Itera sobre cada carpeta en foldersToDelete para eliminarlas junto con sus notas asociadas
    
      name.forEach((folderToDelete: { id: number, name: string }) => {

      // Elimina la carpeta cuyo ID coincide con el ID del objeto en foldersToDelete
      state.folder = state.folder.filter((folder: any) => folder.id !== folderToDelete.id);

      // Elimina las notas cuya categoría coincide con el nombre de la carpeta eliminada
      state.notes = state.notes.filter((note: any) => note.category !== folderToDelete.name);
    });
      
      state.selectedFolderID = []
    },

    selectedFolder: (state, action) => {
      const folderId = action.payload;
      state.selectedFolderID.push(folderId);
    },

    clearSelectedFolder: (state, action) => {
      state.selectedFolderID = []
    },

    clearSelectedFolderById: (state, action) => {
      const folderId = action.payload
      state.selectedFolderID = state.selectedFolderID.filter((folder: any) => folder.id !== folderId)
    },

    selectedNote: (state, action) => {
      const noteId = action.payload;
      state.selectedNoteID.push(noteId);
      /*state.selectedNoteID = []*/
    },

    clearSelectedNote: (state, action) => {
      state.selectedNoteID = []
    },

    clearSelectedNoteById: (state, action) => {
      const noteId = action.payload
      state.selectedNoteID = state.selectedNoteID.filter((note: any) => note.id !== noteId)
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

      state.notes = state.notes.filter((note) => note.id !== noteId);
      const noteId = action.payload

      console.log("NOTE ID", noteId)
      // Itera sobre cada carpeta en foldersToDelete para eliminarlas junto con sus notas asociadas
      noteId.forEach((noteToDelete: { id: number }) => {

      // Elimina la carpeta cuyo ID coincide con el ID del objeto en foldersToDelete
      state.notes = state.notes.filter((note: any) => note.id !== noteToDelete.id);

    });
      
    state.selectedNoteID = []
    },

  },
});

export const {  addNote, 
                updateNote, 
                deleteNote, 
                createFolder, 
                deleteFolder, 
                selectedFolder, 
                selectedNote,
                clearSelectedFolder,
                clearSelectedFolderById,
                clearSelectedNote,
                clearSelectedNoteById } = userSlice.actions;
export default userSlice.reducer;