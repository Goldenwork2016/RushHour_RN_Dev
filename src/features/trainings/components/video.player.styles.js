import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

import Video from 'react-native-video';
import {ProgressBar} from 'react-native-paper';

export const width = Dimensions.get('window').width;
export const height = Dimensions.get('window').height;

export const VideoPlayerContainer = styled.View`
  align-items: center;
  background-color: ${props => props.theme.colors.bg.primary};
  height: 100%;
`;

export const FrameContainer = styled.View`
  width: ${width * 0.9}px;
  height: ${height * 0.7}px;
  border: 1px solid #93929a;
  border-radius: 12px;
  margin-top: ${props => props.theme.space[2]};
`;
export const VideoPlayer = styled(Video)`
  width: ${width * 0.9}px;
  height: ${height * 0.7}px;
  border-radius: 12px;
`;
export const VideoPlayerTitle = styled.Text`
  font-size: ${props => props.theme.fontSizes.caption};
  color: ${props => props.theme.colors.text.dark};
  background-color: ${props => props.theme.colors.bg.primary};
  text-align: center;
  padding-top: ${props => props.theme.space[3]};
`;

export const Control = styled.View`
  position: absolute;
  bottom: -2px;
  left: 0;
  right: 0;
  z-index: 999;
  padding-top: ${props => props.theme.space[2]};
  padding-bottom: ${props => props.theme.space[2]};
  padding-left: ${props => props.theme.space[3]};
  padding-right: ${props => props.theme.space[3]};
  ${'' /* background-color: rgba(255, 255, 255, 0.2); */}
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const VideoProgress = styled(ProgressBar)`
  position: absolute;
  bottom: 20px;
  width: ${width * 0.9 - 32}px;
  margin: 16px;
  background-color: rgba(255, 255, 255, 0.4);
`;

export const PlayPause = styled.Pressable`
  position: absolute;
  top: 45%;
  left: 45%;
  z-index: 9999;
`;
export const Videotime = styled.Text`
  color: ${props => props.theme.colors.text.dark};
  font-size: ${props => props.theme.fontSizes.caption};
`;

export const ControlItem = styled.View`
  flex-direction: row;
`;
export const PlayImage = styled.Image`
  width: 55px;
  height: 55px;
`;
export const FullScreenImage = styled.Image`
  width: 19px;
  height: 19px;
  margin-left: ${props => props.theme.space[2]};
`;
export const NextVideo = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${props => props.theme.space[3]};
`;
export const PrevNextVideo = styled.Image`
  width: 30px;
  height: 13px;
`;
