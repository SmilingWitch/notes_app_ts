import { View, StyleSheet } from "react-native"
import { useRef } from "react"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { ParamListBase, RouteProp } from "@react-navigation/native"
import lighTeme from "../lightTheme"
import NoteHeader from "../components/note_content/NoteHeader"
import NoteContent from "../components/note_content/NoteContent"


interface Props{
    navigation: NativeStackNavigationProp<ParamListBase>
    route: RouteProp<ParamListBase, "Note">
}

const Note = ({navigation, route}: Props) => {
    return(
        <View style = {styles.container}>
            <NoteHeader navigation = {navigation} route = {route} />
            <NoteContent route = {route} />
            {/*<FormatingBar onFormat={handleFormat}/>*/}
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: lighTeme.colors.primary
    },
    
})

export default Note