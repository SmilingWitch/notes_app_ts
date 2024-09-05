import { StyleSheet, View } from "react-native"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Constants from 'expo-constants'
import Notes from "../screens/Notes"
import NotesFolder from "../screens/NotesFolder";
import Note from "../screens/Note";
import ManageFolders from "../screens/ManageFolder";
import MyDrawer from "./Drawer";


type RootStackParamList = {
    Notes: { category_name: string, name: string };
    NotesFolder: undefined;
    ManageFolders: undefined;
    Note: undefined;
    Drawer: undefined
  };

const Stack = createNativeStackNavigator<RootStackParamList>()

const Main = () => {

     return(
        <View style = {styles.container}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name = "Drawer"
                        component={ MyDrawer}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen 
                        name="ManageFolders"
                        component={ManageFolders} 
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