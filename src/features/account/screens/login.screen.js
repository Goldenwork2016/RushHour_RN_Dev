/* eslint-disable prettier/prettier */

import {
  AuthContainer,
  ButtonText,
  Group,
  OnTouch,
  SubmitButton,
} from '../components/accounts.styles';
import {LockIcon, Lockbackground} from '../components/loginbackground.styles';
import React, {useState} from 'react';

import Icon from 'react-native-vector-icons/Ionicons';
import {Image} from 'react-native';
import ImputForm from '../../../components/form-control/InputFormComponent';
import {colors} from '../../../infrastructure/theme/colors';
import styled from 'styled-components/native';

//import {Ionicons} from '@expo/vector-icons';







const LoginContiner = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
  text-align: left;
`;

const LogoContainer = styled.View`
  margin-bottom: ${props => props.theme.space[4]};
  align-items: center;
`;

const ForgetPassword = styled.View`
  align-items: flex-end;
  margin-bottom: ${props => props.theme.space[3]};
`;
const ForgetPasswordText = styled.Text`
  color: ${props => props.theme.colors.text.secondary};
  font-size: ${props => props.theme.fontSizes.caption};
`;

const Slogon = styled.Text`
  font-size: ${props => props.theme.fontSizes.caption};
  color: ${props => props.theme.colors.text.disabled};
`;

const CheckboxContainer = styled.View`
  flex-direction: row;
  margin-bottom: ${props => props.theme.space[3]};
`;

const CheckboxLabel = styled.Text`
  text-align: left;
  margin-bottom: ${props => props.theme.space[2]};
  margin-left: ${props => props.theme.space[2]};
  padding-top: 3px;
  color: ${props => props.theme.colors.text.secondary};
`;

const NewUserContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const SignUpText = styled.Text`
  color: ${props => props.theme.colors.brand.primary};
  margin-top: -5px;
`;

const Login = ({navigation}) => {
  const [fleetId, setFleetId] = useState('');
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  return (
    <Lockbackground resizeMode="cover">
      <LockIcon>
        <LoginContiner>
          <LogoContainer>
            <Image
              source={require('../../../../assets/logo.png')}
              style={{
                width: 230,
                height: 69,
                resizeMode: 'cover',
              }}
            />
            <Slogon>Glad you made it!</Slogon>
          </LogoContainer>
          <AuthContainer>
            <ImputForm
              autoCapitalize="none"
              label="Fleet ID"
              name="fleetId"
              placeholder="Fleet ID"
              value={fleetId}
              onChangeText={text => setFleetId(text)}
            />

            <ImputForm
              autoCapitalize="none"
              label="User Name"
              name="unername"
              placeholder="User Name"
              value={user}
              onChangeText={text => setUser(text)}
            />
            <Group>
              <ImputForm
                autoCapitalize="none"
                label="Password"
                name="password"
                placeholder="Password"
                secureTextEntry={secureTextEntry}
                value={password}
                onChangeText={text => setPassword(text)}
              />
              {secureTextEntry ? (
                <Icon
                  onPress={() => setSecureTextEntry(false)}
                  name="eye-sharp"
                  size={20}
                  color={colors.text.secondary}
                  style={{
                    position: 'absolute',
                    right: 15,
                    top: 48,
                  }}
                />
              ) : (
                <Icon
                  onPress={() => setSecureTextEntry(true)}
                  name="eye-off"
                  size={20}
                  color={colors.text.primary}
                  style={{
                    position: 'absolute',
                    right: 15,
                    top: 48,
                  }}
                />
              )}
            </Group>
            <ForgetPassword>
              <OnTouch onPress={() => navigation.navigate('ForgotPassword')}>
                <ForgetPasswordText>Forgot Password?</ForgetPasswordText>
              </OnTouch>
            </ForgetPassword>
            <CheckboxContainer>
              {checked ? (
                <Icon
                  name="checkbox-outline"
                  size={22}
                  color={colors.brand.primary}
                  onPress={() => {
                    setChecked(!checked);
                  }}
                />
              ) : (
                <Icon
                  name="square-outline"
                  size={22}
                  color={colors.text.secondary}
                  onPress={() => {
                    setChecked(!checked);
                  }}
                />
              )}

              <CheckboxLabel>I agree to the terms and conditions</CheckboxLabel>
            </CheckboxContainer>
            <OnTouch>
              <SubmitButton resizeMode="cover">
                <ButtonText>Sign In</ButtonText>
              </SubmitButton>
            </OnTouch>
            <NewUserContainer>
              <CheckboxLabel>New User? </CheckboxLabel>
              <OnTouch>
                <SignUpText onPress={() => navigation.navigate('Register')}>
                  Sign up
                </SignUpText>
              </OnTouch>
            </NewUserContainer>
          </AuthContainer>
        </LoginContiner>
      </LockIcon>
    </Lockbackground>
  );
};

export default Login;
