import { useState, } from "react";
import { TextInput } from "react-native";
import { styles } from './styles'

interface ComponentProps{
    value: string,
    onChangeText(value: string) : void;
    handleSubmit(): void;
}

export default function InputTask({onChangeText,value,handleSubmit}: ComponentProps){
    const [focused,setFocused] = useState<boolean>(false);
    return(
        <TextInput onSubmitEditing={handleSubmit} onChangeText={onChangeText} value={value} style={[styles.inputText, focused && styles.inputTextFocus]} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} placeholder="Adicione uma nova tarefa" placeholderTextColor="#808080"/>
    )
}