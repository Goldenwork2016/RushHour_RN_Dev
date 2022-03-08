import styled from 'styled-components/native';

export const OnScroll = styled.ScrollView`
  background-color: ${props => props.theme.colors.bg.primary};
`;

export const ViolationContainer = styled.View`
  padding-top: ${props => props.theme.space[4]};
  padding-left: ${props => props.theme.space[3]};
  padding-right: ${props => props.theme.space[3]};
  background-color: ${props => props.theme.colors.bg.primary};
`;
export const TrainingVideos = styled.View`
  margin-bottom: ${props => props.theme.space[4]};
`;

export const Trainingheader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${props => props.theme.space[3]};
`;

export const VideoList = styled.View`
  width: 138px;
  height: 149px;
  border: 0.2px solid #000000;
  border-radius: 12px;
  margin-right: ${props => props.theme.space[3]};
  justify-content: center;
  align-items: center;
`;

export const TitleText = styled.Text`
  color: ${props => props.theme.colors.text.dark};
  font-size: ${props => props.theme.fontSizes.text};
  font-weight: bold;
`;
export const TrainingText = styled.Text`
  color: ${props => props.theme.colors.text.dark};
  font-size: ${props => props.theme.fontSizes.caption};
`;

export const AccidentContainer = styled.View`
  flex-direction: column;
`;

export const ViolationList = styled.View`
  flex-direction: column;
  border: 0.2px solid #000000;
  margin-top: ${props => props.theme.space[3]};
  padding: ${props => props.theme.space[3]};
  border-radius: 12px;
`;

export const OnTouch = styled.TouchableOpacity`
  align-items: center;
  border: 1px solid #f4f6fb;
  padding: ${props => props.theme.space[3]};
  margin-top: 22px;
  box-sizing: border-box;
  border-radius: 12px;
  background-color: ${props => props.theme.colors.bg.tertiary};
`;

export const PlayButton = styled.Image`
  width: 20px;
  height: 20px;
`;
export const WatchStatus = styled.Image`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 10px;
  bottom: 10px;
`;
