import { FlatList, StyleSheet } from "react-native"
import lighTeme from "../../lightTheme";
import CategoryItem from "./CategoryItem";
import { AppBarProps } from "../../types";
import { useSelector } from "react-redux";

/*const data = [
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
]*/

const ScrollCategories = ({route ,navigation}: AppBarProps) => {

    const { category_name } = route.params;
    const folders = useSelector((state: any) => state.folder)
    console.log(category_name)

    const renderItem = ({item}: any) => (
        <>
        <CategoryItem   name = {item.name} 
                        amount = {item.amount} 
                        navigation = {navigation} 
                        active = {category_name === item.name}/>
        </>                   
    )

    return(
        <FlatList
        renderItem={renderItem}
        data = {folders}
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