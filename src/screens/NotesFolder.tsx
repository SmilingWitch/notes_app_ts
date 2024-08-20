
import { View, StyleSheet } from "react-native"
import lighTeme from "../lightTheme"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { ParamListBase } from "@react-navigation/native"
import NotesFolderHeader from "../components/notes_folder/NotesFolderHeader"
import NotesFolderList from "../components/notes_folder/NotesFolderList"

interface Props{
    navigation: NativeStackNavigationProp<ParamListBase>;
}


const NotesFolder = ({navigation}: Props) => {
    return(
        <View style = {styles.container}>
            <NotesFolderHeader navigation = {navigation} />
            <NotesFolderList navigation = {navigation} touch = {true}/>
        </View>
        
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: lighTeme.colors.primary
    }
    
})

export default NotesFolder