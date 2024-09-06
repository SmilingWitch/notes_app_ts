import { View, StyleSheet, TouchableOpacity, Vibration, Dimensions} from "react-native"
import Ionaicons from '@expo/vector-icons/Ionicons'
import StyledText from "../common/StyledText"
import lighTeme from "../../lightTheme"
import {  FolderProps } from "../../types"


const NotesFolderItem = ({name, amount, navigation, id}: FolderProps) => {

  
    return(
        <View style = {styles.container} 
        
        /*onPress={() => navigation.navigate('Notes', {
          name: name,
          category_name: name
        })}*/>
          <>
          <View style = {styles.header}  >
            <Ionaicons name="folder-open-outline" style = {styles.icon}></Ionaicons>
            <StyledText>{name}</StyledText>    
          </View>
            <View>
                <StyledText style = {styles.text} fontSize = 'small' fontWeight='bold'>{amount}</StyledText>
            </View>
          </>
            
        </View>
    )
}
const styles = StyleSheet.create({
        container: {
            borderRadius: 20,
            paddingHorizontal: 8,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: Dimensions.get('window').width * 0.67,
            left: -7
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

})




export default NotesFolderItem