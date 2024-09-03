import { StyleSheet, TouchableOpacity, View } from "react-native"
import { useState } from "react"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { ParamListBase } from "@react-navigation/native"
import ManageFolderHeader from "../components/manage_folder/ManageFolderHeader"
import lighTeme from "../lightTheme"
import NotesFolderList from "../components/notes_folder/NotesFolderList"
import StyledText from "../components/common/StyledText"
import Icon from '@expo/vector-icons/Feather'
import CreateFolder from "../components/manage_folder/CreateFolder"
import Icon1 from '@expo/vector-icons/FontAwesome'
import { useDispatch, useSelector } from "react-redux"
import { deleteFolder } from "../store/reducers"
import { useBackCreateFolderHandler } from "../hooks/useBackCreateFolderHandler"

interface Props{
    navigation: NativeStackNavigationProp<ParamListBase>
}

const ManageFolders = ({navigation}: Props) => {


    const [showDialog, setShowDialog] = useState(false)
    const [showTrash, setShowThrash] = useState(false)
    const dispatch = useDispatch()
    const selectedFolder = useSelector((state: any) => state.selectedFolderID)
    useBackCreateFolderHandler({showDialog, setShowDialog})

    return(
        <View style = {styles.container}>
            <ManageFolderHeader navigation={navigation}/>
              <NotesFolderList navigation = {navigation} touch = {false} setShowThrash = {setShowThrash}/>
              {showTrash ?
              <TouchableOpacity style = {styles.create_folder} onPress = {() => {setShowThrash(false);
                dispatch(deleteFolder(selectedFolder))
              }}>
                  <Icon1 name = "trash-o" style = {styles.icon}></Icon1>
                  <StyledText>Delete Folder</StyledText>
              </TouchableOpacity> :
              <TouchableOpacity style = {styles.create_folder} onPress = {() => setShowDialog(true)}>
                  <Icon name="plus" style = {styles.icon}></Icon>
                  <StyledText>Create Folder</StyledText>
              </TouchableOpacity>}
              {showDialog && <CreateFolder setShowDialog = {setShowDialog} />}            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: lighTeme.colors.primary
    },
    icon: {
        color: lighTeme.colors.secundary,
        fontSize: lighTeme.fontSize.h2,
        marginRight: 10
      },
    create_folder: {
        flexDirection: 'row',
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center'
    }
})


export default ManageFolders