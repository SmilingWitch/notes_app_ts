import { View, StyleSheet, TouchableOpacity } from "react-native"
import Icon from '@expo/vector-icons/AntDesign'
import Icon1 from '@expo/vector-icons/FontAwesome'
import lighTeme from "../../lightTheme"
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ParamListBase } from "@react-navigation/native";

interface Props {
    navigation: NativeStackNavigationProp<ParamListBase>;
  }

const Appbar = ({navigation}: Props) => {
    return(
        <View style = {styles.container}>
            <TouchableOpacity onPress = {() => navigation.navigate('NotesFolder')}>
                <Icon1 name = "folder-o" style = {styles.icon}></Icon1>
            </TouchableOpacity>
            <TouchableOpacity onPress = {() => navigation.navigate('')}>
                <Icon name = "setting" style = {styles.icon}></Icon>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.icon_pluss} onPress={() => navigation.navigate('Note', {name: "Untiteled Note", content: ""})}>
                <Icon name = "plus" style = {styles.icon}></Icon>
            </TouchableOpacity>
            <TouchableOpacity onPress = {() => navigation.navigate('')}>
                <Icon1 name = "trash-o" style = {styles.icon}></Icon1>
            </TouchableOpacity>
            <Icon name = "search1" style = {styles.icon}></Icon>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: lighTeme.colors.grey,
        height: 60,
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-between'
    },
    icon: {
        fontSize: lighTeme.fontSize.h2,
        color: lighTeme.colors.textPrimary
    },
    icon_pluss:{
        fontSize: lighTeme.fontSize.h2,
        backgroundColor: lighTeme.colors.secundary,
        width: 50,
        height: 50,
        bottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 1000
        
    }
})

export default Appbar