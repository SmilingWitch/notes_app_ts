import { StyleSheet, View } from "react-native"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Constants from 'expo-constants'
import Notes from "../screens/Notes"
import NotesFolder from "../screens/NotesFolder";
import Note from "../screens/Note";


const Stack = createNativeStackNavigator()

const Main = () => {

     return(
        <View style = {styles.container}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name = "Notes"
                        component={ Notes }
                        initialParams={{ name: 'All'}}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen 
                        name="NotesFolder"
                        component={NotesFolder} 
                        options={{ headerShown: false }} // Mostrar el AppBar
                    />
                    <Stack.Screen 
                        name="Note" 
                        component={Note} 
                        options={{ headerShown: false }} // Mostrar el AppBar
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
        width: '100%'
      },

})

export default Main