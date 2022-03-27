import React from 'react';

import {
  MusicContainer,
  BackGroundImage,
  MusicText,
} from '../components/music.styles';

const MusicScreen = () => {
  return (
    <MusicContainer>
      <MusicText>Turn the stereo up. {'\n'} Allllll the way up.</MusicText>
      <BackGroundImage />
    </MusicContainer>
  );
};

export default MusicScreen;
