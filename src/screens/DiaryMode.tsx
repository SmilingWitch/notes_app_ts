import { View, StyleSheet } from "react-native";
import lighTeme from "../lightTheme";
import DiaryAppBar from "../components/diary_mode/diary_notes/DiaryAppBar";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";
import { ParamListBase, RouteProp } from "@react-navigation/native";
import DiaryNotesHeader from "../components/diary_mode/diary_notes/DiaryNotesHeader";
import DiaryNotesList from "../components/diary_mode/diary_notes/DiaryNoteList";
import CalendarBtn from "../components/diary_mode/diary_notes/CalendarBtn";


interface Props {
    navigation: NativeStackNavigationProp<ParamListBase>;
    route: RouteProp<ParamListBase, 'Diary'>;
  }


const DiaryMode = ({navigation, route}: Props) => {

    return(
        <View style = {styles.container} >
            <DiaryNotesHeader navigation = {navigation}/>
            <DiaryNotesList navigation = {navigation}/>
            <DiaryAppBar navigation = {navigation} route = {route} date ={ Date.now()}/>
            <CalendarBtn navigation = {navigation}/>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
     flex: 1,
     backgroundColor: lighTeme.colors.primary,
     
    } 
   });
 export default DiaryMode