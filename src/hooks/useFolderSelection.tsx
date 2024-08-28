// hooks/useFolderSelection.ts
import { useDispatch, useSelector } from "react-redux";
import { clearSelectedFolder, clearSelectedFolderById, selectedFolder } from "../store/reducers";


export const useFolderSelection = ( id: number, 
                                    name: string,
                                    selectedItems: number[],
                                    setSelectedItems: React.Dispatch<React.SetStateAction<number[]>>,
                                    setShowThrash: (show: boolean) => void) => {
  const dispatch = useDispatch();
  const selected = useSelector((state: any) => state.selectedFolderID);
  const isSelected = selectedItems.includes(id);

  console.log('isSelected', isSelected)


  const handlePressItem = () => {
    if (isSelected) {
        setSelectedItems(selectedItems.filter((itemId : number) => itemId !== id));
        dispatch(clearSelectedFolderById(id))
    } else {
        setSelectedItems([...selectedItems, id]);
        dispatch(selectedFolder({id, name}))  
        setShowThrash(true);
    }
  };

  const clearSelection = () => {
    dispatch(clearSelectedFolder(id));
    setShowThrash(false);
  };

  return { isSelected, handlePressItem, clearSelection, selected };
};
