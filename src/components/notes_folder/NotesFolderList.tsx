import { FlatList, StyleSheet } from "react-native"
import NotesFolderItem from "./NotesFolderItem"
import NotesFolderItemWithoutTouch from "./NotesFolderItemWithoutTouch"
import lighTeme from "../../lightTheme"
import { NotesFolderListProps } from "../../types"
import { useSelector } from "react-redux"
import { useState } from "react"

const NotesFolderList = ({navigation, touch, setShowThrash}: NotesFolderListProps) => {
    
    const folders = useSelector((state: any) => state.folder)
    const [selectedItems, setSelectedItems] = useState<number[]>([]);

    console.log("SELECTED ITEMS",selectedItems)
    
    const renderItem = ({item}: any) => (
        touch === true ? <NotesFolderItem name = {item.name} amount = {3} navigation = {navigation} id = {item.id}/>:
                          <NotesFolderItemWithoutTouch  name = {item.name} 
                                                        amount = {3} 
                                                        id = {item.id} 
                                                        setShowThrash = {setShowThrash}
                                                        setSelectedItems = {setSelectedItems}
                                                        selectedItems = {selectedItems}/>
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