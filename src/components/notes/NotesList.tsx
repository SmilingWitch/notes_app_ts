import { FlatList, StyleSheet, useWindowDimensions } from "react-native"
import { useEffect, useState } from "react";
import { UserState } from "../../store/reducers";
import { useSelector} from 'react-redux';
import { NotesListProps } from "../../types";
import StyledText from "../common/StyledText";
import NotesItem from "./NotesItem";
import lighTeme from "../../lightTheme";
import filterData from "../../hooks/fiterData";


const NotesList = ({navigation, route}: NotesListProps) => {
    const { category_name = '' } = route.params;
    const { width } = useWindowDimensions();
    const [numColumns, setNumColumns] = useState(2);
    const notes = useSelector((state: UserState) => state.notes);

    // Memoriza los datos filtrados usando useMemo
    const {filteredData} = filterData({notes, category_name})

    useEffect(() => {
      setNumColumns(2);
    }, [width]);

    const renderItem = ({item}: any) => (
        <NotesItem  id={item.id} 
                    navigation={navigation} 
                    name={item.title} 
                    content={item.content} 
                    route = {route}
                    date = {item.date}/>   
    )

    return(
        <FlatList
            data = {filteredData}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            key={`myFlatList-${numColumns}`} // Actualiza la clave aquí
            numColumns={numColumns}
            columnWrapperStyle={styles.containerWrapp}
            contentContainerStyle = {styles.container}
            ListEmptyComponent={
                <StyledText>
                    List is empty
                </StyledText>
            }
        ></FlatList>
    )
}

const styles = StyleSheet.create({
    containerWrapp:{
       justifyContent: 'space-between',
       paddingHorizontal: lighTeme.padding,

    },
    container: {
        backgroundColor: lighTeme.colors.primary,
    },

})

export default NotesList