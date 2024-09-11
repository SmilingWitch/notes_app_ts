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
      const inputRef = useRef(null);
      const handleFocus = () => {
            inputRef.current?.focus(); // Muestra el teclado
        };
        
        const [input, setinput] = useState(content);
    
        //Select fraction of text
        const [selection, setSelection] = useState({ start: 0, end: 0 });
        const [formattedText, setFormattedText] = useState("")
        
          const handleTextChange = (text: string) => {
            setInput(text); // Actualiza el primer estado
            setinput(text); // Actualiza el segundo estado
        };
        const dispatch = useDispatch()
        const noteStyles = useSelector((state: any) => state.noteStyles)
        
        console.log("NOTE STYLES", noteStyles.note_id.bold)

        useEffect(() => {
          const format = applyStyles(noteStyles,content, noteStyles.note_id.bold[0])
          setFormattedText(format)


        }, [])

        

       


        const createRange =  (selected: any, style: string) =>{
          if(selected.start !== selected.end){
            dispatch(addNotesStyle({style: style, selected: selected, noteStyles: noteStyles}))
            const format = applyStyles(noteStyles, content, selected)
            setFormattedText(format)
          }
        }

        const getSelectedText = (text: string, selection: { start: number; end: number }) => {


          const beforeText = text.substring(0, selection.start - 1);
          const selectedText = text.substring(selection.start - 1, selection.end);
          const afterText = text.substring(selection.end);

          return {beforeText, selectedText, afterText}
      };

        const applyStyles = (noteStyles: any, text: any, selected: any) => {


          const {beforeText,selectedText, afterText} = getSelectedText(text, selected)

          console.log("beforeText", beforeText)
          console.log("selectedText", selectedText)
          console.log("afterText", afterText)

          console.log("RANGE",noteStyles.note_id.bold)
          
            if(noteStyles.note_id.bold){
              return(<StyledText>
                      <StyledText >{beforeText}</StyledText>
                      <StyledText  fontWeight="bold">{selectedText}</StyledText>  
                      <StyledText >{afterText}</StyledText>
                    </StyledText>
              ) }else{
              return <StyledText>{content} </StyledText>;
            }

        }
 

      /*console.log("FORMATTED",formattedText)*/

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
                


        <View>
              <ScrollView horizontal style = {styles.scroll_container}  keyboardShouldPersistTaps="always">
              <View style = {styles.icon_bx}>
                  <FormatingButton name = 'bold' onPress={() => {createRange(selection, "bold")

                  }}/>
                  <FormatingButton name = 'italic' onPress={() => createRange(selection, "italic")}/>
                  <FormatingButton name = 'circle' /*onPress={() => handleFormat('resalt')}*//>
                  <FormatingButton name = 'text-height' /*onPress={() => handleFormat('height')}*//>
              </View>
              <View style = {styles.icon_bx}>
                  <FormatingButton name = 'check-square-o' /*onPress={() => handleFormat('to-do-list')}*/> </FormatingButton>
                  <FormatingButton name = 'list-ul' /*onPress={() => handleFormat('list-binetas')}*//>
                  <FormatingButton name = 'list-ol' /*onPress={() => handleFormat('enum-list')}*//>

              </View>
              <View style = {styles.icon_bx}>
                  <FormatingButton name = 'align-justify' /*onPress={() => handleFormat('justify')}*//>
                  <FormatingButton name = 'align-left' /*onPress={() => handleFormat('aling-left')}*//>
                  <FormatingButton name = 'align-right' /*onPress={() => handleFormat('aling-right')}*//>
              </View>
              <View style = {styles.icon_bx}>
                  <FormatingButton name = 'rotate-right' /*onPress={() => handleFormat('back')}*//>
                  <FormatingButton name = 'rotate-left' /*onPress={() => handleFormat('behind')}*//>
              </View>
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