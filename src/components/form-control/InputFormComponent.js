import React from "react";
import styled from "styled-components/native";

const Input = styled.TextInput`
    width: 350px;
    height: ${(props) => props.theme.sizes[5]};
    margin-bottom: ${(props) => props.theme.space[3]};
    padding-left: ${(props) => props.theme.space[3]};
    padding-right: ${(props) => props.theme.space[3]};
    padding-top: ${(props) => props.theme.space[2]}
    padding-bottom: ${(props) => props.theme.space[2]}
    font-size: ${(props) => props.theme.sizes[1]};
    background-color: #f4f6fb;
    border-radius: 12px;
`;
const InputLabel = styled.Text`
    text-align: left;
    margin-left: ${(props) => props.theme.space[3]};
    margin-bottom: ${(props) => props.theme.space[2]};
    padding-top: ${(props) => props.theme.space[2]};
    font-size: ${(props) => props.theme.fontSizes.text};
`;

const InputForm = ({ onChangeText, label, ...props }) => {
    return (
        <>
            <InputLabel>{label}</InputLabel>
            <Input onChangeText={onChangeText} {...props} />
        </>
    );
};

export default InputForm;
