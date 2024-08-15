import { StyleSheet, View } from "react-native"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./common/Home";
import Constants from 'expo-constants'
import lighTeme from "../lightTheme";


const Stack = createNativeStackNavigator()



const Main = () => {

     return(
        <View style = {styles.container}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name = "Notes"
                        component={ Home }
                        initialParams={{ name: 'All'}}
                        options={{ headerShown: false }}
                    />
                </Stack.Navigator>
            </NavigationContainer>

        </View>
     )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: lighTeme.colors.primary
      },

})

export default Main