import styled from 'styled-components/native';
import {Modal} from 'react-native-paper';

export const LogOutContainer = styled.View``;

export const LogOutModal = styled(Modal)`
  margin: ${props => props.theme.space[4]};
`;
export const ModalContent = styled.View`
  background-color: ${props => props.theme.colors.bg.primary};
  border-radius: 12px;
`;
export const LogOutHeader = styled.View`
  background-color: #3bc2de;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  justify-content: center;
  align-items: center;
`;
export const LogOutContent = styled.View`
  justify-content: center;
  align-items: center;
  padding: ${props => props.theme.space[3]};
  flex-direction: column;
`;

export const HeaderTitle = styled.Text`
  font-size: ${props => props.theme.fontSizes.body};
  font-weight: bold;
  color: ${props => props.theme.colors.text.inverse};
  padding: ${props => props.theme.space[3]};
`;
export const AlertImage = styled.Image`
  width: 49px;
  height: 44px;
  margin-bottom: ${props => props.theme.space[2]};
`;
export const LogOutText = styled.Text`
  font-size: ${props => props.theme.fontSizes.text};
  color: ${props => props.theme.colors.text.dark};
  text-align: center;
`;

export const Lockbackground = styled.ImageBackground.attrs({
  source: require('../../../../../assets/button-bg.png'),
  imageStyle: {borderRadius: 12},
})`
  width: 100%;
  margin-top: ${props => props.theme.space[3]};
`;
export const CancelButtom = styled.TouchableOpacity`
  padding: ${props => props.theme.space[3]};
  align-items: center;
  border-radius: 12px;
  width: 100%;
`;
export const CancelButtomText = styled.Text`
  color: ${props => props.theme.colors.text.inverse};
  font-size: ${props => props.theme.fontSizes.text};
`;
export const SignOutButtom = styled.TouchableOpacity`
  padding: ${props => props.theme.space[3]};
  align-items: center;
  background-color: ${props => props.theme.colors.bg.tertiary};
  width: 100%;
  border-radius: 12px;
  margin-top: ${props => props.theme.space[2]};
`;
export const LogOutButtomText = styled.Text`
  color: ${props => props.theme.colors.text.secondary};
  font-size: ${props => props.theme.fontSizes.text};
`;
