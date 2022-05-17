/* eslint-disable prettier/prettier */

import React, {useEffect, useReducer} from 'react';

import {colors} from '../../infrastructure/theme/colors';
import styled from 'styled-components/native';

const Input = styled.TextInput.attrs({
  placeholderTextColor: colors.text.disabled,
})`
    width: 350px;
    height: ${props => props.theme.sizes[5]};
    margin-bottom: ${props => props.theme.space[1]};
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
const InputError = styled.Text`
  text-align: left;
  margin-left: ${props => props.theme.space[3]};
  margin-bottom: ${props => props.theme.space[3]};
  font-size: ${props => props.theme.fontSizes.text};
  color: ${props => props.theme.colors.text.error};
`;
const INPUT_CHANGE = 'INPUT_CHANGE';
const INPUT_BLUR = 'INPUT_BLUR';

const inputReducer = (state, action) => {
  switch (action.type) {
    case INPUT_CHANGE:
      return {
        ...state,
        value: action.value,
        isValid: action.isValid,
      };
    case INPUT_BLUR:
      return {
        ...state,
        touched: true,
      };
    default:
      return state;
  }
};
const InputForm =  props =>  {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.initialValue ? props.initialValue : '',
    isValid: props.initiallyValid,
    touched: false,
  });

  const {onInputChange, id} = props;

  useEffect(() => {
    if (inputState.touched) {
      onInputChange(id, inputState.value, inputState.isValid);
    }
  }, [inputState, onInputChange, id]);

  const textChangeHandler = text => {
    const emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let isValid = true;
    if (props.required && text.trim().length === 0) {
      isValid = false;
    }
    if (props.email && !emailRegex.test(text.toLowerCase())) {
      isValid = false;
    }
    if (props.min != null && +text < props.min) {
      isValid = false;
    }
    if (props.max != null && +text > props.max) {
      isValid = false;
    }
    if (props.minLength != null && text.length < props.minLength) {
      isValid = false;
    }
    dispatch({type: INPUT_CHANGE, value: text, isValid: isValid});
  };

  const lostFocusHandler = () => {
    dispatch({type: INPUT_BLUR});
  };

  return (
    <>
      <InputLabel>{props.label}</InputLabel>
      <Input
        {...props}
        onChangeText={textChangeHandler}
        onBlur={lostFocusHandler}
        value={inputState.value}
      />
      {!inputState.isValid && inputState.touched && (
        <InputError>{props.errorText}</InputError>
      )}
    </>
  );
};

export default InputForm;
