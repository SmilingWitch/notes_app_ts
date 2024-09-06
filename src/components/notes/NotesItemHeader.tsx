import { View, StyleSheet, TouchableOpacity } from "react-native"
import StyledText from "../common/StyledText"
import lighTeme from "../../lightTheme"
import ScrollCategories from "./ScrollCategories";
import { AppBarProps } from "../../types";
import Icon from '@expo/vector-icons/AntDesign' 
import Icon1 from '@expo/vector-icons/FontAwesome'
import { useDispatch, useSelector } from "react-redux";
import { deleteNote} from "../../store/reducers";
import { DrawerActions } from "@react-navigation/native";

const NotesItemHeader = ({navigation, route}: AppBarProps) => {

    const selected = useSelector((state : any) => state.selectedNoteID)
    const dispatch = useDispatch()

    return(
        <View style = {styles.container} >
        <View style = {styles.header}>
            <View style = {styles.name}>
                <StyledText fontSize='h2' fontWeight='bold'>Notella</StyledText> 
            </View>
            <View style = {styles.icon_cont}>
                <TouchableOpacity /*onPress = {() => navigation.navigate('')}*/>
                    <Icon name = "search1" style = {styles.icon}></Icon>
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
        
        <View>
            <ScrollCategories navigation = {navigation} route = {route}/>
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

export default NotesItemHeader