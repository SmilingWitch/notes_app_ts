import { ParamListBase, RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StyleProp, TextStyle } from "react-native";

// Reutilización de propiedades comunes para navegación
export interface NavigationProps {
  navigation: NativeStackNavigationProp<ParamListBase>;
}

// Notes List
export interface NotesListParams extends ParamListBase {
  Notes: { category_name?: string };
}

export interface NotesListProps extends NavigationProps {
  route: RouteProp<NotesListParams, 'Notes'>;
}

export interface FilterDataProps {
  notes: any;
  category_name: string;
}

// Header
export interface HeaderParameters extends ParamListBase {
  Note: {
    name?: string;
    category_name?: string;
    new_note?: boolean;
    id: number;
  };
}

export interface HeaderProps extends NavigationProps {
  route: RouteProp<HeaderParameters, "Note">;
  input: string;
}

// Folders
export interface CreateFolderProps {
  setShowDialog: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface FolderProps {
  name: string;
  amount: number;
  id: number;
  navigation: NativeStackNavigationProp<ParamListBase>;
}

export interface FolderPropsWithoutTouch extends Omit<FolderProps, 'navigation'> {
  setShowThrash: React.Dispatch<React.SetStateAction<boolean>>;
  selectedItems: number[];
  setSelectedItems: React.Dispatch<React.SetStateAction<number[]>>;
}

export interface NotesFolderListProps extends NavigationProps {
  touch: boolean;
  setShowThrash: React.Dispatch<React.SetStateAction<boolean>>;
}

// Note Content
export interface FormattingBtnProps {
  name: string;
  [x: string]: any;
}

interface AppParamList extends ParamListBase {
  Note: { content?: string; id?: number };
}

export interface NoteContentProps {
  route: RouteProp<AppParamList, "Note">;
  setInput: React.Dispatch<React.SetStateAction<string>>;
}

// Styled Text
export interface StyledTextProps {
  error?: string;
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  header?: string;
  style?: StyleProp<TextStyle>;
  name?: string;
  value?: string;
  multiline?: boolean;
  onChangeText?: (text: string) => void;
  [x: string]: any;
}

// App Bar
interface AppBarParameters extends ParamListBase {
  Notes: { category_name: string };
}

export interface AppBarProps extends NavigationProps {
  route: RouteProp<AppBarParameters, "Notes">;
}

// Scroll Bar
export interface CategoryItemProps extends NavigationProps {
  name: string;
  active: boolean;
}

// Notes Item
export interface NotesItemProps extends NavigationProps {
  id: number;
  name: string;
  content: string;
  date: any;
  route: RouteProp<NotesItemParameters, 'Notes'>;
  setSelectedNotes: React.Dispatch<React.SetStateAction<number[]>>;
  selectedNotes: number[];
}

// Diary
export interface DiaryContentProps {
  route: RouteProp<AppParamList, "DiaryNote">;
  setInput: React.Dispatch<React.SetStateAction<{
    title: string;
    content: string;
    date: number;
  }>>;
}

export interface DiaryHeaderProps extends NavigationProps {
  route: RouteProp<HeaderParameters, "DiaryNote">;
  input: {
    title: string;
    content: string;
    date: number;
  };
}

export interface AppBarDiaryProps extends NavigationProps {
  route: RouteProp<AppBarParameters, "Diary">;
}

export interface EntryListProps extends NavigationProps {
  route: RouteProp<NotesListParams, 'Calendar'>;
}

export interface DiaryAppBarProps extends NavigationProps {
  route: RouteProp<AppBarParameters, "Calendar">;
  date: number;
}
