import { addEntry, addNote, updateNote } from "../store/reducers";

export const handleAddEntry = ( title: string, 
                        content: string,  
                        id: number,  
                        new_note: boolean,
                        date: number,
                        dispatch: (action: any) => void
                    ) => {
                        
    if(new_note === true && content !== "" && content !== undefined && title !== undefined ){
        dispatch(addEntry({ title, content, date }));
    }else if(new_note === false){
        console.log("Actualizar")
       dispatch(updateNote({id, title, content}))
    } else{
        console.log("No se ha escrito nada") 
    } 
  };