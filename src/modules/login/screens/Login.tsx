import React from "react";
import { View } from "react-native";
import { ContainerLogin } from "../styles/login.styles";
import Input from "../../../shared/components/input/Input";
import MyButton from "../../../shared/components/button/MyButton";
import { theme } from "../../../shared/themes/theme";

const Login = () => {

    const handleOnPress = () => {
        console.log('Botão pressionado')
    }

    return (
        <View>
            <ContainerLogin>
                <Input placeholder="Digite seu e-mail" title="E-mail:"></Input>
                <MyButton 
                    type={theme.buttons.buttonsTheme.primary} 
                    margin="8px" 
                    title="Entrar"
                    //loading
                    //disabled
                    onPress={handleOnPress}>
                </MyButton>
            </ContainerLogin>
        </View>
    )
}

export default Login;