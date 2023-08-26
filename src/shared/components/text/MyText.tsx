import { TextProps } from "react-native";
import { ContainerText } from "./text.style";
import { textTypes } from "./textTypes";
import { useMemo } from "react";

interface MyTextProps extends TextProps {
    color?: string;
    type?: string;
}

const MyText = ({color, type, ...props}: MyTextProps) => {

    const handleSize = useMemo(() => {
        switch (type) {
            case textTypes.TITLE:
                return '32px'
                        
            default:
                return '16px'
        }
    }, [type]);

    return (
        <ContainerText size={handleSize} color={color} {...props}></ContainerText>
    )
}

export default MyText;