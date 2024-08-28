
import { View, StyleSheet, TouchableOpacity, Vibration, BackHandler} from "react-native"
import Ionaicons from '@expo/vector-icons/Ionicons'
import StyledText from "../common/StyledText"
import lighTeme from "../../lightTheme"
import { FolderPropsWithoutTouch } from "../../types"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {  clearSelectedFolder, clearSelectedFolderById, selectedFolder } from "../../store/reducers"

const NotesFolderItemWithoutTouch = ({name, amount, id, setShowThrash, selectedItems, setSelectedItems}:  FolderPropsWithoutTouch) => {

  const selected = useSelector((state: any) => state.selectedFolderID)
  const dispatch = useDispatch()
  const isSelected = selectedItems.includes(id);

  const handlePressItem = (id : number, name: string) => {
    if (isSelected) {
      setSelectedItems(selectedItems.filter((itemId : number) => itemId !== id));
      dispatch(clearSelectedFolderById(id))
    } else {
      setSelectedItems([...selectedItems, id]);
      dispatch(selectedFolder({id, name}))  
    }
  };

  useEffect(() => {
    if(selected.length !== 0){
      const backAction = () => {
        dispatch(clearSelectedFolder(id))
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

    return(
        <TouchableOpacity style = {isSelected ? styles.isPressed : styles.container} 
        onLongPress={() => {
          Vibration.vibrate(70);
          setShowThrash(true)
          handlePressItem(id, name);  
           
          }}>
          <>
          <View style = {styles.header} >
            <Ionaicons name="folder-open-outline" style = {styles.icon}></Ionaicons>
            <StyledText>{name}</StyledText>    
          </View>
            <View>
                <StyledText style = {styles.text} fontSize = 'small' fontWeight='bold'>{amount}</StyledText>
            </View>
          </>
            
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
        container: {
            marginBottom: 10,
            padding: 10,
            borderRadius: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
      header: {
        alignItems: 'center',
        flexDirection: 'row'
      },
      icon: {
        color: lighTeme.colors.textPrimary,
        fontSize: lighTeme.fontSize.h3,
        marginRight:10
      },
      text: {
        color: lighTeme.colors.lightGrey
    
      },
      isPressed: {
        backgroundColor: lighTeme.colors.grey,
        marginBottom: 10,
        padding: 10,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      }
})




export default NotesFolderItemWithoutTouch