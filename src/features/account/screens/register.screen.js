/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import * as register from '../../../store/actions/auth';

import {
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import {
  AuthContainer,
  ButtonText,
  MainContiner,
  OnTouch,
  SubmitButton,
} from '../components/accounts.styles';
import React, {
  useCallback,
  useEffect,
  useReducer,
  useState,
} from 'react';

import Icon from 'react-native-vector-icons/Ionicons';
import ImputForm from '../../../components/form-control/InputFormComponent';
import {colors} from '../../../infrastructure/theme/colors';
import styled from 'styled-components/native';
import {useDispatch} from 'react-redux';

const HeadingContainer = styled.View`
  margin-bottom: ${props => props.theme.space[4]};
  align-items: center;
`;

const Title = styled.Text`
  font-size: ${props => props.theme.fontSizes.h5};
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.text.dark};
`;

const Group = styled.View`
  margin-bottom: ${props => props.theme.space[3]};
`;

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
const Register = ({navigation}) => {
  // const [fleetId, setFleetId] = useState('');
  // const [user, setUser] = useState('');
  // const [password, setPassword] = useState('');
  // const [email, setEmail] = useState('');
  // const [username, setUsername] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const dispatch = useDispatch();

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      email: '',
      password: '',
      username: '',
      fleetId: '',
      name: '',
    },
    inputValidities: {
      email: false,
      password: false,
      username: false,
      fleetId: false,
      name: false,
    },
    formIsValid: false,
  });

  useEffect(() => {
    if (error) {
      Alert.alert('An Error Occurred!', error, [{text: 'Okay'}]);
    }
  }, [error]);

  const registerHandler = async () => {
    let action;
    action = register.signup(
      formState.inputValues.email,
      formState.inputValues.password,
      formState.inputValues.name,
      formState.inputValues.username,
      formState.inputValues.fleetId,
    );
    setError(null);
    setIsLoading(true);
    try {
      await dispatch(action);
      console.log('success');
      navigation.navigate('SignupChatbot');
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
    // <ScrollView contentContainerStyle={ {flex: 1, justifyContent: 'center', alignContent: 'center', alignItems: 'center', backgroundColor: 'white', paddingVertical: 15}}>
    // <KeyboardAvoidingView
    //   behavior="padding"
    //   keyboardVerticalOffset={50}
    //   style={{flex: 1}}
    // >
    <MainContiner>
      <HeadingContainer>
        <Title>Registration</Title>
      </HeadingContainer>

      <AuthContainer>
        <ImputForm
          autoCapitalize="none"
          id="fleetId"
          label="Fleet ID"
          name="fleetId"
          placeholder="Fleet ID"
          // value={fleetId}
          errorText="Please enter a your fleetId!"
          keyboardType="default"
          onInputChange={inputChangeHandler}
          required
        />

        <ImputForm
          autoCapitalize="none"
          id="name"
          label="Name"
          name="name"
          placeholder="Name"
          errorText="Please enter your name!"
          // value={user}
          onInputChange={inputChangeHandler}
        />
        <ImputForm
          autoCapitalize="none"
          label="Email Address"
          name="email"
          placeholder="Email Address"
          id="email"
          errorText="Please enter a valid email!"
          keyboardType="email-address"
          required
          email
          onInputChange={inputChangeHandler}
        />
        <ImputForm
          autoCapitalize="none"
          id="username"
          label="Username"
          name="username"
          placeholder="Username"
          errorText="Please enter your username!"
          required
          onInputChange={inputChangeHandler}
        />
        <Group>
          <ImputForm
            autoCapitalize="none"
            id="password"
            label="Password"
            name="password"
            placeholder="Password"
            errorText="Please enter a valid password."
            secureTextEntry={secureTextEntry}
            // value={password}
            // onChangeText={text => setPassword(text)}
            onInputChange={inputChangeHandler}
          />
          {secureTextEntry ? (
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

        {/* <OnTouch onPress={() => navigation.navigate('SignupChatbot')}> */}
        {isLoading ? (
                <ActivityIndicator size="small" color="#4CB75C" />
              ) : (
        <OnTouch onPress={registerHandler}>
          <SubmitButton resizeMode="cover">
            <ButtonText>Sign Up</ButtonText>
          </SubmitButton>
        </OnTouch>)}
      </AuthContainer>
    </MainContiner>
    // </KeyboardAvoidingView>
    // </ScrollView>
  );
};

export default Register;
