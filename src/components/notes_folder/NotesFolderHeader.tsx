import { View, StyleSheet, TouchableOpacity } from "react-native"
import Icon from '@expo/vector-icons/Feather'
import StyledText from "../common/StyledText"
import lighTeme from "../../lightTheme"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { ParamListBase } from "@react-navigation/native"

interface Props{
    navigation: NativeStackNavigationProp<ParamListBase>
}

const NotesFolderHeader = ({navigation}: Props) => {

    return (
        <View style = {styles.container}>
          <View style = {styles.header}>
            <TouchableOpacity onPress = {() => navigation.goBack()}>
              <Icon name = 'arrow-left' style = {styles.icon}></Icon>
            </TouchableOpacity>
           
            <StyledText fontSize='h2' fontWeight='bold' style = {styles.text}>Folders</StyledText>
          </View>
            
            <TouchableOpacity onPress = {() => navigation.navigate('ManageFolders')}>
              <Icon name="plus" style = {styles.icon}></Icon>
            </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({
      container: {
        paddingVertical: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row', 
        paddingHorizontal: lighTeme.padding,
        backgroundColor: lighTeme.colors.primary
      },
      header: {
        flexDirection: 'row',
        alignItems: 'center'
      },
      icon: {
        color: lighTeme.colors.textPrimary,
        fontSize: lighTeme.fontSize.h2
      },
      text: {
        marginLeft: 15
    }
})


export default NotesFolderHeader