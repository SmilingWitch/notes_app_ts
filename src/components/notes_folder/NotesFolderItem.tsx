import { View, StyleSheet, TouchableOpacity} from "react-native"
import Ionaicons from '@expo/vector-icons/Ionicons'
import StyledText from "../common/StyledText"
import lighTeme from "../../lightTheme"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { ParamListBase } from "@react-navigation/native"


interface Props{
    name: string,
    amount: number,
    navigation: NativeStackNavigationProp<ParamListBase>
}

const NotesFolderItem = ({name, amount, navigation}: Props) => {

    return(
        <TouchableOpacity style = {styles.container} onPress={() => navigation.navigate('Notes', {
          name: name
        })}>
          <>
          <View style = {styles.header}  >
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
      }
})




export default NotesFolderItem