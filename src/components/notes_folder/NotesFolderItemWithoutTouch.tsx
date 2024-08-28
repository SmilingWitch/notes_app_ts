
import { View, StyleSheet, TouchableOpacity, Vibration} from "react-native"
import Ionaicons from '@expo/vector-icons/Ionicons'
import StyledText from "../common/StyledText"
import lighTeme from "../../lightTheme"
import { FolderPropsWithoutTouch } from "../../types"
import { useFolderSelection } from "../../hooks/useFolderSelection"
import { useBackHandler } from "../../functions/useBackHandler"

const NotesFolderItemWithoutTouch = ({name, amount, id, setShowThrash, selectedItems, setSelectedItems}:  FolderPropsWithoutTouch) => {

  const { isSelected, handlePressItem,selected } = useFolderSelection({id, 
                                                                      name, 
                                                                      selectedItems,
                                                                      setSelectedItems, 
                                                                      setShowThrash});

  useBackHandler( {selectedItems, setSelectedItems, setShowThrash, selected} );

    return(
        <TouchableOpacity style = {isSelected ? styles.isPressed : styles.container} 
        onLongPress={() => {
          Vibration.vibrate(70);
          setShowThrash(true)
          handlePressItem();  
           
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