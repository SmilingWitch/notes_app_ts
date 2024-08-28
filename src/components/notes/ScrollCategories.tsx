import { FlatList, StyleSheet } from "react-native"
import lighTeme from "../../lightTheme";
import CategoryItem from "./CategoryItem";
import { AppBarProps } from "../../types";
import { useSelector } from "react-redux";



const ScrollCategories = ({route ,navigation}: AppBarProps) => {

    const { category_name } = route.params;
    const folders = useSelector((state: any) => state.folder)
    
    
    // Crear una categoría "All" manualmente
    const allCategory = {
        id: 'all',
        name: 'All',
    };
    
    // Combinar la categoría "All" con las demás categorías
    const combinedCategories = [allCategory, ...folders];

    
    const renderItem = ({item}: any) => (
        <>
        <CategoryItem   name = {item.name} 
                        navigation = {navigation} 
                        active = {category_name === item.name}/>
        </>                   
    )

    return(
        <FlatList
        renderItem={renderItem}
        data={combinedCategories}
        keyExtractor={(item) => item.id.toString()}
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