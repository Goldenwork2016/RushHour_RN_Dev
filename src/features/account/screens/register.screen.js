/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';

import {colors} from '../../../infrastructure/theme/colors';
import ImputForm from '../../../components/form-control/InputFormComponent';
import {
  MainContiner,
  AuthContainer,
  ButtonText,
  SubmitButton,
  OnTouch,
} from '../components/accounts.styles';

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
const Register = ({navigation}) => {
  const [fleetId, setFleetId] = useState('');
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  return (
    <MainContiner>
      <HeadingContainer>
        <Title>Registration</Title>
      </HeadingContainer>
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
          label="Name"
          name="unername"
          placeholder="User Name"
          value={user}
          onChangeText={text => setUser(text)}
        />
        <ImputForm
          autoCapitalize="none"
          label="Email Address"
          name="email"
          placeholder="Email Address"
          value={email}
          onChangeText={text => setEmail(text)}
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

        <OnTouch onPress={() => null}>
          <SubmitButton resizeMode="cover">
            <ButtonText>Sign Up</ButtonText>
          </SubmitButton>
        </OnTouch>
      </AuthContainer>
    </MainContiner>
  );
};

export default Register;
