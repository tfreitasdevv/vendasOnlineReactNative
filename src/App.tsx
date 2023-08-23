import React from "react";
import { SafeAreaView, Text } from "react-native";
import styled from "styled-components/native";
import Example from "./Example";

const TextNew = styled.Text ` 
    color: red;
    font-size: 24px; 
    `;

const App = () => {
    return <SafeAreaView>
        <Example text="Exemplo de props text como propriedade"></Example>
        <Example>Exemplo de props dentro da tag</Example>
        <Example></Example>
    </SafeAreaView>
}

export default App;
