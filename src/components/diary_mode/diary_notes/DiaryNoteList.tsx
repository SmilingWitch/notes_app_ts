

import { FlatList, StyleSheet, View } from "react-native"
import { useEffect, useState } from "react";
import DiaryNoteItem from "./DiaryNoteItem";
import { NotesListProps } from "../../../types";
import lighTeme from "../../../lightTheme";
import StyledText from "../../common/StyledText";
import { useSelector } from "react-redux";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ParamListBase } from "@react-navigation/native";

interface DiaryNoteParam{
    navigation:NativeStackNavigationProp<ParamListBase>
} 

const DiaryNotesList = ({navigation}: DiaryNoteParam) => {

    const entries = useSelector((state : any) => state.entries)

    console.log(entries)

    const renderItem = ({item}: any) => (
        <DiaryNoteItem item = {item} navigation = {navigation} />   
    )

    return(
        <FlatList
            data = {entries}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            ListEmptyComponent={
                <View style = {styles.empty_list}>
                    <StyledText>
                        Cherish every moment.
                    </StyledText>
                    <StyledText fontSize="small" >
                        Tab to start your diary journey
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