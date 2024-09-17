import { View, StyleSheet } from "react-native";
import lighTeme from "../../../lightTheme";
import DiaryAppBar from "./DiaryAppBar";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";
import { ParamListBase, RouteProp } from "@react-navigation/native";
import DiaryNotesHeader from "./DiaryNotesHeader";
import DiaryNotesList from "./DiaryNoteList";
import CalendarBtn from "./CalendarBtn";


interface Props {
    navigation: NativeStackNavigationProp<ParamListBase>;
    route: RouteProp<ParamListBase, 'Notes'>;
  }


const DiaryMode = ({navigation, route}: Props) => {

    return(
        <View style = {styles.container} >
            <DiaryNotesHeader navigation = {navigation}/>
            <DiaryNotesList/>
            <DiaryAppBar navigation = {navigation} route = {route}/>
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