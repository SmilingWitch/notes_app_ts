import { FlatList, StyleSheet } from "react-native"
import NotesFolder from "./NotesFolderItem"
import NotesFolderItem from "./NotesFolderItem"
import NotesFolderItemWithoutTouch from "./NotesFolderItemWithoutTouch"
import lighTeme from "../../lightTheme"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { ParamListBase, RouteProp } from "@react-navigation/native"

const data = [
    {
        id: 1,
        name: 'All',
        amount: 100
    },
    {
        id: 2,
        name: 'Novel',
        amount: 20
    },
    {
        id: 3,
        name: 'Lists',
        amount: 5
    },
    {
        id: 4,
        name: 'Exercise',
        amount: 10
    },
    {
        id: 5,
        name: 'Books',
        amount: 3
    }
]

interface Props{
    navigation: NativeStackNavigationProp<ParamListBase>,
    touch: boolean
}

const NotesFolderList = ({navigation, touch}: Props) => {
    
    const renderItem = ({item}: any) => (
        touch === true ? <NotesFolderItem name = {item.name} amount = {item.amount} navigation = {navigation}/>:
                          <NotesFolderItemWithoutTouch name = {item.name} amount = {item.amount}/>
    )


    return(
            <FlatList data = {data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                style = {styles.container}>
            </FlatList>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: lighTeme.colors.primary,
        paddingHorizontal: lighTeme.padding
    }
    
})

export default NotesFolderList