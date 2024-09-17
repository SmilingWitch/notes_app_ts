

import { FlatList, StyleSheet, View } from "react-native"
import { useEffect, useState } from "react";
import DiaryNoteItem from "./DiaryNoteItem";
import { NotesListProps } from "../../../types";
import lighTeme from "../../../lightTheme";
import StyledText from "../../common/StyledText";



const DiaryNotesList = () => {

    const data = [
        {id: 1},
        {id: 2}
    ]

    const renderItem = ({item}: any) => (
        <DiaryNoteItem />   
    )

    return(
        <FlatList
            data = {data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            ListEmptyComponent={
                <View style = {styles.empty_list}>
                    <StyledText>
                        No notes
                    </StyledText>
                    <StyledText fontSize="small" >
                        Tab the Add button to create a note
                    </StyledText>
                </View> 
            }
        ></FlatList>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: lighTeme.colors.primary,
        
    },
    empty_list: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '60%'
    }

})

export default DiaryNotesList