
import { View, StyleSheet, Dimensions } from "react-native"
import lighTeme from "../lightTheme"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { ParamListBase } from "@react-navigation/native"
import NotesFolderListWithMap from "../components/notes_folder/NotesFolderListWittMap"

interface Props{
    navigation: NativeStackNavigationProp<ParamListBase>;
}


const NotesFolder = ({navigation}: Props) => {
    return(
        <View style = {styles.container}>
            <NotesFolderListWithMap navigation = {navigation}/>
        </View>
        
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: lighTeme.colors.primary,
        
    }
    
})

export default NotesFolder