import { View, StyleSheet, TouchableOpacity } from "react-native"
import StyledText from "../common/StyledText"
import lighTeme from "../../lightTheme"
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ParamListBase } from "@react-navigation/native";

interface Props {
    name: string,
    amount: number,
    active:  boolean,
    navigation: NativeStackNavigationProp<ParamListBase>;
}


const CategoryItem = ({name, amount, navigation, active}: Props) => {

    const containerStyle = {
        ...styles.container,
        ...(active && styles.containerActive)
      };
      const numberStyle = {
        ...styles.number,
        ...(active && styles.numberActive)
      };

    return(
        <TouchableOpacity 
            style = {containerStyle} 
            onPress = {() => navigation.navigate('Notes', {name: name})}>
            <StyledText color = {active ? 'secondary': "primary"} >{name}</StyledText>
            <View style = {numberStyle} ><StyledText fontSize = 'small' style = {styles.text}>{amount}</StyledText></View>
        </TouchableOpacity>    
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: lighTeme.colors.grey,
        borderRadius: 100,
        marginRight: 15,
        flexDirection: 'row',
        alignItems: 'center',
        minWidth: 50,
        justifyContent: 'space-between'
    },
    number: {
        width: 25,
        height: 25,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: lighTeme.colors.white,
        marginLeft: 10 ,
        
    },
    text: {
        color: lighTeme.colors.primary
    },
    containerActive: {
        backgroundColor: lighTeme.colors.white,
        color: lighTeme.colors.textSecundary
    },
    numberActive: {
        backgroundColor: lighTeme.colors.lightGrey,
    }
})

export default CategoryItem