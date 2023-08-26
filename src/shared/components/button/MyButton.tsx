import { TouchableOpacityProps } from "react-native";
import { ButtonContainer } from "./button.style";
import MyText from "../text/MyText";
import { theme } from "../../themes/theme";
import { textTypes } from "../text/textTypes";

interface ButtonProps extends TouchableOpacityProps {
    title: string;
    margin?: string
}

const MyButton = ({title, margin, ...props}: ButtonProps) => {
    return (
        <ButtonContainer margin={margin} {...props}>
            <MyText type={textTypes.BUTTON_BOLD} color={theme.colors.neutralTheme.white}>{title}</MyText>
        </ButtonContainer>
    )
}

export default MyButton;