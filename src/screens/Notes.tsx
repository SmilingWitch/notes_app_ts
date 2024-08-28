import { View, StyleSheet, TouchableWithoutFeedback } from "react-native"
import lighTeme from "../lightTheme"
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ParamListBase } from "@react-navigation/native";
import Appbar from "../components/notes/Appbar";
import { RouteProp } from "@react-navigation/native";
import NotesItemHeader from "../components/notes/NotesItemHeader";
import NotesList from "../components/notes/NotesList";
import { useDispatch } from "react-redux";
import {  selectedNote } from "../store/reducers";


interface Params extends ParamListBase{
    Notes: {category_name: string}
}


interface Props {
    navigation: NativeStackNavigationProp<ParamListBase>;
    route: RouteProp<Params, 'Notes'>;
  }

const Notes = ({navigation, route}: Props) => {

    const {category_name } = route.params
    const dispatch = useDispatch()
    


    return(
        <TouchableWithoutFeedback onPress={() => dispatch(selectedNote(0))} >
            <View style={styles.container}>
                <NotesItemHeader navigation = {navigation} route = {route}></NotesItemHeader>
                <NotesList navigation = {navigation} route = {route}/>
                <Appbar navigation = {navigation} route = {route}></Appbar>

            </View>
            
        </TouchableWithoutFeedback>
        
    )
}


const styles = StyleSheet.create({
    container: {
     flex: 1,
     backgroundColor: lighTeme.colors.primary,
     
    } 
   });

export default Notes