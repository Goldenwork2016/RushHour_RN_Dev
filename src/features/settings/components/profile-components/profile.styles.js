import styled from 'styled-components/native';

export const OnScroll = styled.ScrollView`
  background-color: ${props => props.theme.colors.bg.primary};
`;
export const ProfileContainer = styled.View`
  background-color: ${props => props.theme.colors.bg.primary};
  justify-content: center;
  align-items: center;
  padding-top: ${props => props.theme.space[4]};
  padding-bottom: ${props => props.theme.space[4]};
`;

export const ProfileIntro = styled.View`
  margin-bottom: ${props => props.theme.space[3]};
`;
export const ProfileImage = styled.Image`
  width: 89px;
  height: 90px;
  border-radius: 50px;
`;

export const Name = styled.Text`
  font-size: ${props => props.theme.fontSizes.body};
  color: ${props => props.theme.colors.text.dark};
  font-weight: ${props => props.theme.fontWeights.medium};
  align-self: center;
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

export const Achievments = styled.View`
  background-color: ${props => props.theme.colors.bg.primary};
  padding: ${props => props.theme.space[4]};
`;
export const AchievmentHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: ${props => props.theme.space[3]};
`;
export const OnTouch = styled.TouchableOpacity``;
export const AchievmentItem = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;
export const AchievmentBox = styled.View`
  background-color: ${props => props.theme.colors.bg.tertiary};
  justify-content: center;
  align-items: center;
  width: 93px;
  height: 75px;
  border-radius: 12px;
  border: 1px solid #93929a;
`;
export const TrophyImage = styled.Image`
  width: 38px;
  height: 51px;
`;
export const MedalImage = styled.Image`
  width: 38px;
  height: 51px;
`;
export const StarmedalImage = styled.Image`
  width: 39px;
  height: 60px;
`;
