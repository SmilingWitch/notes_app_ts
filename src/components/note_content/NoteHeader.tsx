import { View, StyleSheet, TouchableOpacity, TextInput } from "react-native"
import Icon from '@expo/vector-icons/AntDesign'
import { useState } from "react"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { ParamListBase, RouteProp } from "@react-navigation/native"
import lighTeme from "../../lightTheme"
import StyledTextInput from "./StyledTextInput"
import { useDispatch } from "react-redux"
import { addNote } from "../../store/reducers"

interface Parameters extends ParamListBase{
    Note: {
        name?: string,
        category_name?: string
    }
}

interface Props{
    navigation: NativeStackNavigationProp<ParamListBase>,
    route: RouteProp<Parameters, "Note">,
    input: string
}

const NoteHeader = ({navigation, route, input}: Props) => {

    const { name } = route.params;
    const { category_name } = route.params;
    const [header, setHeader] = useState(name || '')
    const [category, setCategory] = useState(category_name || '')

    console.log("category_name", category_name)

    const dispatch = useDispatch();
    const handleAddNote = (title: string, content: string, category: string) => {
        if(content !== "" && content !== undefined && title !== undefined && category !== undefined){
            dispatch(addNote({ title, content, category }));
        }else{
           console.log("No se ha escrito nada") 
        }  
      };

    console.log("HEADERRRRRRRRRRR",header)

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
            <TouchableOpacity onPress={() => 
                {   handleAddNote(header, input, category),
                    navigation.goBack()
                }}>
                <Icon name = "check" style = {styles.icon}></Icon>
            </TouchableOpacity>
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