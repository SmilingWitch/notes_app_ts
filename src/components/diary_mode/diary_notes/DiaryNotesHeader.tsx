import { View, StyleSheet, TouchableOpacity } from "react-native"
import Icon from '@expo/vector-icons/AntDesign'
import Icon1 from '@expo/vector-icons/FontAwesome'
import { useDispatch, useSelector } from "react-redux";
import { DrawerActions } from "@react-navigation/native";
import { AppBarDiaryProps, AppBarProps } from "../../../types";
import StyledText from "../../common/StyledText";
import { deleteNote } from "../../../store/reducers";
import lighTeme from "../../../lightTheme";

const DiaryNotesHeader = ({navigation}: AppBarDiaryProps) => {

    const selected = useSelector((state : any) => state.selectedNoteID)
    const dispatch = useDispatch()

    return(
        <View style = {styles.container} >
        <View style = {styles.header}>
            <View style = {styles.name}>
                <StyledText fontSize='h2' fontWeight='bold'>My Diary</StyledText> 
            </View>
            <View style = {styles.icon_cont}>
                <TouchableOpacity onPress = {() => navigation.navigate('Drawer')}>
                    <Icon1 name = "sticky-note-o" style = {styles.icon}></Icon1>
                </TouchableOpacity>

                {selected.length >= 1  ? // porque no pude quitarle el 0 del inicio del arreglo
                    <TouchableOpacity onPress={() => 
                        { dispatch(deleteNote(selected))}}>
                    <Icon1 name = "trash-o" style = {styles.icon}></Icon1>
                </TouchableOpacity> :
                <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                    <Icon name = "ellipsis1" style = {styles.icon}></Icon>
                </TouchableOpacity>
                }
            </View>
            
        </View> 
       
    </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: lighTeme.colors.primary,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: lighTeme.padding
    },
    icon: {
        color: lighTeme.colors.textPrimary,
        fontSize: lighTeme.fontSize.h2
    },
    name: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon_cont: {
        flexDirection: 'row',
        gap: 15
    }

})

export default DiaryNotesHeader