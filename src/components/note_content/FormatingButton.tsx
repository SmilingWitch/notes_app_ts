import { TouchableOpacity, StyleSheet } from "react-native"
import Icon from '@expo/vector-icons/FontAwesome'
import lighTeme from "../../lightTheme"


interface Props {
    name: string
    [x: string]: any;
}

const FormatingButton = ({name, ...prop}: Props) => {
    return (
        <TouchableOpacity style = {styles.container} {...prop}>
            <Icon name = {name} style = {styles.icon} ></Icon>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: {
        position: 'relative',
        height: 40,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
      },
    
    icon: {
        color: lighTeme.colors.textPrimary,
        fontSize: lighTeme.fontSize.regular,
        marginHorizontal: 10,
      }
      
})

export default FormatingButton