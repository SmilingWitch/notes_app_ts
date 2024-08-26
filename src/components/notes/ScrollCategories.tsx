import { FlatList, StyleSheet } from "react-native"
import lighTeme from "../../lightTheme";
import CategoryItem from "./CategoryItem";
import { AppBarProps } from "../../types";
import { useSelector } from "react-redux";



const ScrollCategories = ({route ,navigation}: AppBarProps) => {

    const { category_name } = route.params;
    const folders = useSelector((state: any) => state.folder)
    
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