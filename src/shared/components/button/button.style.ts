import styled from "styled-components/native";
import { theme } from "../../themes/theme";
import LinearGradient from "react-native-linear-gradient";

interface ButtonContainerProps {
    margin?: string;
}

export const ButtonContainer = styled.TouchableOpacity<ButtonContainerProps>`
    height: 48px;
    width: 100%;
    border-radius: 4px;
    //background-color: blue;
    justify-content: center;
    align-items: center;
    ${(props: { margin: any; }) => (props.margin ? `margin: ${props.margin};` : '') };
`;

export const GradientButton = styled(LinearGradient)<ButtonContainerProps>`
    width: 100%;
    height: 100%;
    border-radius: 4px;
    justify-content: center;
    align-items: center;
    ${(props: { margin: any; }) => (props.margin ? `margin: ${props.margin};` : '') };
`;

export const ButtonSecondary = styled(ButtonContainer)<ButtonContainerProps>`
    ${(props: { margin: any; }) => (props.margin ? `margin: ${props.margin};` : '') };
    background-color: transparent;
    border-width: 1px;
    border-color: ${theme.colors.mainTheme.primary};
`;