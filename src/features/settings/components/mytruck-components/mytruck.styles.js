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
export const TruckDisplay = styled.View`
 background-color: ${props => props.theme.colors.bg.primary}
  width: 87px;
  height: 87px;
  border-radius: 43px;
  top: 0px;
  left: ${(windowWidth - 206 - 87) / 2}px;
  position: absolute;
  z-index: 999;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TruckImage = styled.Image`
  width: 50px;
  height: 30px;
`;
export const CameraImage = styled.Image`
  width: 43px;
  height: 43px;
`;

export const DisplayText = styled.Text`
  font-size: 9px;
  color: ${props => props.theme.colors.text.primary};
  align-self: center;
  margin-top: ${props => props.theme.space[2]};
`;
export const NiceWheels = styled.Text`
  font-size: ${props => props.theme.fontSizes.text};
  color: ${props => props.theme.colors.text.primary};
  align-self: center;
`;

export const InfoContainer = styled.View`
  background-color: ${props => props.theme.colors.bg.tertiary};
  justify-content: center;
  padding-top: ${props => props.theme.space[4]}
  padding-bottom: ${props => props.theme.space[2]}
`;

export const OnTouch = styled.TouchableOpacity``;

export const Divider = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: ${props => props.theme.space[3]};
  margin-bottom: ${props => props.theme.space[4]};
`;
export const DividerBordered = styled.View`
  width: 294px;
  border: 0.5px;
  border-color: #93929a;
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

export const Documents = styled.View`
  background-color: ${props => props.theme.colors.bg.primary};
  flex-direction: row;
  padding-top: ${props => props.theme.space[3]}
  padding-bottom: ${props => props.theme.space[2]}
  margin: ${props => props.theme.space[3]}
`;
export const DocumentBox = styled.View`
  justify-content: center;
  align-items: center;
  padding: ${props => props.theme.space[1]};
`;
export const DocumentBoxImage = styled.View`
  background-color: ${props => props.theme.colors.bg.primary};
  width: 110px;
  height: 90px;
  justify-content: center;
  align-items: center;
  border: 0.2px;
  border-color: #000000;
  border-radius: 12px;
  margin-bottom: ${props => props.theme.space[2]};
`;
export const DocumentImage = styled.Image`
  width: 100px;
  height: 77px;
  border: 0.5px;
  border-color: #000000;
  border-radius: 12px;
`;
export const DocumentText = styled.Text`
  font-size: ${props => props.theme.fontSizes.text};
  color: ${props => props.theme.colors.text.dark};
`;
