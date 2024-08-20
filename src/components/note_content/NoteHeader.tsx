import { View, StyleSheet, TouchableOpacity, TextInput } from "react-native"
import Icon from '@expo/vector-icons/AntDesign'
import { useState } from "react"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { ParamListBase, RouteProp } from "@react-navigation/native"
import lighTeme from "../../lightTheme"
import StyledTextInput from "./StyledTextInput"

interface Parameters extends ParamListBase{
    Note: {name?: string}
}


interface Props{
    navigation: NativeStackNavigationProp<ParamListBase>,
    route: RouteProp<Parameters, "Note">
}

const NoteHeader = ({navigation, route}: Props) => {

    const { name } = route.params;
    const [header, setHeader] = useState(name)

    console.log(header)

    return(
        <View style = {styles.container}>
            <View style = {styles.name}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name = "arrowleft" style = {styles.icon}></Icon>
                </TouchableOpacity>

                <StyledTextInput
                    name = 'header'
                    value={header}
                    multiline
                    onChangeText={setHeader}
                    fontSize='h2' fontWeight='bold'
                />

            </View>
            <View>
                <Icon name = "check" style = {styles.icon}></Icon>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: lighTeme.padding
    },
    icon: {
        color: lighTeme.colors.textPrimary,
        fontSize: lighTeme.fontSize.h2,
        marginRight: 15
    },
    name: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        marginLeft: 15
    },
    

})

export default NoteHeader