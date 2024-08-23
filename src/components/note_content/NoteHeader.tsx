import { View, StyleSheet, TouchableOpacity } from "react-native"
import { useState } from "react"
import Icon from '@expo/vector-icons/AntDesign'
import lighTeme from "../../lightTheme"
import StyledTextInput from "./StyledTextInput"
import { useDispatch } from "react-redux"
import { HeaderProps } from "../../types"
import { handleAddNote } from "../../functions/handleAddNote"


const NoteHeader = ({navigation, route, input}: HeaderProps) => {

    const { name } = route.params;
    const { new_note = false } = route.params;
    const { id } = route.params;
    const { category_name = "" } = route.params;
    const [header, setHeader] = useState(name || '')
    const dispatch = useDispatch();


    return(
        <View style = {styles.container}>
            <View style = {styles.name}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name = "arrowleft" style = {styles.icon}></Icon>
                </TouchableOpacity>

                <StyledTextInput
                    name = 'header'
                    value={header}
                    multiline
                    onChangeText={setHeader}
                    fontSize='h2' fontWeight='bold'
                />

            </View>
            <TouchableOpacity onPress={() => 
                {   handleAddNote(header, input, category_name, id, new_note, dispatch ),
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

export default NoteHeader