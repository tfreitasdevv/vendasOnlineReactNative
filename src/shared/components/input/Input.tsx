import React from "react";
import { TextInput, TextInputProps } from "react-native";
import { ContainerInput } from "./input.style";

type InputProps = TextInputProps;

const Input = ({...props}: InputProps) => {
    return (
        <ContainerInput {...props}></ContainerInput>
    )
}

export default Input;