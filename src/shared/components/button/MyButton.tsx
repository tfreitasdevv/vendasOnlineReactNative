import { TouchableOpacityProps } from "react-native";
import { ButtonContainer, ButtonSecondary, GradientButton } from "./button.style";
import MyText from "../text/MyText";
import { theme } from "../../themes/theme";
import { textTypes } from "../text/textTypes";
import LinearGradient from "react-native-linear-gradient";

interface ButtonProps extends TouchableOpacityProps {
    title: string;
    margin?: string;
    type?: string;
}

const MyButton = ({title, type, margin, ...props}: ButtonProps) => {

    switch (type) {
        case theme.buttons.buttonsTheme.secondary:
            return (
                <ButtonSecondary margin={margin} {...props}>
                    <MyText type={textTypes.BUTTON_BOLD} color={theme.colors.mainTheme.primary}>{title}</MyText>
                </ButtonSecondary>
            )
        case theme.buttons.buttonsTheme.primary:
        default:
            return (
                <ButtonContainer margin={margin} {...props}>
                    <GradientButton 
                        start={{x: 0, y: 0}} end={{x: 1, y: 0}} 
                        colors={[theme.colors.purpleTheme.purple80, theme.colors.pinkTheme.pink80]}>
                        <MyText type={textTypes.BUTTON_BOLD} color={theme.colors.neutralTheme.white}>{title}</MyText>
                    </GradientButton>
                    
                </ButtonContainer>
            )
    }

    
}

export default MyButton;