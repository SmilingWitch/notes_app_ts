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
        const [formattedText, setFormattedText] = useState("")
        

          const handleTextChange = (text: string) => {
            setInput(text); // Actualiza el primer estado
            setinput(text); // Actualiza el segundo estado
        };
        const dispatch = useDispatch()
        const noteStyles = useSelector((state: any) => state.noteStyles)


        useEffect(() => {
          if(noteStyles[id]){
            const format = applyInitialStyles(noteStyles,content, id)
            setFormattedText(format)
          } else {
            setFormattedText(content)
          }
          
        }, [noteStyles])

       

        console.log("noteStyles",noteStyles)

        const createRange =  (selected: any, style: string, note_id: number) =>{

          if(selected.start !== selected.end){
            dispatch(addNotesStyle({style: style, selected: selected, noteStyles: noteStyles, note_id: note_id}))
            const format = applyStyles(noteStyles, content, noteStyles[note_id].bold[0], note_id)
            setFormattedText(format)
          }
        }

        const getSelectedText = (text: string, selection: { start: number; end: number }) => {

          /*console.log("SELECTION", selection )*/
          const beforeText = text.substring(0, selection.start);
          const selectedText = text.substring(selection.start, selection.end);
          const afterText = text.substring(selection.end);

          return {beforeText, selectedText, afterText}
      };

        const applyStyles = (noteStyles: any, text: any, selected: any, note_id: number) => {

          
          const {beforeText,selectedText, afterText} = getSelectedText(text, selected)          
            if(noteStyles[note_id].bold){
              return(<StyledText>
                      <StyledText >{beforeText}</StyledText>
                      <StyledText  fontWeight="bold">{selectedText}</StyledText>  
                      <StyledText >{afterText}</StyledText>
                    </StyledText>
              ) }else{
              return <StyledText>{content} </StyledText>;
            }

        }



        const applyInitialStyles = (noteStyles: any, text: string, note_id: number) => {
          let styledTextComponents: JSX.Element[] = [];
          let currentIndex = 0; // Para rastrear la posición actual del texto
        
          // Verifica si hay estilos aplicados en la nota
          if (noteStyles[note_id]) {
            // Recorre cada estilo (por ejemplo: 'bold', 'italic', etc.)
            Object.keys(noteStyles[note_id]).forEach((style: string) => {
              // Recorre cada rango para el estilo
              noteStyles[note_id][style].forEach((range: { start: number; end: number }) => {
                // Extraer el texto antes del rango
                if (currentIndex < range.start) {
                  console.log("currentIndex",currentIndex)
                  console.log("range.start",range.start - 1)
                  styledTextComponents.push(
                    //range.start
                    <StyledText key={`text-${currentIndex}`}>{text.substring(currentIndex, range.start - 1 )}</StyledText>
                  );
                }
        
                // Extraer el texto dentro del rango y aplicar el estilo
                styledTextComponents.push(
                  <StyledText key={`styled-${range.start}`} fontWeight={style === 'bold' ? 'bold' : undefined}>
                    {text.substring(range.start -1  , range.end)}
                  </StyledText>
                );
        
                // Actualizar la posición actual
                currentIndex = range.end;
              });
            });
        
            // Añadir el texto restante después del último rango
            if (currentIndex < text.length) {
              styledTextComponents.push(
                <StyledText key={`text-${currentIndex}`}>{text.substring(currentIndex)}</StyledText>
              );
            }
          } else {
            /*console.log("TEXTO ORIGINAL")*/
            // Si no hay estilos aplicados, devolver el texto original
            styledTextComponents.push(<StyledText key="plain-text">{text}</StyledText>);
          }
        
          return <>{styledTextComponents}</>;
        };
        
 

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
                


        {/*<View>
              <ScrollView horizontal style = {styles.scroll_container}  keyboardShouldPersistTaps="always">
              <View style = {styles.icon_bx}>
                  <FormatingButton name = 'bold' onPress={() => {createRange(selection, "bold", id)

                  }}/>
                  <FormatingButton name = 'italic' onPress={() => createRange(selection, "italic", id)}/>
                  <FormatingButton name = 'circle' />
                  <FormatingButton name = 'text-height' />
              </View>
              <View style = {styles.icon_bx}>
                  <FormatingButton name = 'check-square-o' > </FormatingButton>
                  <FormatingButton name = 'list-ul' />
                  <FormatingButton name = 'list-ol' />

              </View>
              <View style = {styles.icon_bx}>
                  <FormatingButton name = 'align-justify' />
                  <FormatingButton name = 'align-left' />
                  <FormatingButton name = 'align-right' />
              </View>
              <View style = {styles.icon_bx}>
                  <FormatingButton name = 'rotate-right' />
                  <FormatingButton name = 'rotate-left' />
              </View>
          </ScrollView>
          </View>*/}
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