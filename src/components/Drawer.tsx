import { createDrawerNavigator } from '@react-navigation/drawer';
import Notes from '../screens/Notes';
import NotesFolder from '../screens/NotesFolder';
import { Dimensions, StyleSheet } from 'react-native';
import lighTeme from '../lightTheme';
import StyledText from './common/StyledText';
import { ParamListBase, StackNavigationState } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import NotesFolderItem from './notes_folder/NotesFolderItem';
import ManageFolders from '../screens/ManageFolder';
import ManageFolderButton from './manage_folder/ManageFolderButton';

type RootStackParamList = {
  "Notes": { category_name: string, name: string };
  Folders: undefined;
  ManageFolders: undefined;
  Note: undefined;
  Main: undefined
};
interface Props{
  navigation: NativeStackNavigationProp<ParamListBase>
}

const Drawer = createDrawerNavigator<RootStackParamList>();

const MyDrawer = ({navigation}: Props) => {

  const folders = useSelector((state: any) => state.folder)

  return (
    <Drawer.Navigator 
    drawerPosition="right"
    drawerType = 'slide'
    screenOptions={{  
      drawerStyle: {
        backgroundColor: styles.backgroundColor /*'#333333'*/, // Cambia el color de fondo del Drawer
        paddingVertical: 30
      },
      drawerLabelStyle: {
        color: '#FFFFFF', // Cambia el color del texto
        fontSize: 18, // Tamaño de la letra,
      },
      drawerActiveTintColor: styles.drawerActiveTintColor.backgroundColor, // Color de los elementos seleccionados
      drawerInactiveTintColor: '#FFFFFF', // Color de los elementos no seleccionados
    }} >
      <Drawer.Screen  name="Notes" 
                      component={ Notes }
                      initialParams={{ name: 'All', category_name : "All"}}
                      options={{ headerShown: false,
                        drawerLabel: () => <StyledText>All Notes</StyledText>,
                        
                       }} />
      

      {folders.map((item: any) => {
                         return <Drawer.Screen 
                         key={item.id} 
                         name={`Folder_${item.id}`}
                         initialParams={{ name: item.name , category_name : item.name}}
                         component={Notes} 
                         options={{ headerShown: false,
                           drawerLabel: () =>  <NotesFolderItem key = {item.id} name = {item.name} amount = {3} navigation = {navigation} id = {item.id}/>
                          }} 
                     /> 
                      })}
      <Drawer.Screen  name="ManageFolders" 
                      component={ ManageFolders }
                      
                      options={{ headerShown: false,
                        drawerLabel: () => <ManageFolderButton/>,
                        
                       }} />
     
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  backgroundColor: lighTeme.colors.primary,
  drawerActiveTintColor: {
    backgroundColor: lighTeme.colors.lightGrey
  },
  textStyle: {
    marginBottom: 15
  }
})

export default MyDrawer
