import React from "react";
import { TextInputProps } from "react-native";
import { ContainerInput } from "./input.style";
import { DisplayFlexColumn } from "../globalStyles/globalView.style";
import MyText from "../text/MyText";
import { textTypes } from "../text/textTypes";
import { theme } from "../../themes/theme";

interface InputProps extends TextInputProps {
    title?: string;
}


const Input = ({title, ...props}: InputProps) => {
    return (
        <DisplayFlexColumn>
            {title && (
                <MyText
                    type={textTypes.PARAG_SMALL_SEMIBOLD}
                    margin='0px 0px 4px 8px'
                    color={theme.colors.grayTheme.gray100}>
                        {title}
                </MyText>
            )}
            <ContainerInput {...props}></ContainerInput>
        </DisplayFlexColumn>
    );
};

export default Input;