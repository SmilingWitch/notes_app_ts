import { useField } from "formik"
import { View, StyleSheet } from "react-native"
import StyledInput from "./StyledInput"

interface Props {
    name: string,
    [x: string]: any
}

const FormikInputValue = ({name, ...props}: Props) => {

    const [field, meta, helpers] = useField(name)
    console.log("VALUE",field.value)

    return(
        <View style = {styles.input_container}>
            <StyledInput
                error = {meta.touched && meta.error ? meta.error : ''}
                value={field.value}
                onChangeText={(value: string) => helpers.setValue(value)}
                onBlur={() => helpers.setTouched(true)}
                {...props}/>
        </View>

    )
}


const styles = StyleSheet.create({
    input_container: {
        width: '100%'
    }
   });


export default FormikInputValue
