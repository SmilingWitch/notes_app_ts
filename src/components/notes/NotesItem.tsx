import { View,StyleSheet, Dimensions, TouchableOpacity, Vibration } from "react-native"
import Icon from '@expo/vector-icons/AntDesign'
import StyledText from "../common/StyledText";
import lighTeme from "../../lightTheme";
import { NotesItemProps } from "../../types";
import { useDispatch, useSelector } from "react-redux";
import { clearSelectedNote, clearSelectedNoteById, selectedNote } from "../../store/reducers";
import { useBackHandler } from "../../hooks/useBackHandler";
import { useState } from "react";
import { formatedDate } from "../../functions/formatedDate";


const NotesItem = ({ id, 
                     navigation, 
                     name, 
                     content, 
                     date, 
                     route,
                     setSelectedNotes,
                     selectedNotes }: NotesItemProps) => {

    const { category_name } = route.params;
    
    const dispatch = useDispatch()
    const isSelected = selectedNotes.includes(id);
    const [ShowThrash,setShowThrash] = useState(false)

    const selected = useSelector((state: any) => state.selectedNoteID);
    const selectNote = (id: number) => {
        if(isSelected){
            dispatch(clearSelectedNoteById(id))
            setSelectedNotes(selectedNotes.filter((itemId : number) => itemId !== id));
        }else{
            dispatch(selectedNote({id: id}))
            setSelectedNotes([...selectedNotes, id]);
        }
    }
    const {day, month, year} = formatedDate(date)
    useBackHandler({selectedItems: selectedNotes, 
                    setSelectedItems: setSelectedNotes, 
                    setShowThrash, selected,  dispatchfunction: clearSelectedNote} );

        

    return(
        <TouchableOpacity style = {isSelected ? styles.isPressed :styles.container} 
            onPress = {() => {
                navigation.navigate('Note', {
                                        name: name, 
                                        content: content, 
                                        category_name: category_name,
                                        new_note: false,
                                        id: id})}}
                                        onLongPress={() => {
                                        Vibration.vibrate(70);
                                        selectNote(id)}}
>
            <View>
                <View style = {styles.header}>
                    <StyledText fontSize='h3' fontWeight='bold'>{name}</StyledText>
                    {/*<Icon name="pushpino" style = {styles.icon}></Icon>*/}
                </View>
                <View style = {styles.text}>
                    <StyledText>{content}</StyledText> 
                </View>

            </View>
                
            <View style = {styles.footer}>
                <StyledText fontSize='small'>{day}/{month}/{year}</StyledText>
                {/*<Icon name="ellipsis1" style = {styles.icon}></Icon>*/}
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: lighTeme.colors.grey,
        minHeight: 150,
        maxHeight: 200,
        width: Dimensions.get('window').width / 2.2 ,
        marginBottom: 12,
        borderRadius: 20,
        padding: 10,
        justifyContent: 'space-between',
    },
    text : {
        marginVertical: 10,
        minHeight: 80,
        maxHeight: 100,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    icon: {
        color: lighTeme.colors.secundary,
        fontSize: lighTeme.fontSize.h3,
      },
      footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 30,
        alignItems: 'center'
      },
      isPressed: {
        backgroundColor: "black",
        minHeight: 150,
        maxHeight: 200,
        width: Dimensions.get('window').width / 2.2 ,
        marginBottom: 12,
        borderRadius: 20,
        padding: 10,
        justifyContent: 'space-between'
      }
})

export default NotesItem