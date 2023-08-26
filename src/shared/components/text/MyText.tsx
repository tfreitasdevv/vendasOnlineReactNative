import { TextProps } from "react-native";
import { ContainerText } from "./text.style";
import { textTypes } from "./textTypes";
import { useMemo } from "react";

interface MyTextProps extends TextProps {
    color?: string;
    type?: string;
}

const MyText = ({color, type, ...props}: MyTextProps) => {

    const fontSize = useMemo(() => {
        switch (type) {
            case textTypes.TITLE_BOLD:
            case textTypes.TITLE_LIGHT:
            case textTypes.TITLE_REGULAR:
            case textTypes.TITLE_THIN:
                return '24px'
            case textTypes.SUB_TITLE_BOLD:
            case textTypes.SUB_TITLE_LIGHT:
            case textTypes.SUB_TITLE_REGULAR:
            case textTypes.SUB_TITLE_THIN:
                return '20px'
            case textTypes.BUTTON_BOLD:
            case textTypes.BUTTON_LIGHT:
            case textTypes.BUTTON_REGULAR:
            case textTypes.BUTTON_THIN:
                return '18px'
            case textTypes.PARAG_SMALL_BOLD:
            case textTypes.PARAG_SMALL_LIGHT:
            case textTypes.PARAG_SMALL_REGULAR:
            case textTypes.PARAG_SMALL_THIN:
                return '10px'
            case textTypes.PARAG_BOLD:
            case textTypes.PARAG_LIGHT:
            case textTypes.PARAG_REGULAR:
            case textTypes.PARAG_THIN:
            default:
                return '14px'
        }
    }, [type]);


    const fontFamily = useMemo(() => {
        switch (type) {
            case textTypes.TITLE_BOLD:
            case textTypes.SUB_TITLE_BOLD:
            case textTypes.PARAG_SMALL_BOLD:
            case textTypes.PARAG_BOLD:
            case textTypes.BUTTON_BOLD:
                return 'Poppins-Bold'
            case textTypes.TITLE_LIGHT:
            case textTypes.SUB_TITLE_LIGHT:
            case textTypes.PARAG_SMALL_LIGHT:
            case textTypes.PARAG_LIGHT:
            case textTypes.BUTTON_LIGHT:
                return 'Poppins-Light'
            case textTypes.TITLE_THIN:
            case textTypes.SUB_TITLE_THIN:
            case textTypes.PARAG_THIN:
            case textTypes.PARAG_SMALL_THIN:
            case textTypes.BUTTON_THIN:
                return 'Poppins-Thin'
            case textTypes.TITLE_REGULAR:
            case textTypes.SUB_TITLE_REGULAR:
            case textTypes.PARAG_REGULAR:
            case textTypes.PARAG_SMALL_REGULAR:
            case textTypes.BUTTON_REGULAR:
            default:
                return 'Poppins-Regular'
        }
    }, [type]);


    return (
        <ContainerText fontFamily={fontFamily} size={fontSize} color={color} {...props}></ContainerText>
    )
}

export default MyText;