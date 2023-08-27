import { ActivityIndicator, TouchableOpacityProps } from "react-native";
import { ActivityIndicatorButton, ButtonContainer, ButtonDisabled, ButtonSecondary, GradientButton } from "./button.style";
import MyText from "../text/MyText";
import { theme } from "../../themes/theme";
import { textTypes } from "../text/textTypes";
import LinearGradient from "react-native-linear-gradient";

interface ButtonProps extends TouchableOpacityProps {
    title: string;
    margin?: string;
    type?: string;
    disabled?: boolean;
    loading?: boolean;
    onPress?: () => void;
}

const MyButton = ({title, type, margin, loading, disabled, onPress, ...props}: ButtonProps) => {

    const handleOnPress = () => {
        if (!loading && !disabled && onPress) {
            onPress();
        }
    }

    const renderText = (color: string) => (
        <>
            <MyText type={textTypes.BUTTON_SEMIBOLD} color={color}>{title}</MyText>
            {loading && <ActivityIndicatorButton color={theme.colors.neutralTheme.white}/>}
        </>
    );

    if (disabled) {
        return (
            <ButtonDisabled {...props} margin={margin}>
                {renderText(theme.colors.neutralTheme.white)}
            </ButtonDisabled>
        )
    }

    switch (type) {
        case theme.buttons.buttonsTheme.secondary:
            return (
                <ButtonSecondary {...props} margin={margin} onPress={handleOnPress} >
                    {renderText(theme.colors.mainTheme.primary)}
                </ButtonSecondary>
            )
        case theme.buttons.buttonsTheme.primary:
        default:
            return (
                <ButtonContainer {...props} margin={margin} onPress={handleOnPress}>
                    <GradientButton 
                        start={{x: 0, y: 0}} end={{x: 1, y: 0}} 
                        colors={[theme.colors.purpleTheme.purple80, theme.colors.pinkTheme.pink80]}>
                        {renderText(theme.colors.neutralTheme.white)}
                    </GradientButton>
                    
                </ButtonContainer>
            )
    }

    
}

export default MyButton;