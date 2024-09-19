
import { View, StyleSheet, TouchableOpacity } from "react-native"
import { useState } from "react"
import Icon from '@expo/vector-icons/AntDesign'
import { DiaryHeaderProps} from "../../../types"
import StyledTextInput from "../../note_content/StyledTextInput"
import lighTeme from "../../../lightTheme"
import { handleAddEntry } from "../../../functions/handleAddEntry"
import { useDispatch } from "react-redux"



const DiaryNoteHeader = ({navigation, route, input}: DiaryHeaderProps) => {

    const { new_note } = route.params

    const dispatch = useDispatch()

    console.log(input)


    return(
        <View style = {styles.container}>
            <View style = {styles.name}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name = "arrowleft" style = {styles.icon}></Icon>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => 
                {   handleAddEntry(input.title,input.content, 29, new_note, input.date, dispatch ),
                    navigation.goBack()
                }}>
                <Icon name = "check" style = {styles.icon}></Icon>
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
        paddingHorizontal: lighTeme.padding
    },
    icon: {
        color: lighTeme.colors.textPrimary,
        fontSize: lighTeme.fontSize.h2,
        marginRight: 15
    },
    name: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        marginLeft: 15
    },
    

})

export default DiaryNoteHeader