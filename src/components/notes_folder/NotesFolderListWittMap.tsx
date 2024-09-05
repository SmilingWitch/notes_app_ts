import { Dimensions, FlatList, StyleSheet, View } from "react-native"
import NotesFolderItem from "./NotesFolderItem"
import NotesFolderItemWithoutTouch from "./NotesFolderItemWithoutTouch"
import lighTeme from "../../lightTheme"
import { NotesFolderListProps } from "../../types"
import { useSelector } from "react-redux"


const NotesFolderListWithMap = ({navigation}: NotesFolderListProps) => {
    
    const folders = useSelector((state: any) => state.folder)


    return(
            <View style = {styles.container}>
                {folders.map((item: any) => {
                   return <NotesFolderItem key = {item.id} name = {item.name} amount = {3} navigation = {navigation} id = {item.id}/>
                })}
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: lighTeme.colors.primary,
        
    }
    
})

export default NotesFolderListWithMap