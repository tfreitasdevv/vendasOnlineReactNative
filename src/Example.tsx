import React from "react";
import { Text, View } from "react-native";

interface ExampleProps {
    text?: string;
    children?: string;
}

const Example = ({text, children}: ExampleProps) => {
    return (
        <View>
            <Text>{ children }</Text>
            <Text>{ text }</Text>
        </View>
    );
};

export default Example;