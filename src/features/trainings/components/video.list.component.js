import React, {useState} from 'react';
import {Dimensions, Platform} from 'react-native';
import styled from 'styled-components/native';

import Play from '../../../../assets/play.png';
import WatchIcon from '../../../../assets/playcomplete.png';
import PlayInComplete from '../../../../assets/playincomplete.png';

const width = Dimensions.get('window').width;
const isAndroid = Platform.OS === 'android';

export const VideoList = styled.TouchableOpacity`
  width: ${(width - 92) / 2}px;
  height: 165px;
  border: ${isAndroid ? 1 : 0.2}px solid #000000;
  border-radius: 12px;
  margin-bottom: ${props => props.theme.space[3]};
  justify-content: center;
  align-items: center;
  margin: ${props => props.theme.space[2]};
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
const Title = styled.Text`
  font-size: ${props => props.theme.fontSizes.caption};
  color: ${props => props.theme.colors.text.dark};
  position: absolute;
  left: 10px;
  bottom: 10px;
`;

const VideoListItem = ({item, navigation}) => {
  const [watched, setWatched] = useState(true);
  return (
    <VideoList>
      <PlayButton source={Play} />
      <Title>Video title</Title>
      <WatchStatus source={watched ? WatchIcon : PlayInComplete} />
    </VideoList>
  );
};

export default VideoListItem;
