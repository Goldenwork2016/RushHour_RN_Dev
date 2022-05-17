/* eslint-disable prettier/prettier */

import * as forgetPassword from '../../../store/actions/password';

import {ActivityIndicator, Alert} from 'react-native';
import {
  AuthContainer,
  ButtonText,
  HeadingContainer,
  MainContiner,
  SubmitButton,
} from '../components/accounts.styles';
import React, { useEffect, useState } from 'react';

import {colors} from '../../../infrastructure/theme/colors';
import styled from 'styled-components/native';
import {useDispatch} from 'react-redux';

const Title = styled.Text`
  font-size: ${props => props.theme.fontSizes.h5};
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.text.dark};
`;
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

const NewUserContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const ForgotPassword = ({navigation}) => {
  const [error, setError] = useState();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      Alert.alert('An Error Occurred!', error, [{text: 'Okay'}]);
    }
  }, [error]);

  const submit = async () => {
    let action;
    console.log(email);
    action = forgetPassword.forgetPassword(email);

    setError(null);
    setIsLoading(true);
    try {
      await dispatch(action);
      console.log('success');
      // signIn;
      navigation.navigate('ResetPassword');
      setIsLoading(false);
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  };

  return (
    <MainContiner>
      <HeadingContainer>
        <Title>Enter email address here</Title>
      </HeadingContainer>
      <AuthContainer>
        {/* <ImputForm
          autoCapitalize="none"
          autoComplete="off"
          id="email"
          label="Email Address"
          name="email"
          placeholder="Email Address"
          errorText="Please enter your a valid email!"
          required
          value={email}
          onChangeText={text => setEmail(text)}
          onInputChange={inputChangeHandler}
        /> */}
        <InputLabel>Email Address</InputLabel>
        <Input
          autoCapitalize="none"
          autoComplete="off"
          required
          value={email}
          onChangeText={text => setEmail(text)}
          placeholder="Email Address"
        />
        {isLoading ? (
          <ActivityIndicator size="small" color="#4CB75C" />
        ) : (
          <OnTouch onPress={submit}>
            <SubmitButton resizeMode="cover">
              <ButtonText>Reset Password</ButtonText>
            </SubmitButton>
          </OnTouch>
        )}
        <NewUserContainer>
          <ResetLabel>Forgot your password? Reset here.</ResetLabel>
        </NewUserContainer>
      </AuthContainer>
    </MainContiner>
  );
};

export default ForgotPassword;
