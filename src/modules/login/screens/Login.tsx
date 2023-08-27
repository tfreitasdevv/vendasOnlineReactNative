import React from "react";
import { Text, View } from "react-native";
import { ContainerLogin } from "../styles/login.styles";
import Input from "../../../shared/components/input/Input";
import MyButton from "../../../shared/components/button/MyButton";
import MyText from "../../../shared/components/text/MyText";
import { textTypes } from "../../../shared/components/text/textTypes";
import { theme } from "../../../shared/themes/theme";

const Login = () => {

    const handleOnPress = () => {
        console.log('Botão pressionado')
    }

    return (
        <View>
            <ContainerLogin>
                <Text>dfsd</Text>
                <Input ></Input>
                <MyButton 
                    type={theme.buttons.buttonsTheme.primary} 
                    margin="8px" 
                    title="Entrar"
                    //loading
                    //disabled
                    onPress={handleOnPress}>
                </MyButton>
                <MyText type={textTypes.PARAG_BOLD}>MyText</MyText>
            </ContainerLogin>
        </View>
    )
}

export default Login;