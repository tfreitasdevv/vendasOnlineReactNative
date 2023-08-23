import React, { useState } from "react";
import { Button, Text, View } from "react-native";

interface ExampleProps {
    text?: string;
    children?: string;
}

const Example = ({text, children}: ExampleProps) => {

    // useState para gerenciar estado. Ao declarar a variável no array, toda vez que ela for alterada através do set..., o componente que a contém será renderizado.
    const [newText, setNewText] = useState();

    const handleOnPress = () => {
        setNewText('Novo Texto');
    };

    return (
        <View>
            <Text>{ children }</Text>
            <Text>{ text }</Text>
            <Text>{ newText || text }</Text>
            <Button onPress={handleOnPress} title="BOTAO"></Button>
        </View>
    );
};

export default Example;