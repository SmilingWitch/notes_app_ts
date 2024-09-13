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

export interface UserState {
  notes: Note[];
  folder: Folder[],
  selectedFolderID: any[],
  selectedNoteID: any[],
  noteStyles: {}
}

class NoteRange {
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
}

const initialState: UserState = {
  notes: [],
  folder: [],
  selectedFolderID: [],
  selectedNoteID: [],
  noteStyles: {}
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
    },
    addNotesStyle: (state, action) => {
      const style = action.payload.style; // El estilo (bold, italic, etc.)
      const selected = action.payload.selected; // El rango seleccionado
      const noteId = action.payload.note_id; // Puedes cambiar esto a tu nota específica
      const noteStyles = state.noteStyles; // El estado actual de los estilos
    
      // Crea un nuevo rango basado en la selección
      let range = new NoteRange(selected.start, selected.end);
      const newRangeObject = range.toObject(noteId, style); // Genera el objeto de rango
      /*state.noteStyles = {
        1725927911731: {
          bold: [{
            start: 0,
            end: 23,
          },]
        },
      }*/
      
      const isEmpty = (obj: any) => Object.keys(obj).length === 0; // Función para comprobar si un objeto está vacío
  
      console.log("NOTE STYLES",noteStyles[noteId].bold)
      

      if (isEmpty(noteStyles)) {
         // Insertamos el objeto con el nuevo rango
         state.noteStyles = newRangeObject;
      } else {
         // Si ya hay estilos para la nota, verificar si el estilo actual existe (e.g., 'bold')
        if (noteStyles[noteId] && noteStyles[noteId][style]) {

          let newRanges = []; // Array para almacenar los nuevos rangos

          noteStyles[noteId][style].forEach((range: any) => {

            // Si el rango seleccionado esta contenido dentro de algun rango
            if(range.start <= selected.start && range.end >= selected.end){
              console.log("El rango esta contenido dentro de otro rango")  
              newRanges.push({ start: range.start , end: selected.start - 1 }); // Rango anterior
              newRanges.push({ start: selected.end , end: range.end  }); // Rango posterior
              console.log("NEW RANGES", newRanges)
              

              // Elimino el rango grande 
              noteStyles[noteId][style] = noteStyles[noteId][style].filter(item => {
                console.log("item.start", item.start);
                console.log("range.start", range.start);
                console.log("item.end", item.end);
                console.log("range.end", range.end);
                
                // Retorna true si NO coinciden, lo que mantendrá el item
                return !(item.start === range.start && item.end === range.end);
            });

              state.noteStyles[noteId][style].push(newRanges[0])

              console.log("NEW NOTES STYLES",noteStyles[noteId][style])

              newRanges = []

              

            } 
          
           

            // si el rango existe
       else if (range.start === selected.start && range.end === selected.end ) {
        console.log("El rango existe ")
        

        noteStyles[noteId][style] = noteStyles[noteId][style].filter((range: { start: number; end: number }) => {
          return !(range.start === selected.start && range.end   === selected.end - 1

          );
        }); 
        console.log("NOTEEEEEE", noteStyles[noteId][style])
        
        
      }else if (selected.start > range.start && selected.end - 1 < range.end) {
        console.log("Hay solapamiento")

                
      } else {
        console.log("AGREGADO AQUI--------------------------------------------------------------------------")
        let rangeAdd = []
          // Si no hay solapamiento, simplemente añade el rango existente
          console.log("NO hay solapamiento", selected)
          rangeAdd.push({end: selected.end - 1 , start: selected.start })
          console.log("Se agrego un rango",rangeAdd)

          noteStyles[noteId][style].push({end: selected.end - 1 , start: selected.start });
          console.log("NOTE STYLES MAS AGREGADO",noteStyles[noteId][style])

          const noteStylesCopy = [...noteStyles[noteId][style]];

          console.log("NOTE STYLES COPIA", noteStylesCopy)

          // Ordena la copia
          const noteSort = noteStylesCopy.sort((a, b) => a.start - b.start);
          console.log("NOTE SORT", noteStyles[noteId][style]);
        
          // Si necesitas actualizar el estado con el array ordenado, asigna la copia ordenada al estado
          state.noteStyles[noteId][style] = noteSort;
        }
          })
        } else {
          // Si el estilo no existe aún, creamos el array con el nuevo rango
          noteStyles[noteId] = {
            ...noteStyles[noteId],
            [style]: [{ start: selected.start, end: selected.end }],
          };
          console.log('Nuevo estilo creado con el rango', noteStyles[noteId][style]);
        }
      
          
      }

      
      



      /*if (isEmpty(noteStyles)) {
        // Insertamos el objeto con el nuevo rango
        state.noteStyles = newRangeObject;
      } else {
        console.log("RANGES OFICIAL",noteStyles[noteId][style])
        // Si ya hay estilos para la nota, verificar si el estilo actual existe (e.g., 'bold')
        if (noteStyles[noteId] && noteStyles[noteId][style]) {
          
          let newRanges = []; // Array para almacenar los nuevos rangos
          noteStyles[noteId][style].forEach((range: any) => {


            // Si el rango seleccionado es exactamente igual al rango existente
            if (range.start === selected.start && range.end === selected.end - 1) {
              noteStyles[noteId][style] = noteStyles[noteId][style].filter((range: { start: number; end: number }) => {
                return !(range.start === selected.start && range.end === selected.end - 1);
              });              
              
            }
      
            // Si el rango seleccionado está dentro del rango existente
            if (selected.start > range.start && selected.end - 1 < range.end) {
              // Dividimos el rango en dos
              console.log("El rango seleccionado está dentro del rango existente")
              newRanges.push({ start: range.start, end: selected.start - 1 }); // Rango anterior
              newRanges.push({ start: selected.end + 1, end: range.end }); // Rango posterior

              console.log("range.start", range.start)
              console.log("selected.start - 1", selected.start - 1)
              console.log("selected.end + 1", selected.end + 1)
              console.log("end: range.end", range.end)
              console.log(newRanges)
            } else if (selected.start <= range.end && selected.end >= range.start) {
              // Si hay solapamiento, pero no está contenido
              if (selected.start <= range.start) {
                // Modificamos el rango existente
                newRanges.push({ start: selected.end + 1, end: range.end });
              } else if (selected.end >= range.end) {
                newRanges.push({ start: range.start, end: selected.start - 1 });
              } else {
                // Si el rango no se solapa completamente
                newRanges.push(range);
              }
            }else {
              // Si no hay solapamiento, simplemente añade el rango existente
              console.log("NO hay solapamiento", selected)
              console.log("RANGEEEEEEEEEEEE", range)
              noteStyles[noteId][style].push({end: selected.end - 1, start: selected.start });

              console.log(noteStyles[noteId][style])
            }
          });
      
          // Actualizamos los rangos para el estilo
        
        } else {
          // Si el estilo no existe aún, creamos el array con el nuevo rango
          noteStyles[noteId] = {
            ...noteStyles[noteId],
            [style]: [{ start: selected.start, end: selected.end }],
          };
          console.log('Nuevo estilo creado con el rango', noteStyles[noteId][style]);
        }
      }*/
      console.log("--------------------------------------------------------------------------")
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
                addNotesStyle,
                clearSelectedFolder,
                clearSelectedFolderById,
                clearSelectedNote,
                clearSelectedNoteById } = userSlice.actions;
export default userSlice.reducer;