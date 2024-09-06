import { View, StyleSheet, TouchableOpacity } from "react-native"
import Icon from '@expo/vector-icons/AntDesign'
import Icon1 from '@expo/vector-icons/FontAwesome'
import lighTeme from "../../lightTheme"
import { AppBarProps } from "../../types";


const Appbar = ({navigation, route}: AppBarProps) => {

    const {category_name} = route.params


    return(
    
        <TouchableOpacity style = {styles.icon_pluss} onPress={() => navigation.navigate('Note', {name: "Untiteled Note", content: "", category_name: category_name, new_note: true})}>
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

export default Appbar