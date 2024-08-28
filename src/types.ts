import { ParamListBase, RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StyleProp, TextStyle } from "react-native";

//Notes List
export interface NotesListParams extends ParamListBase{
    Notes: {category_name?: string}
}

export interface NotesListProps {
    navigation: NativeStackNavigationProp<ParamListBase>;
    route: RouteProp<NotesListParams, 'Notes'>;
  }

export  interface FilterDataProps{
    notes: any,
    category_name: string
}


export interface HeaderParameters extends ParamListBase{
    Note: {
        name?: string,
        category_name?: string,
        new_note?: boolean,
        id: number
    }
}

export interface HeaderProps{
    navigation: NativeStackNavigationProp<ParamListBase>,
    route: RouteProp<HeaderParameters, "Note">,
    input: string
}

//Folders
export interface CreateFolderProp{
    setShowDialog: React.Dispatch<React.SetStateAction<boolean>>
}

export interface NavigationProps{
    navigation: NativeStackNavigationProp<ParamListBase>
}

export interface StyleInputProps{
    error: string,
    /*style: {},*/
    value: string,
    onChangeText: (value: string) => void,
    [x: string]: any;
}

export interface FolderProps {
    name: string,
    amount: number,
    navigation: NativeStackNavigationProp<ParamListBase>;
    id: number,
    

}
export interface FolderPropsWithoutTouch {
    name: string,
    amount: number,
    id: number,
    setShowThrash: React.Dispatch<React.SetStateAction<boolean>>
    selectedItems: number[],
    setSelectedItems: React.Dispatch<React.SetStateAction<number[]>>,
}

export interface NotesFolderListProps{
    navigation: NativeStackNavigationProp<ParamListBase>,
    touch: boolean,
    setShowThrash: React.Dispatch<React.SetStateAction<boolean>>
}

//Note Content
export interface FormattingBtnProps {
    name: string
    [x: string]: any;
}

interface AppParamList extends ParamListBase {
    Note: { content?: string }; 
} 

export interface NoteContentProps{
    route: RouteProp<AppParamList, "Note">,
    setInput: React.Dispatch<React.SetStateAction<string>>

}


// Styled Text

export interface StyledTextProps{
    error?: string,
    color?: string,
    fontSize?: string,
    fontWeight?: string,
    header?: string,
    style?: StyleProp<TextStyle>,
    name?: string,
    value?: string,
    multiline?: boolean,
    onChangeText?: (text: string) => void,
    [x: string]: any;

}

//App bar
interface AppBarParameters extends ParamListBase{
    Notes: {category_name: string}
}


export interface AppBarProps {
    navigation: NativeStackNavigationProp<ParamListBase>;
    route: RouteProp<AppBarParameters, "Notes">
  }

// Scroll Bar
export interface CategoryItemProps {
    name: string,
    active:  boolean,
    navigation: NativeStackNavigationProp<ParamListBase>;
}

// Notes Item
interface NotesItemParameters extends ParamListBase{
    Notes: {category_name: string}
}

export interface NotesItemProps{
    id: number,
    name: string,
    content: string,
    date: any,
    navigation: NativeStackNavigationProp<ParamListBase>;
    route: RouteProp<NotesItemParameters, 'Notes'>
}


