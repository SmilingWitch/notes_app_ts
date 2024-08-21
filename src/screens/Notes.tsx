import { View, StyleSheet } from "react-native"
import lighTeme from "../lightTheme"
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ParamListBase } from "@react-navigation/native";
import Appbar from "../components/notes/Appbar";
import { RouteProp } from "@react-navigation/native";
import NotesItemHeader from "../components/notes/NotesItemHeader";
import NotesList from "../components/notes/NotesList";


interface Params extends ParamListBase{
    Notes: {category_name: string}
}


interface Props {
    navigation: NativeStackNavigationProp<ParamListBase>;
    route: RouteProp<Params, 'Notes'>;
  }

const Notes = ({navigation, route}: Props) => {

    const {category_name } = route.params
    console.log(category_name)


    return(
        <View style={styles.container}>
            <NotesItemHeader navigation = {navigation} route = {route}></NotesItemHeader>
            <NotesList navigation = {navigation} route = {route}/>
            <Appbar navigation = {navigation} route = {route}></Appbar>
        </View>
        
    )
}


const styles = StyleSheet.create({
    container: {
     flex: 1,
     backgroundColor: lighTeme.colors.primary,
     
    } 
   });

export default Notes