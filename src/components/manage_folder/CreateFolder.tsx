import { View, StyleSheet, Dimensions,  TouchableOpacity, KeyboardAvoidingView, Platform } from "react-native"
import StyledText from "../common/StyledText"
import lighTeme from "../../lightTheme"
import { CreateFolderProp } from "../../types"
import { useDispatch } from "react-redux"
import { createFolder } from "../../store/reducers"
import { Formik } from "formik"
import { validationSchema } from "../../functions/validationSchema"
import FormikInputValue from "./FormikInputValue"

const CreateFolder = ({setShowDialog}: CreateFolderProp) => {
    const dispatch = useDispatch()

    const handleAddFolder = ( name: string) => {

        dispatch(createFolder({name}))
    }

    const initialValues = {
        name: ""
    }

    return(
        <KeyboardAvoidingView style = {styles.container}  behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <Formik initialValues={initialValues}
            onSubmit={values => handleAddFolder(  values.name )}
            validationSchema ={validationSchema}>
                {({handleSubmit}) => (
                    <View style = {styles.input_bx}>
                        <StyledText  fontWeight= 'bold'>Create Folder</StyledText>
                        <FormikInputValue
                                    name = "name"
                                />
                        <View style = {styles.btn_bx}>
                            <TouchableOpacity style = {styles.btn} onPress={() => setShowDialog(false)}>
                                <StyledText  fontWeight='bold'>Cancel</StyledText>
                            </TouchableOpacity>
                            <TouchableOpacity style = {styles.btn} onPress={() => handleSubmit()}>
                                <StyledText  fontWeight='bold'>Add</StyledText>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            </Formik>
            
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
container: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: 'rgba(0, 0, 0, 0.78)',
    alignItems: 'center',
    justifyContent: 'center',
    

},
input_bx: {
    backgroundColor: lighTeme.colors.primary,
    width: `${90}%`,
    height: 200,
    borderRadius: 30,
    padding: 20,
    opacity: 1,
    zIndex: 10000,
    position: 'absolute',
    justifyContent: 'space-between'
},
btn_bx: {
    flexDirection: 'row',
    justifyContent: 'space-around',
},
btn: {
    width: 100,
    alignItems: 'center'
}
})

export default CreateFolder