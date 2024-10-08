import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

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
interface Entries {
  id: number,
  title: string,
  content: string,
  date: number
}

export interface UserState {
  notes: Note[];
  folder: Folder[],
  entries: Entries[],
  selectedFolderID: any[],
  selectedNoteID: any[],
  noteStyles: {}
}

/*class NoteRange {
  public start: number;
  public end: number;

  constructor(start: number, end: number) {
    this.start = start;
    this.end = end;
  }
  // Método para generar el objeto en el formato deseado
  toObject(noteId: string, style: string) {
    return {
      [noteId]: {
        [style]: [{
          start: this.start,
          end: this.end,
        },]
      },
    };
  }
}*/

const initialState: UserState = {
  notes: [],
  folder: [],
  entries: [],
  selectedFolderID: [],
  selectedNoteID: [],
  noteStyles: {}
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {

    //FOLDER
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

    //NOTE

    selectedNote: (state, action) => {
      const noteId = action.payload;
      state.selectedNoteID.push(noteId);
    },
    addNotesStyle: (state, action) => {
      const style = action.payload.style; // El estilo (bold, italic, etc.)
      const selected = action.payload.selected; // El rango seleccionado
      const noteId = action.payload.note_id; // Puedes cambiar esto a tu nota específica
      const noteStyles = state.noteStyles; // El estado actual de los estilos
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

    //ENTRIES
    addEntry: (state, action) => {
      const newEntries: Entries = {
        id: Date.now(), // Puedes usar un generador de ID más robusto
        title: action.payload.title,
        content: action.payload.content,
        date: action.payload.date,
      };
      state.entries.push(newEntries);
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
                addNotesStyle,
                clearSelectedFolder,
                clearSelectedFolderById,
                clearSelectedNote,
                clearSelectedNoteById,
                addEntry } = userSlice.actions;
export default userSlice.reducer;