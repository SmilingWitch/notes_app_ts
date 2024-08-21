import { StyleSheet, ScrollView, KeyboardAvoidingView} from "react-native"
import { useRef, useState } from "react"
import { ParamListBase, RouteProp } from "@react-navigation/native"
import StyledTextInput from "./StyledTextInput"
import lighTeme from "../../lightTheme"


interface AppParamList extends ParamListBase {
    Note: { content?: string }; 
} 

interface Props{
    route: RouteProp<AppParamList, "Note">,
    setInput: React.Dispatch<React.SetStateAction<string>>

}

const NoteContent = ({route, setInput}: Props) => {
      const {content} = route.params
        

        /*//Select fraction of text
        const [selection, setSelection] = useState({ start: 0, end: 0 });

        // Función para encontrar los límites de una palabra
        const findWordBoundary = (text: string, position: number): [number, number] => {
            let start = position;
            let end = position;

            // Busca hacia atrás para encontrar el inicio de la palabra
            while (start > 0 && text[start - 1] !== " " && text[start - 1] !== "\n") {
              start--;
            }
        
            // Busca hacia adelante para encontrar el final de la palabra
            while (end < text.length && text[end] !== " " && text[end] !== "\n") {
              end++;
            }
        
            return [start, end];
        };

        const formattedWordFnc = (sufix: string, formattedWord: string) => {
           console.log("SELECTED WORD",formattedWord )
           if( formattedWord.startsWith(sufix) && formattedWord.endsWith(sufix) ){
               formattedWord = formattedWord.slice(2, -2)
           }else{
                formattedWord = `${sufix}${formattedWord}${sufix}`
                console.log("SUFIX",formattedWord)
           }

           return formattedWord
         }

        const handleFormat = (style: any) => {
          const start = selection.start;
          const end = selection.end;
        
          if(start !== end) {
              // Encuentra el inicio y el fin de la palabra seleccionada
          const [wordStart, wordEnd] = findWordBoundary(input, start);
            
          // Extrae la palabra seleccionada
          const selectedWord = input.substring(wordStart, wordEnd);
            
          // Aplica el formato a la palabra seleccionada
          let formattedWord = selectedWord;
            
          switch (style) {
            case "bold":
              formattedWord = formattedWordFnc("**", formattedWord)

              break;
            case "italic":
              formattedWord = formattedWordFnc("//", formattedWord)
              break;
            case "underline":
              formattedWord = formattedWordFnc("-", formattedWord)
              break;
            default:
              break;
          }
      
          // Reemplaza la palabra seleccionada en el texto con la versión formateada
          setInput(input?.replace(selectedWord, formattedWord));
      
          }else{
              console.log("No se ha seleccionado ninguna palabra")
          }
        };

    

      console.log(selection)

      const applyStyles = (text: any) => {
        const parts = text.split(" "); // Divide el texto por las etiquetas de estilo
        const partsWithSignals = text.split(" ")

        console.log("partsWithSignals", partsWithSignals)
        console.log("parts", parts)

        console.log("parts",parts)
        return parts.map((part: string, index: number) => {
          if (part.startsWith('**') && part.endsWith('**') ) {
            console.log("PART",part)
            return <Text key={index} style={{ fontWeight: 800 }}>{part.slice(2, -2)}{" "}</Text>;
          } else if (part.startsWith('//') && part.endsWith('//')) {
            return <Text key={index} style={{ fontStyle: 'italic' }}>{part.slice(1, -1)}</Text>;
          } else if (part.startsWith('-') && part.endsWith('-')) {
            return <Text key={index} style={{ backgroundColor: 'grey' }}>{part.slice(3, -4)}</Text>;
          } else {
            console.log(part)
            return part + " ";
          }
        });
      };*/

      const inputRef = useRef(null);

      const handleFocus = () => {
            inputRef.current?.focus(); // Muestra el teclado
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
                        onChangeText={setInput}
                        /*onSelectionChange={({ nativeEvent: { selection } }: any) => {setSelection(selection), console.log(selection)}}
                        selection={selection} */
                        header = 'header'
                        selectedTextStyle
                        autoFocus={true} // Enfoca el input al renderizar
                        onFocus={handleFocus}
                    >{/*applyStyles(input)*/ content}</StyledTextInput>
                    
                </ScrollView>
                


        {/*<View>
              <ScrollView horizontal style = {styles.scroll_container}  keyboardShouldPersistTaps="always">
              <View style = {styles.icon_bx}>
                  <FormatingButton name = 'bold' onPress={() => handleFormat('bold')}/>
                  <FormatingButton name = 'italic' onPress={() => handleFormat('italic')}/>
                  <FormatingButton name = 'circle' onPress={() => handleFormat('resalt')}/>
                  <FormatingButton name = 'text-height' onPress={() => handleFormat('height')}/>
              </View>
              <View style = {styles.icon_bx}>
                  <FormatingButton name = 'check-square-o' onPress={() => handleFormat('to-do-list')}> </FormatingButton>
                  <FormatingButton name = 'list-ul' onPress={() => handleFormat('list-binetas')}/>
                  <FormatingButton name = 'list-ol' onPress={() => handleFormat('enum-list')}/>

              </View>
              <View style = {styles.icon_bx}>
                  <FormatingButton name = 'align-justify' onPress={() => handleFormat('justify')}/>
                  <FormatingButton name = 'align-left' onPress={() => handleFormat('aling-left')}/>
                  <FormatingButton name = 'align-right' onPress={() => handleFormat('aling-right')}/>
              </View>
              <View style = {styles.icon_bx}>
                  <FormatingButton name = 'rotate-right' onPress={() => handleFormat('back')}/>
                  <FormatingButton name = 'rotate-left' onPress={() => handleFormat('behind')}/>
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