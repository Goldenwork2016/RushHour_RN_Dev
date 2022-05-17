/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import * as resetPassword from '../../../store/actions/password';

import {ActivityIndicator, Alert} from 'react-native';
import {
  AuthContainer,
  ButtonText,
  Group,
  HeadingContainer,
  MainContiner,
  SubmitButton,
} from '../components/accounts.styles';
import React, {useCallback, useEffect, useReducer, useState} from 'react';

import Icon from 'react-native-vector-icons/Ionicons';
import ImputForm from '../../../components/form-control/InputFormComponent';
import {colors} from '../../../infrastructure/theme/colors';
import styled from 'styled-components/native';
import {useDispatch} from 'react-redux';

const Title = styled.Text`
  font-size: ${props => props.theme.fontSizes.h5};
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.text.dark};
`;

const ResetLabel = styled.Text`
  text-align: left;
  margin-bottom: ${props => props.theme.space[2]};
  margin-left: ${props => props.theme.space[2]};
  padding-top: 3px;
  color: ${props => props.theme.colors.text.secondary};
`;

const OnTouch = styled.TouchableOpacity`
  margin-top: ${props => props.theme.space[3]};
  margin-bottom: ${props => props.theme.space[3]};
`;
// registerRootComponent

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';

const formReducer = (state, action) => {
  if (action.type === FORM_INPUT_UPDATE) {
    const updatedValues = {
      ...state.inputValues,
      [action.input]: action.value,
    };
    const updatedValidities = {
      ...state.inputValidities,
      [action.input]: action.isValid,
    };
    let updatedFormIsValid = true;
    for (const key in updatedValidities) {
      updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
    }
    return {
      formIsValid: updatedFormIsValid,
      inputValidities: updatedValidities,
      inputValues: updatedValues,
    };
  }
  return state;
};
const ResetPassword = ({navigation}) => {
  const [newSecureTextEntry, setNewSecureTextEntry] = useState(true);
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      email: '',
      password: '',
      confirmPassword: '',
      token: '',
    },
    inputValidities: {
      email: false,
    },
    formIsValid: false,
  });

  useEffect(() => {
    if (error) {
      Alert.alert('An Error Occurred!', error, [{text: 'Okay'}]);
    }
  }, [error]);

  const submit = async () => {
    let action;
    action = resetPassword.resetPassword(
      formState.inputValues.password,
      formState.inputValues.confirmPassword,
      formState.inputValues.token,
    );
    // console.log(formState.inputValues.email);
    setError(null);
    setIsLoading(true);
    try {
      await dispatch(action);
      console.log('success');
      // signIn;
      navigation.navigate('SignIn');
      setIsLoading(false);
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  };

  const inputChangeHandler = useCallback(
    (inputIdentifier, inputValue, inputValidity) => {
      dispatchFormState({
        type: FORM_INPUT_UPDATE,
        value: inputValue,
        isValid: inputValidity,
        input: inputIdentifier,
      });
    },
    [dispatchFormState],
  );
  return (
    <MainContiner>
      <HeadingContainer>
        <Title>Reset Your Password</Title>
        <ResetLabel>Enter your new password below</ResetLabel>
      </HeadingContainer>
      <AuthContainer>
        <ImputForm
          autoCapitalize="none"
          label="Reset Token"
          name="token"
          placeholder="Reset Token"
          id="token"
          required
          onInputChange={inputChangeHandler}
          // onChangeText={text => setConfirmPassword(text)}
        />
        <Group>
          <ImputForm
            autoCapitalize="none"
            id="password"
            label="Password"
            autoComplete="off"
            name="password"
            placeholder="Password"
            errorText="Please enter a valid password."
            secureTextEntry={secureTextEntry}
            required
            // value={password}
            // onChangeText={text => setPassword(text)}
            onInputChange={inputChangeHandler}
          />
          {newSecureTextEntry ? (
            <Icon
              onPress={() => setSecureTextEntry(false)}
              name="eye-sharp"
              size={20}
              color={colors.text.secondary}
              style={{position: 'absolute', right: 15, top: 48}}
            />
          ) : (
            <Icon
              onPress={() => setSecureTextEntry(true)}
              name="eye-off"
              size={20}
              color={colors.text.secondary}
              style={{position: 'absolute', right: 15, top: 48}}
            />
          )}
        </Group>
        <Group>
          <ImputForm
            id="confirmPassword"
            label="Confirm Password"
            autoComplete="off"
            name="confirmPassword"
            placeholder="Confirm Password"
            errorText="Please enter a valid password."
            secureTextEntry={secureTextEntry}
            required
            // value={password}
            // onChangeText={text => setPassword(text)}
            onInputChange={inputChangeHandler}
          />
          {secureTextEntry ? (
            <Icon
              onPress={() => setNewSecureTextEntry(false)}
              name="eye-sharp"
              size={20}
              color={colors.text.secondary}
              style={{position: 'absolute', right: 15, top: 48}}
            />
          ) : (
            <Icon
              onPress={() => setNewSecureTextEntry(true)}
              name="eye-off"
              size={20}
              color={colors.text.secondary}
              style={{position: 'absolute', right: 15, top: 48}}
            />
          )}
        </Group>

        {/* <OnTouch onPress={() => navigation.navigate('SignIn')}>
          <SubmitButton resizeMode="cover">
            <ButtonText>Sign In</ButtonText>
          </SubmitButton>
        </OnTouch> */}
        {isLoading ? (
          <ActivityIndicator size="small" color="#4CB75C" />
        ) : (
          <OnTouch onPress={submit}>
            <SubmitButton resizeMode="cover">
              <ButtonText>Reset Password</ButtonText>
            </SubmitButton>
          </OnTouch>
        )}
      </AuthContainer>
    </MainContiner>
  );
};

export default ResetPassword;
