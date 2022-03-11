import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

import Video from 'react-native-video';
import {ProgressBar} from 'react-native-paper';

const width = Dimensions.get('window').width;

const height = Dimensions.get('window').height;
export const VideoPlayerContainer = styled.View`
  align-items: center;
  background-color: ${props => props.theme.colors.bg.primary};
  height: 100%;
`;

export const FrameContainer = styled.View`
  width: ${width * 0.9}px;
  height: ${height * 0.66}px;
  border: 1px solid #93929a;
  border-radius: 12px;
  margin-top: ${props => props.theme.space[2]};
`;
export const VideoPlayer = styled(Video)`
  width: ${width * 0.9}px;
  height: ${height * 0.66}px;
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
  width: 100%;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const VideoProgress = styled(ProgressBar)`
  width: ${width * 0.9 - 32}px;
  margin-top: ${props => props.theme.space[3]}
  margin-bottom: ${props => props.theme.space[2]}
  margin-left: ${props => props.theme.space[2]}
  margin-right: ${props => props.theme.space[2]}
  background-color: #93929A;
`;

export const PlayPause = styled.Pressable`
  position: absolute;
  top: 45%;
  left: 45%;
  z-index: 9999;
`;
export const Videotime = styled.Text`
  color: ${props => props.theme.colors.text.inverse};
  font-size: ${props => props.theme.fontSizes.caption};
  text-align: left;
`;

export const PlayImage = styled.Image`
  width: 55px;
  height: 53px;
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
