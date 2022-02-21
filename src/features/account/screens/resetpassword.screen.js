import React, {useState} from 'react';
import styled from 'styled-components/native';
// import {Ionicons} from '@expo/vector-icons';

import ImputForm from '../../../components/form-control/InputFormComponent';
import {
  MainContiner,
  HeadingContainer,
  AuthContainer,
  Group,
  ButtonText,
  SubmitButton,
} from '../components/accounts.styles';

const Title = styled.Text`
  font-size: ${props => props.theme.fontSizes.h5};
  font-weight: ${props => props.theme.fontWeights.bold};
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
const ResetPassword = ({navigation}) => {
  const [newPassword, setNewPassword] = useState('');
  const [comfirmPassword, setConfirmPassword] = useState('');
  const [newSecureTextEntry, setNewSecureTextEntry] = useState(true);
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  return (
    <MainContiner>
      <HeadingContainer>
        <Title>Reset Your Password</Title>
        <ResetLabel>Enter your new password below</ResetLabel>
      </HeadingContainer>
      <AuthContainer>
        <Group>
          <ImputForm
            autoCapitalize="none"
            label="New Password"
            name="unername"
            placeholder="New Password"
            value={comfirmPassword}
            secureTextEntry={newSecureTextEntry}
            onChangeText={text => setConfirmPassword(text)}
          />
          {/* {newSecureTextEntry ? (
            <Ionicons
              onPress={() => setNewSecureTextEntry(false)}
              name="eye-sharp"
              size={20}
              color={colors.text.secondary}
              style={{position: 'absolute', right: 15, top: 48}}
            />
          ) : (
            <Ionicons
              onPress={() => setNewSecureTextEntry(true)}
              name="eye-off"
              size={20}
              color={colors.text.secondary}
              style={{position: 'absolute', right: 15, top: 48}}
            />
          )} */}
        </Group>
        <Group>
          <ImputForm
            autoCapitalize="none"
            label="Confirm Password"
            name="unername"
            placeholder="Confirm Password"
            value={newPassword}
            secureTextEntry={secureTextEntry}
            onChangeText={text => setNewPassword(text)}
          />
          {/* {secureTextEntry ? (
            <Ionicons
              onPress={() => setSecureTextEntry(false)}
              name="eye-sharp"
              size={20}
              color={colors.text.secondary}
              style={{position: 'absolute', right: 15, top: 48}}
            />
          ) : (
            <Ionicons
              onPress={() => setSecureTextEntry(true)}
              name="eye-off"
              size={20}
              color={colors.text.secondary}
              style={{position: 'absolute', right: 15, top: 48}}
            />
          )} */}
        </Group>

        <OnTouch onPress={() => navigation.navigate('SignIn')}>
          <SubmitButton resizeMode="cover">
            <ButtonText>Sign In</ButtonText>
          </SubmitButton>
        </OnTouch>
      </AuthContainer>
    </MainContiner>
  );
};

export default ResetPassword;
