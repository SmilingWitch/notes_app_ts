import { View, StyleSheet } from "react-native"
import { useState } from "react"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { ParamListBase, RouteProp } from "@react-navigation/native"
import lighTeme from "../lightTheme"
import DiaryNoteContent from "../components/diary_mode/diary_note_content/DiaryNoteContent"
import DiaryNoteHeader from "../components/diary_mode/diary_note_content/DiaryNoteHeader"


interface Props{
    navigation: NativeStackNavigationProp<ParamListBase>
    route: RouteProp<ParamListBase, "DiaryNote">
}


const DiaryNote = ({navigation, route}: Props) => {


    const [input, setInput] = useState({title: 'Title', content: 'Write more here..', date: Date.now()});
   

    return(
        <View style = {styles.container}>
            <DiaryNoteHeader navigation = {navigation} route = {route} input = {input} />
            <DiaryNoteContent setInput={setInput} route = {route} />
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: lighTeme.colors.primary
    },
    
})

export default DiaryNote