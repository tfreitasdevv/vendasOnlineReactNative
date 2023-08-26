import React from "react";
import { Text, View } from "react-native";
import { ContainerLogin } from "../styles/login.styles";
import Input from "../../../shared/components/input/Input";
import MyButton from "../../../shared/components/button/MyButton";
import MyText from "../../../shared/components/text/MyText";

const Login = () => {

    const handleOnPress = () => {
        console.log('Botão pressionado')
    }

    return (
        <View>
            <ContainerLogin>
                <Text>dfsd</Text>
                <Input ></Input>
                <MyButton margin="8px" title="Entrar" onPress={handleOnPress}></MyButton>
                <MyText>MyText</MyText>
            </ContainerLogin>
        </View>
    )
}

export default Login;