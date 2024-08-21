import { View, StyleSheet } from "react-native"
import { useState } from "react"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { ParamListBase, RouteProp } from "@react-navigation/native"
import lighTeme from "../lightTheme"
import NoteHeader from "../components/note_content/NoteHeader"
import NoteContent from "../components/note_content/NoteContent"
import { useDispatch, useSelector } from "react-redux"
import { addNote, UserState } from "../store/reducers"


interface Props{
    navigation: NativeStackNavigationProp<ParamListBase>
    route: RouteProp<ParamListBase, "Note">
}


const Note = ({navigation, route}: Props) => {

    const {content} = route.params
    const{category_name} = route.params
    console.log("CATEGORY 20",category_name)
    const [input, setInput] = useState(content);

    const notes = useSelector((state : UserState) => state.notes);
        

        

    return(
        <View style = {styles.container}>
            <NoteHeader navigation = {navigation} route = {route} input = {input} />
            <NoteContent route = {route} setInput = {setInput} />
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