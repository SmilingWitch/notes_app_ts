// hooks/useBackHandler.ts
import { useEffect } from "react";
import { BackHandler } from "react-native";
import { useDispatch} from "react-redux";
import { clearSelectedFolder } from "../store/reducers";


export const useBackHandler = ( selectedItems: number[], 
                                setSelectedItems: React.Dispatch<React.SetStateAction<number[]>>, 
                                setShowThrash: React.Dispatch<React.SetStateAction<boolean>>,
                                selected: any[]) => {
    const dispatch = useDispatch()
    
    useEffect(() => {
        if(selected.length !== 0){
          const backAction = () => {
            dispatch(clearSelectedFolder(selectedItems))
            setSelectedItems([]);
            setShowThrash(false)
            // Retorna true para evitar que el botón de atrás haga su comportamiento predeterminado
            return true;
          };
          const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
          );
        
          // Limpia el listener cuando el componente se desmonte
          return () => backHandler.remove();
         
        } else {
        }
      }, [selected]);

      return null

}
 