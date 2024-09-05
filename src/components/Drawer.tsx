import { createDrawerNavigator } from '@react-navigation/drawer';
import Notes from '../screens/Notes';
import NotesFolder from '../screens/NotesFolder';

type RootStackParamList = {
  "Notes": { category_name: string, name: string };
  Folders: undefined;
  ManageFolders: undefined;
  Note: undefined;
  Main: undefined
};

const Drawer = createDrawerNavigator<RootStackParamList>();

const MyDrawer = () => {
  return (
    <Drawer.Navigator >
      <Drawer.Screen  name="Notes" 
                      component={ Notes }
                      initialParams={{ name: 'All', category_name : "All"}}
                      options={{ headerShown: false }} />
     <Drawer.Screen 
                        name="Folders"
                        component={NotesFolder} 
                        options={{ headerShown: false }} // Mostrar el AppBar
                    />
    </Drawer.Navigator>
  );
}

export default MyDrawer
