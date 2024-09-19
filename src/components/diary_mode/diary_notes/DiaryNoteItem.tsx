import { View, StyleSheet,TouchableOpacity } from "react-native"
import StyledText from "../../common/StyledText"
import lighTeme from "../../../lightTheme"
import formatedDataWithString from "../../../functions/formatedDataWithString"
import TruncatedText from "../../common/TruncatedText"
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ParamListBase } from "@react-navigation/native"

interface DiaryNoteItemProp{
    item: any,
    navigation:NativeStackNavigationProp<ParamListBase>
}

const DiaryNoteItem = ({item, navigation}: DiaryNoteItemProp) => {

    
    const {dayOfWeek, month, year, dayOfMonth } = formatedDataWithString(item.date)


    return(
        <TouchableOpacity style = {styles.container} onPress = {() => navigation.navigate('DiaryNote', 
                                                    {title : item.title, 
                                                    content: item.content, 
                                                    new_note : false,
                                                    date : item.date})}>
            <View style = {styles.date}>
                <StyledText fontSize="h1" fontWeight="bold">{dayOfMonth}</StyledText>
                <StyledText fontSize="small">{month}, {year}</StyledText>
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
        width: '90%',
        alignSelf: 'center',
        justifyContent: 'center',
        paddingBottom: 20

    },
    date: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    }
})

export default DiaryNoteItem