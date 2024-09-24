import { View, StyleSheet,TouchableOpacity } from "react-native"
import StyledText from "../../common/StyledText"
import lighTeme from "../../../lightTheme"
import formatedDataWithString from "../../../functions/formatedDataWithString"
import TruncatedText from "../../common/TruncatedText"
import { DiaryNoteItemProp } from "../../../types"
import formattedHour from "../../../functions/formattedHour"



const CalendarNotes = ({item, navigation}: DiaryNoteItemProp) => {


 const {hours, minutes, seconds} = formattedHour(item.date) 


    return(
        <TouchableOpacity style = {styles.container} onPress = {() => navigation.navigate('DiaryNote', 
                                                    {title : item.title, 
                                                    content: item.content, 
                                                    new_note : false,
                                                    date : item.date})}>
            <View style = {styles.date}>
                <StyledText fontSize="small">{hours}:{minutes}:{seconds}</StyledText>
            </View>
            {item.title && <TruncatedText text={item.title} maxLength={100}/>}
            {item.content && <TruncatedText text={item.content} maxLength={100} fontSize = "small"/> }
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderRadius: 20,
        backgroundColor: lighTeme.colors.grey,
        margin: 5,
        width: '100%',
        alignSelf: 'center',
        justifyContent: 'center',
        gap: 5
    },
    date: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    }
})

export default CalendarNotes