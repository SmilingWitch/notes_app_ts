import { View, StyleSheet, Dimensions } from "react-native"
import StyledText from "../common/StyledText"
import lighTeme from "../../lightTheme"



const ManageFolderButton = () => {

    return(
        <View style = {styles.container}>
            <StyledText fontWeight="bold">Manage Folders</StyledText>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: lighTeme.colors.grey,
        padding: 10,
        borderRadius: 20,
        alignItems: 'center',
        width: Dimensions.get('window').width * 0.67,
        left: -7
    }
})

export default ManageFolderButton