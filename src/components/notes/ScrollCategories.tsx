import { FlatList, StyleSheet } from "react-native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";
import { ParamListBase } from "@react-navigation/native";
import lighTeme from "../../lightTheme";
import CategoryItem from "./CategoryItem";

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

interface Props {
    navigation: NativeStackNavigationProp<ParamListBase>;
    route: RouteProp<ParamListBase, 'Notes'>;
  }

const ScrollCategories = ({route ,navigation}: Props) => {

    const { name } = route.params;

    const renderItem = ({item}: any) => (
        <>
        {console.log("ITEM",item.name)}
        {console.log("ROUTE",route.path)}
        <CategoryItem   name = {item.name} 
                        amount = {item.amount} 
                        navigation = {navigation} 
                        active = {name === item.name}/>
        </>
        

                        
    )

    return(
        <FlatList
        renderItem={renderItem}
        data = {data}
        keyExtractor={(item) => item.id}
        horizontal
        style = {styles.container}
        />

        
    )
}


const styles = StyleSheet.create({
    container: {
        paddingBottom: 20,
        paddingHorizontal: lighTeme.padding,
        backgroundColor: lighTeme.colors.primary,
    }
})

export default ScrollCategories