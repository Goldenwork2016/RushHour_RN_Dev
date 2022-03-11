import React, {useState} from 'react';
import {Pressable} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import Play from '../../../../../assets/playwhite.png';
import PrevIcon from '../../../../../assets/prev.png';
import NextIcon from '../../../../../assets/next.png';
import {
  VideoPlayerContainer,
  FrameContainer,
  VideoPlayer,
  VideoPlayerTitle,
  Control,
  VideoProgress,
  PlayPause,
  Videotime,
  PlayImage,
  NextVideo,
  PrevNextVideo,
} from '../../components/Violation-components/violation.player.styles';

const secondsToTime = time => {
  return ~~(time / 60) + ':' + (time % 60 < 10 ? '0' : '') + (time % 60);
};

const ViolationPlayerScreen = () => {
  const [pause, setPause] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const handleLoad = meta => setDuration(meta.duration);
  const handleProgress = p => {
    setProgress(p.currentTime / duration);
  };
  const handleEnd = () => setPause(true);

  console.log(pause);
  const PlayTime = secondsToTime(Math.floor(progress * duration));
  return (
    <>
      <VideoPlayerTitle>
        Corner of Swift Village and Veterens Ave.
      </VideoPlayerTitle>
      <VideoPlayerContainer>
        <FrameContainer>
          <Pressable onPress={() => setPause(true)}>
            <VideoPlayer
              paused={pause}
              source={require('../../../../../assets/sample.mp4')}
              resizeMode="cover"
              onLoad={handleLoad}
              onProgress={handleProgress}
              onEnd={handleEnd}
            />
          </Pressable>
          <VideoProgress progress={progress} color="#4CB75C" />
          {pause && (
            <PlayPause onPress={() => setPause(false)}>
              <PlayImage source={Play} />
            </PlayPause>
          )}
          <Control>
            <Videotime>
              {PlayTime}
              {PlayTime > 1 ? ' mins' : ' sec'}
            </Videotime>
          </Control>
          <NextVideo>
            <TouchableOpacity>
              <PrevNextVideo source={PrevIcon} />
            </TouchableOpacity>
            <TouchableOpacity>
              <PrevNextVideo source={NextIcon} />
            </TouchableOpacity>
          </NextVideo>
        </FrameContainer>
      </VideoPlayerContainer>
    </>
  );
};

export default ViolationPlayerScreen;
