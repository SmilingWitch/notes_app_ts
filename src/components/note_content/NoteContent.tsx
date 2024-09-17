import { StyleSheet, ScrollView, KeyboardAvoidingView, Text, View} from "react-native"
import { useEffect, useRef, useState} from "react"
import StyledTextInput from "./StyledTextInput"
import lighTeme from "../../lightTheme"
import { NoteContentProps } from "../../types"
import FormatingButton from "./FormatingButton"
import { useDispatch, useSelector } from "react-redux"
import { addNotesStyle } from "../../store/reducers"
import StyledText from "../common/StyledText"



const NoteContent = ({route, setInput}: NoteContentProps) => {
      const {content} = route.params
      const {id} = route.params

      console.log(content)
      const inputRef = useRef(null);
      const handleFocus = () => {
            inputRef.current?.focus(); // Muestra el teclado
        };
        
        const [input, setinput] = useState(content);
    
        //Select fraction of text
        const [selection, setSelection] = useState({ start: 0, end: 0 });
        const [formattedText, setFormattedText] = useState(content)
        

          const handleTextChange = (text: string) => {
            setInput(text); // Actualiza el primer estado
            setinput(text); // Actualiza el segundo estado
        };
        

    return(
            <KeyboardAvoidingView
            behavior="padding" 
            style={styles.container}
            >
                <ScrollView style = {styles.inputs_bx} keyboardShouldPersistTaps="always">
                    <StyledTextInput
                        style={styles.input}
                        name='content'
                        multiline
                        onChangeText={handleTextChange}
                        onSelectionChange={({ nativeEvent: { selection } }: any) => {setSelection(selection)}}
                        selection={selection} 
                        header = 'header'
                        selectedTextStyle
                        autoFocus={true} // Enfoca el input al renderizar
                        onFocus={handleFocus}
                    > {formattedText}</StyledTextInput>
                    
                </ScrollView>
            </KeyboardAvoidingView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: lighTeme.colors.primary,
        paddingHorizontal: lighTeme.padding,
    },
    scroll_container: {
        height: 50,
        borderRadius: 10,
        marginBottom: 3
        
      },
      icon_bx: {
          flexDirection: 'row',
          backgroundColor: lighTeme.colors.grey,
  
          margin: 3 ,
          justifyContent: 'space-between',
          alignItems: 'center',
          borderRadius: 10
      },
      touchable: {
          position: 'relative',
          height: 40,
          alignContent: 'center',
          alignItems: 'center',
          justifyContent: 'center',
      },
      icon: {
          color: lighTeme.colors.textPrimary,
          fontSize: lighTeme.fontSize.regular,
          marginHorizontal: 10
        },
    input: {
        color: lighTeme.colors.textPrimary,
    },
    inputs_bx: {
        flex: 1
    }

})

export default NoteContent