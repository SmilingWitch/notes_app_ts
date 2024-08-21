import { TextInput, StyleSheet, StyleProp, TextStyle} from "react-native"
import { useEffect, useRef } from "react";
import lighTeme from "../../lightTheme";


interface Props{
    error?: string,
    color?: string,
    fontSize?: string,
    fontWeight?: string,
    header?: string,
    style?: StyleProp<TextStyle>,
    name?: string,
    value?: string,
    multiline?: boolean,
    onChangeText?: (text: string) => void,
    [x: string]: any;

}


const StyledTextInput = ({style = {}, error, color, fontSize, fontWeight, header , ...props}: Props) => {
    
    const inputRef = useRef<TextInput>(null);

    useEffect(() => {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }, []);



    const inputStyles = [
        styles.textInput,
        color === 'primary' && styles.colorPrimary,
        color === 'secundary' && styles.colorSecundary,
        fontSize === 'h1' && styles.h1,
        fontSize === 'h2' && styles.h2,
        fontSize === 'h3' && styles.h3,
        fontSize === 'small' && styles.small,
        fontWeight === 'bold' && styles.bold,
        style,
    ]
    return(
            <TextInput 
                  style = {header ?  styles.notHeader: inputStyles } 
                  {...props} 
                  ref= {header && inputRef} 
                  editable 
                  multiline 
                  inputMode="text"
                  textAlignVertical="top"></TextInput>
        
    )
}


const styles = StyleSheet.create({
    textInput: {
        borderColor: lighTeme.colors.primary,
        fontSize: lighTeme.fontSize.regular,
        color: lighTeme.colors.textPrimary,
     },
     notHeader: {
        borderColor: lighTeme.colors.primary,
        fontSize: lighTeme.fontSize.regular,
        color: lighTeme.colors.textPrimary,
     },
     error: {
        borderColor: 'red'
     },
     colorPrimary: {
        color: lighTeme.colors.textPrimary,
        
    },
    colorSecundary: {
        color: lighTeme.colors.primary
    },
    h1: {
        fontSize: lighTeme.fontSize.h1
    },
    h2: {
        fontSize: lighTeme.fontSize.h2
    },
    h3: {
        fontSize: lighTeme.fontSize.h3
    },
    regular: {
        fontSize: lighTeme.fontSize.regular,
        fontWeight: lighTeme.fontWeight.normal,
        color: lighTeme.colors.textPrimary
    },
    small: {
        fontSize: lighTeme.fontSize.small
    },
    bold: {
        fontWeight: lighTeme.fontWeight.bold
    }
})


export default StyledTextInput