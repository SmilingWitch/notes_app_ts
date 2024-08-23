import { addNote, updateNote } from "../store/reducers";

export const handleAddNote = ( title: string, 
                        content: string, 
                        category: string, 
                        id: number,  
                        new_note: boolean,
                        dispatch: (action: any) => void
                    ) => {
    if(new_note === true && content !== "" && content !== undefined && title !== undefined && category !== undefined){
        dispatch(addNote({ title, content, category }));
    }else if(new_note === false){
        console.log("Actualizar")
       dispatch(updateNote({id, title, content}))
    } else{
        console.log("No se ha escrito nada") 
    } 
  };