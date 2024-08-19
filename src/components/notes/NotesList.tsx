import { Dimensions, FlatList, StyleSheet, View, useWindowDimensions } from "react-native"
import { useEffect, useState } from "react";
import { useMemo } from 'react';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ParamListBase, RouteProp } from "@react-navigation/native";
import StyledText from "../common/StyledText";
import NotesItem from "./NotesItem";
import lighTeme from "../../lightTheme";

const data = [
    {
        id: 1,
        category: 'Books',
        name: 'Lorem 1',
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure facilis id consequatur corporis labore quaerat quam itaque molestias incidunt recusandae inventore ab vitae architecto minima cum officia sed, accusantium omnis!"
    },
    {
        id: 2,
        category: 'Exercise',
        name: 'Lorem 2',
        content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. "
    },
    {
        id: 3,
        category: 'Lists',
        name: 'Lorem 3',
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure facilis id consequatur corporis labore quaerat quam itaque molestias incidunt recusandae inventore ab vitae architecto minima cum officia sed, accusantium omnis!"
    },
    {
        id: 4,
        category: 'Novel',
        name: 'Lorem 4',
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure facilis id consequatur corporis labore quaerat quam itaque molestias incidunt recusandae inventore ab vitae architecto minima cum officia sed, accusantium omnis!"
    },
    {
        id: 5,
        category: 'Books',
        name: 'Lorem 5',
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure facilis id consequatur corporis labore quaerat quam itaque molestias incidunt recusandae inventore ab vitae architecto minima cum officia sed, accusantium omnis!"
    },
    {
        id: 6,
        category: 'Books',
        name: 'Lorem 6',
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure facilis id consequatur corporis labore quaerat quam itaque molestias incidunt recusandae inventore ab vitae architecto minima cum officia sed, accusantium omnis!"
    },
    {
        id: 7,
        category: 'Exercise',
        name: 'Lorem 7',
        content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. "
    },
    {
        id: 8,
        category: 'Lists',
        name: 'Lorem 8',
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure facilis id consequatur corporis labore quaerat quam itaque molestias incidunt recusandae inventore ab vitae architecto minima cum officia sed, accusantium omnis!"
    },
    {
        id: 9,
        category: 'Novel',
        name: 'Lorem 9',
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure facilis id consequatur corporis labore quaerat quam itaque molestias incidunt recusandae inventore ab vitae architecto minima cum officia sed, accusantium omnis!"
    },
    {
        id: 10,
        category: 'Books',
        name: 'Lorem 10',
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure facilis id consequatur corporis labore quaerat quam itaque molestias incidunt recusandae inventore ab vitae architecto minima cum officia sed, accusantium omnis!"
    },
    {
        id: 11,
        category: 'Novel',
        name: 'Lorem 11',
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure facilis id consequatur corporis labore quaerat quam itaque molestias incidunt recusandae inventore ab vitae architecto minima cum officia sed, accusantium omnis!"
    },
]

interface Props {
    navigation: NativeStackNavigationProp<ParamListBase>;
    route: RouteProp<ParamListBase, 'Notes'>;
  }

const NotesList = ({navigation, route}: Props) => {
    const { name } = route.params;
    const { width } = useWindowDimensions();
    const [numColumns, setNumColumns] = useState(2);


    // Memoriza los datos filtrados usando useMemo
    const filteredData = useMemo(() => {
        if (name === 'All') {
            return data;
        }
        return data.filter(item => item.category === name);
    }, [name, data]);


    useEffect(() => {
      // Calcula el número de columnas basado en el ancho de la pantalla
      const cols = Math.floor(width / 100); // Ajusta el divisor según tus necesidades
      setNumColumns(2);
    }, [width]);

    const renderItem = ({item}: any) => (
        <NotesItem id={item.id} navigation={navigation} name={item.name} content={item.content} date = "2:00"/>   
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