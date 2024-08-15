import { Children, ReactNode } from "react"
import { StyleProp, Text, TextStyle, StyleSheet } from "react-native"
import lighTeme from "../../lightTheme";

interface Props {
    children: ReactNode;
    color?: 'primary' | 'secondary';
    fontSize?: 'h1' | 'h2' | 'h3' | 'small';
    fontWeight?: 'bold';
    style?: StyleProp<TextStyle>;
    [x: string]: any; // Para capturar todas las demás props pasadas a Text  
}


const StyledText: React.FC<Props> = ({
    children,
    color,
    fontSize,
    fontWeight,
    style,
    ...props
    }) => {

        const textStyles = [
            styles.regular,
            color === 'primary' && styles.colorPrimary,
            color === 'secondary' && styles.colorSecondary,
            fontSize === 'h1' && styles.h1,
            fontSize === 'h2' && styles.h2,
            fontSize === 'h3' && styles.h3,
            fontSize === 'small' && styles.small,
            fontWeight === 'bold' && styles.bold,
            style,
          ];

    return <Text style = {textStyles} {...props}>
                {children}
            </Text>
}

const styles = StyleSheet.create({
    colorPrimary: {
        color: lighTeme.colors.textPrimary,
        
    },
    colorSecondary: {
        color: lighTeme.colors.primary
    },
    h1: {
        fontSize: lighTeme.fontSize.h1
    },
    h2: {
        fontSize: lighTeme.fontSize.h2
    },
    h3: {
        fontSize: lighTeme.fontSize.h3
    },
    regular: {
        fontSize: lighTeme.fontSize.regular,
        fontWeight: lighTeme.fontWeight.normal,
        color: lighTeme.colors.textPrimary
    },
    small: {
        fontSize: lighTeme.fontSize.small
    },
    bold: {
        fontWeight: lighTeme.fontWeight.bold
    }
})


export default StyledText