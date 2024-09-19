import { StyleSheet, ScrollView, KeyboardAvoidingView, View} from "react-native"
import { DiaryContentProps } from "../../../types"
import { useRef, useState } from "react"
import StyledTextInput from "../../note_content/StyledTextInput"
import lighTeme from "../../../lightTheme"
import formatedDataWithString from "../../../functions/formatedDataWithString"


const DiaryNoteContent = ({route, setInput}: DiaryContentProps) => {

    const { date, title, content } = route.params

    const inputRef = useRef(null);
    const handleFocus = () => {
        inputRef.current?.focus(); // Muestra el teclado
    };
      
    const [content_copy, setContent] = useState(content || "");
    const [title_copy, setTitle] = useState(title || "");
    const [date_copy, setDate] = useState(date || 0);
    const { month, year, dayOfMonth } = formatedDataWithString(date_copy)

    const handleTextChange = (text: string) => {
        setContent(text); // Actualiza el segundo estado
        setInput({title: title_copy, content: content_copy, date: date_copy})
    };
      
    const handleTitleChange = (text: string) => {
        setTitle(text); // Actualiza el primer estado
        setInput({title: title_copy, content: content_copy, date: date_copy})
    };
        

    return(
            <KeyboardAvoidingView
            behavior="padding" 
            style={styles.container}
            >
                <View style = {styles.bx}>
                    <View style = {styles.date_content}>
                        <View style = {styles.date}>
                            <StyledTextInput fontSize="h2" fontWeight="bold">{dayOfMonth}</StyledTextInput>
                            <StyledTextInput fontWeight="bold">{month}, {year} </StyledTextInput>
                        </View>
                        
                    </View>

                <ScrollView style = {styles.inputs_bx} keyboardShouldPersistTaps="always">
                    <StyledTextInput
                        style={styles.input}
                        name='title'
                        multiline
                        onChangeText={handleTitleChange}
                        header = 'header'
                        placeholder = "Title"
                        selectedTextStyle
                        value = {title_copy}/>

                    <StyledTextInput
                        style={styles.input}
                        name='content'
                        multiline
                        placeholder = "Write more here.."
                        onChangeText={handleTextChange}
                        header = 'header'
                        selectedTextStyle
                        autoFocus={true} // Enfoca el input al renderizar
                        onFocus={handleFocus}
                        value = {content_copy}/>
                    
                </ScrollView>

                </View>
                
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
      bx: {
        flex: 1,
        gap: 20
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
    },
    date_content: {

    },
    date:{
        flexDirection: 'row',
        alignItems: 'flex-end',
        gap: 5
    }

})

export default DiaryNoteContent