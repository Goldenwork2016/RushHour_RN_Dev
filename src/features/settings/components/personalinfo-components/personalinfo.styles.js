import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

const windowWidth = Dimensions.get('window').width;

export const OnScroll = styled.ScrollView`
  background-color: ${props => props.theme.colors.bg.primary};
`;
export const ProfileContainer = styled.View`
  background-color: ${props => props.theme.colors.bg.primary};
  justify-content: center;
  align-items: center;
  height: 146px;
`;

export const ProfileIntro = styled.View`
  margin-bottom: ${props => props.theme.space[3]};
  padding-top: 80px;
`;
export const ProfileImage = styled.Image`
  width: 206px;
  height: 205px;
  border-radius: 100px;
  position: absolute;
  top: -136px;
  left: ${(windowWidth - 206) / 2}px;
`;
export const CameraOnPress = styled.TouchableOpacity`
  position: absolute;
  top: 0px;
  left: ${(windowWidth + 206 - 86) / 2}px;
  z-index: 999;
`;
export const CameraImage = styled.Image`
  width: 43px;
  height: 43px;
`;

export const TurckNumber = styled.Text`
  font-size: ${props => props.theme.fontSizes.text};
  color: ${props => props.theme.colors.text.primary};
  align-self: center;
`;

export const ProfileStatus = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const StatContainer = styled.View`
  border-right: 1px;
  border-right-width: 1px;
  border-color:#000
  padding-left: ${props => props.theme.space[3]};
  padding-right: ${props => props.theme.space[3]};
  align-self: center;
`;

export const StatNumber = styled.Text`
  font-size: ${props => props.theme.fontSizes.title};
  color: ${props => props.theme.colors.text.dark};
  font-weight: ${props => props.theme.fontWeights.bold};
  align-self: center;
`;

export const StatText = styled.Text`
  font-size: ${props => props.theme.fontSizes.caption};
  color: ${props => props.theme.colors.text.primary};
  align-self: center;
`;

export const InfoContainer = styled.View`
  background-color: ${props => props.theme.colors.bg.tertiary};
  justify-content: center;
  padding-top: ${props => props.theme.space[4]}
  padding-bottom: ${props => props.theme.space[3]}
`;

export const OnTouch = styled.TouchableOpacity``;

export const Divider = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: ${props => props.theme.space[4]};
  margin-bottom: ${props => props.theme.space[4]};
`;
export const DividerBordered = styled.View`
  width: 294px;
  border: 0.5px solid #93929a;
`;

export const PersonalInfo = styled.View`
  justify-content: flex-start;
  align-items: flex-start;
  padding-left: ${props => props.theme.space[4]};
  padding-right: ${props => props.theme.space[4]};
`;
export const Name = styled.Text`
  font-size: ${props => props.theme.fontSizes.body};
  color: ${props => props.theme.colors.text.dark};
  font-weight: ${props => props.theme.fontWeights.medium};
  margin-left: ${props => props.theme.space[3]};
  margin-bottom: ${props => props.theme.space[3]};
  margin-top: ${props => props.theme.space[2]};
`;
export const InfoText = styled.Text`
  font-size: ${props => props.theme.fontSizes.text};
  color: ${props => props.theme.colors.text.dark};
  margin-left: ${props => props.theme.space[3]};
  margin-bottom: ${props => props.theme.space[3]};
`;
