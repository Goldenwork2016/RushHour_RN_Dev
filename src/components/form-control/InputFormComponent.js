import React from 'react';
import styled from 'styled-components/native';
import {colors} from '../../infrastructure/theme/colors';

const Input = styled.TextInput.attrs({
  placeholderTextColor: colors.text.dark,
})`
    width: 350px;
    height: ${props => props.theme.sizes[5]};
    margin-bottom: ${props => props.theme.space[3]};
    padding-left: ${props => props.theme.space[3]};
    padding-right: ${props => props.theme.space[3]};
    padding-top: ${props => props.theme.space[2]}
    padding-bottom: ${props => props.theme.space[2]}
    font-size: ${props => props.theme.sizes[1]};
    background-color: #f4f6fb;
    border-radius: 12px;
    font-size: ${props => props.theme.fontSizes.text};
     color: ${props => props.theme.colors.text.dark};
`;
const InputLabel = styled.Text`
  text-align: left;
  margin-left: ${props => props.theme.space[3]};
  margin-bottom: ${props => props.theme.space[2]};
  padding-top: ${props => props.theme.space[2]};
  font-size: ${props => props.theme.fontSizes.text};
  color: ${props => props.theme.colors.text.dark};
`;

const InputForm = ({onChangeText, label, ...props}) => {
  return (
    <>
      <InputLabel>{label}</InputLabel>
      <Input onChangeText={onChangeText} {...props} />
    </>
  );
};

export default InputForm;
