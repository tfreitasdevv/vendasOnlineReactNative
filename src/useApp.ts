import { useState } from "react"

export const useApp = () => {
    const [value, setValue] = useState('abc');

    const handleOnPress = () => {
        setValue('def');
    };

    return {
        value,
        handleOnPress,
    }
};