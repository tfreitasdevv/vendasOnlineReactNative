import React from "react";
import { SafeAreaView, Text } from "react-native";
import styled from "styled-components/native";

const TextNew = styled.Text ` 
    color: red;
    font-size: 24px; 
    `;

const App = () => {
    return <SafeAreaView>
        <Text>Testando</Text>
        <TextNew>NOVO TESTE</TextNew>
    </SafeAreaView>
}

export default App;
