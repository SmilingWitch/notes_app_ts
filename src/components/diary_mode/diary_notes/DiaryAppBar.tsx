import { StyleSheet, TouchableOpacity } from "react-native"
import Icon from '@expo/vector-icons/AntDesign'
import { DiaryAppBarProps } from "../../../types"
import lighTeme from "../../../lightTheme"



const DiaryAppBar = ({navigation, route, date}: DiaryAppBarProps) => {



    return(
    
        <TouchableOpacity style = {styles.icon_pluss} onPress={() => navigation.navigate('DiaryNote', {title: "", content: "", new_note: true, date: date})}>
            <Icon name = "plus" style = {styles.icon}></Icon>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({

    icon: {
        fontSize: lighTeme.fontSize.h2,
        color: lighTeme.colors.textPrimary
    },
    icon_pluss:{
        position: 'absolute',
        fontSize: lighTeme.fontSize.h2,
        backgroundColor: lighTeme.colors.secundary,
        width: 60,
        height: 60,
        right:30,
        bottom: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 1000,
        alignSelf: 'flex-end'
    }
})

export default DiaryAppBar