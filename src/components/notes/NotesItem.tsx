import { View,StyleSheet, Dimensions, TouchableOpacity } from "react-native"
import Icon from '@expo/vector-icons/AntDesign'
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ParamListBase } from "@react-navigation/native";
import StyledText from "../common/StyledText";
import lighTeme from "../../lightTheme";


interface Props{
    id: number,
    name: string,
    content: string,
    date: any,
    navigation: NativeStackNavigationProp<ParamListBase>;
}


const NotesItem = ({ id, navigation, name, content, date}: Props) => {
    return(
        <TouchableOpacity style = {styles.container} onPress = {() => {navigation.navigate('Note', {name: name, content: content})}}>
            <View>
                <View style = {styles.header}>
                    <StyledText fontSize='h2' fontWeight='bold'>{name}</StyledText>
                    <Icon name="pushpino" style = {styles.icon}></Icon>
                </View>
                <View style = {styles.text}>
                    <StyledText>{content}</StyledText> 
                </View>

            </View>
                
            <View style = {styles.footer}>
                <StyledText fontSize='small'>{date}</StyledText>
                <Icon name="ellipsis1" style = {styles.icon}></Icon>
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
        justifyContent: 'space-between'
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
      }
})

export default NotesItem