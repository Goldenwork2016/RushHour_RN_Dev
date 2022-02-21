import React, {useState} from 'react';
import styled from 'styled-components/native';
import ImputForm from '../../../components/form-control/InputFormComponent';
import {
  MainContiner,
  HeadingContainer,
  AuthContainer,
  ButtonText,
  SubmitButton,
} from '../components/accounts.styles';

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

const NewUserContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const ForgotPassword = ({navigation}) => {
  const [email, setEmail] = useState('');

  return (
    <MainContiner>
      <HeadingContainer>
        <Title>Enter email address here</Title>
      </HeadingContainer>
      <AuthContainer>
        <ImputForm
          autoCapitalize="none"
          label="Email Address"
          name="unername"
          placeholder="Email Address"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <OnTouch onPress={() => navigation.navigate('ResetPassword')}>
          <SubmitButton resizeMode="cover">
            <ButtonText>Reset Password</ButtonText>
          </SubmitButton>
        </OnTouch>
        <NewUserContainer>
          <ResetLabel>Forgot your password? Reset here.</ResetLabel>
        </NewUserContainer>
      </AuthContainer>
    </MainContiner>
  );
};

export default ForgotPassword;
