import { Dimensions, FlatList, StyleSheet, View, useWindowDimensions } from "react-native"
import { useEffect, useState } from "react";
import { useMemo } from 'react';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ParamListBase, RouteProp } from "@react-navigation/native";
import StyledText from "../common/StyledText";
import NotesItem from "./NotesItem";
import lighTeme from "../../lightTheme";
import { useSelector, useDispatch } from 'react-redux';
import { UserState } from "../../store/reducers";



interface Params extends ParamListBase{
    Notes: {category_name?: string}
}

interface Props {
    navigation: NativeStackNavigationProp<ParamListBase>;
    route: RouteProp<Params, 'Notes'>;
  }

const NotesList = ({navigation, route}: Props) => {
    const { category_name } = route.params;
    const { width } = useWindowDimensions();
    const [numColumns, setNumColumns] = useState(2);

    console.log("CCCCC",category_name)

    const notes = useSelector((state: UserState) => state.notes);


    // Memoriza los datos filtrados usando useMemo
    const filteredData = useMemo(() => {
        if (category_name === 'All') {
            return notes;
        }
        return notes.filter(item => item.category === category_name);
    }, [category_name, notes]);


    useEffect(() => {
      // Calcula el número de columnas basado en el ancho de la pantalla
      const cols = Math.floor(width / 100); // Ajusta el divisor según tus necesidades
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