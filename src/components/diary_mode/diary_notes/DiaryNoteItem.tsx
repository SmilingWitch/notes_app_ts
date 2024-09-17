import { View, StyleSheet,TouchableOpacity } from "react-native"
import StyledText from "../../common/StyledText"
import lighTeme from "../../../lightTheme"


const DiaryNoteItem = () => {
    return(
        <TouchableOpacity style = {styles.container}>
            <View style = {styles.date}>
                <StyledText fontSize="h1" fontWeight="bold">16</StyledText>
                <StyledText fontSize="small">Sep</StyledText>
            </View>
            <StyledText fontSize="small"> Holaaaaaaa</StyledText>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderRadius: 20,
        backgroundColor: lighTeme.colors.grey,
        margin: 5,
        width: '90%',
        alignSelf: 'center'
    },
    date: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5
    }
})

export default DiaryNoteItem