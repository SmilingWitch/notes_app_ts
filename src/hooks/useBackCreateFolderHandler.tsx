import { useEffect } from "react";
import { BackHandler } from "react-native";

interface useBackCreateFolderHandlerProps{
    showDialog: boolean,
    setShowDialog: React.Dispatch<React.SetStateAction<boolean>>,
}

export const useBackCreateFolderHandler = ({showDialog, setShowDialog}:useBackCreateFolderHandlerProps ) => {
    useEffect(() => {
        const handleBackPress = () => {
          if (showDialog) {
            setShowDialog(false);
            return true; // Prevenir el comportamiento por defecto
          }
          return false;
        };
    
        if (showDialog) {
          BackHandler.addEventListener('hardwareBackPress', handleBackPress);
        } else {
          BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
        }
    
        return () => BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
      }, [showDialog]);


      return null
}