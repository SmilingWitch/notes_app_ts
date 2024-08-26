import { FlatList, StyleSheet } from "react-native"
import NotesFolderItem from "./NotesFolderItem"
import NotesFolderItemWithoutTouch from "./NotesFolderItemWithoutTouch"
import lighTeme from "../../lightTheme"
import { NotesFolderListProps } from "../../types"
import { useSelector } from "react-redux"

const NotesFolderList = ({navigation, touch, setShowThrash}: NotesFolderListProps) => {
    
    const folders = useSelector((state: any) => state.folder)

    console.log(folders)
    
    const renderItem = ({item}: any) => (
        touch === true ? <NotesFolderItem name = {item.name} amount = {3} navigation = {navigation} id = {item.id}/>:
                          <NotesFolderItemWithoutTouch name = {item.name} amount = {3} id = {item.id} setShowThrash = {setShowThrash}/>
    )


    return(
            <FlatList data = {folders}
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