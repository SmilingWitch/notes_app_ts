import { TouchableOpacity, StyleSheet } from "react-native"
import Icon from '@expo/vector-icons/AntDesign'
import lighTeme from "../../../lightTheme"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { ParamListBase } from "@react-navigation/native"

interface Prop {
    navigation: NativeStackNavigationProp<ParamListBase>
}

const CalendarBtn = ({navigation}: Prop) => {

    return(
        <TouchableOpacity style = {styles.icon_calendar} onPress={() => navigation.navigate('Calendar')}>
            <Icon name = "calendar" style = {styles.icon}></Icon>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    icon_calendar: {
        position: 'absolute',
        fontSize: lighTeme.fontSize.h2,
        backgroundColor: lighTeme.colors.grey,
        width: 35,
        height: 35,
        right:100,
        bottom: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 1000,
        alignSelf: 'flex-start'
    },
    icon: {
        fontSize: lighTeme.fontSize.h3,
        color: lighTeme.colors.textPrimary,
        
    }
})

export default CalendarBtn