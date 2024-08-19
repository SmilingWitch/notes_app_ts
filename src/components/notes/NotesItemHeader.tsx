import { View, StyleSheet } from "react-native"
import StyledText from "../common/StyledText"
import lighTeme from "../../lightTheme"
import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ParamListBase } from "@react-navigation/native";
import ScrollCategories from "./ScrollCategories";

interface Props {
    navigation: NativeStackNavigationProp<ParamListBase>;
    route: RouteProp<ParamListBase, 'Notes'>;
  }

const NotesItemHeader = ({navigation, route}: Props) => {
    return(
        <View style = {styles.container}>

        <View style = {styles.header}>
            <View style = {styles.name}>
                <StyledText fontSize='h2' fontWeight='bold'>Fast Notes</StyledText> 
            </View>
            {/*<TouchableOpacity>
                <Icon name = "ellipsis1" style = {styles.icon}></Icon>
            </TouchableOpacity>*/}
        </View>
        
        <View>
            <ScrollCategories navigation = {navigation} route = {route}/>
        </View>

        
       
    </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: lighTeme.colors.primary,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: lighTeme.padding
    },
    icon: {
        color: lighTeme.colors.textPrimary,
        fontSize: lighTeme.fontSize.h2
    },
    name: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    

})

export default NotesItemHeader