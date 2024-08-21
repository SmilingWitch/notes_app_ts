import { TouchableOpacity, View, StyleSheet } from "react-native"
import Icon from '@expo/vector-icons/Feather'
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { ParamListBase } from "@react-navigation/native"
import StyledText from "../common/StyledText"
import lighTeme from "../../lightTheme"


interface Props{
    navigation: NativeStackNavigationProp<ParamListBase>
}

const ManageFolderHeader = ({navigation}:Props) => {
    return(
        <View style = {styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon name = "arrow-left" style = {styles.icon}></Icon>
            </TouchableOpacity>
            <StyledText fontSize='h2' fontWeight='bold' style = {styles.text}>Manage Folders</StyledText>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      paddingVertical: 20,
      flexDirection: 'row', 
      paddingHorizontal: lighTeme.padding,
      backgroundColor: lighTeme.colors.primary,
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



export default ManageFolderHeader