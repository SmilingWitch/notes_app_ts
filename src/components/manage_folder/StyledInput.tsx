import { TextInput, StyleSheet } from "react-native"
import lighTeme from "../../lightTheme"
import { StyleInputProps } from "../../types"

const StyledInput = ({style = {}, error ,value , onChangeText, ...props}: StyleInputProps) => {
    const inputStyles = [
        styles.textInput,
        style,
        error && styles.error
    ]

    return(
        <TextInput 
            style = {inputStyles} 
            onChangeText ={onChangeText}
            {...props}></TextInput>
    )
}


const styles = StyleSheet.create({
    textInput: {
        borderBottomWidth: 2,
        paddingBottom: 10,
        marginBottom: 2,
        borderColor: lighTeme.colors.textPrimary,
        bottom: 10,
        fontSize: lighTeme.fontSize.regular,
        color: lighTeme.colors.textPrimary
     },
     error: {
        borderColor: 'red'
     }
})


export default StyledInput