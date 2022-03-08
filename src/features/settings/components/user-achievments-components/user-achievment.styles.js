import styled from 'styled-components/native';
import {ProgressBar} from 'react-native-paper';

export const OnScroll = styled.ScrollView`
  background-color: ${props => props.theme.colors.bg.primary};
`;
export const UserAchievmentContainer = styled.View`
  padding: ${props => props.theme.space[3]};
`;

export const AchievmentListContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const AchievmentList = styled.View`
  margin-left: ${props => props.theme.space[3]};
  margin-right: ${props => props.theme.space[3]};
  margin-top: ${props => props.theme.space[1]};
  margin-bottom: ${props => props.theme.space[1]};
`;

export const AchievmentCompleted = styled.View`
  background-color: ${props => props.theme.colors.bg.tertiary};
  margin-top: ${props => props.theme.space[3]};
  padding: ${props => props.theme.space[1]};
  justify-content: center;
  align-items: center;
  width: 126px;
  height: 121px;
  border: 1px solid #93929a;
  box-sizing: border-box;
  border-radius: 12px;
  flex-direction: column;
`;
export const AchievmentImage = styled.Image`
  width: 50px;
  height: 70px;
`;
export const AchievmentProgress = styled.Image`
  width: 60px;
  height: 90px;
`;
export const AchievmentText = styled.Text`
  font-size: ${props => props.theme.fontSizes.caption};
  color: ${props => props.theme.colors.text.dark};
  text-align: center;
  margin-top: ${props => props.theme.space[2]};
`;
export const ProgressPoints = styled(ProgressBar)`
  color: ${props => props.theme.colors.brand.primary}
  height: 2px;
  margin-top: ${props => props.theme.space[2]}
`;
