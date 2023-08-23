import React from "react";
import { Button, SafeAreaView, Text } from "react-native";
import { useApp } from "./useApp";

const App = () => {

    const { handleOnPress, value } = useApp();

    return <SafeAreaView>
        <Text>{value}</Text>
        <Button title="BOTAO" onPress={handleOnPress}/>
    </SafeAreaView>
}

export default App;
