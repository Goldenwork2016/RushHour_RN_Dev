import React, {useState} from 'react';
import {Pressable} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import Play from '../../../../assets/play.png';
import PrevIcon from '../../../../assets/prev.png';
import NextIcon from '../../../../assets/next.png';
import VideoSetting from '../../../../assets/videosetting.png';
import {
  VideoPlayerContainer,
  FrameContainer,
  VideoPlayer,
  VideoPlayerTitle,
  Control,
  VideoProgress,
  PlayPause,
  Videotime,
  ControlItem,
  PlayImage,
  FullScreenImage,
  NextVideo,
  PrevNextVideo,
} from '../components/video.player.styles';

const secondsToTime = time => {
  return ~~(time / 60) + ':' + (time % 60 < 10 ? '0' : '') + (time % 60);
};

const VideoPlayerScreen = () => {
  const [pause, setPause] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const handleLoad = meta => setDuration(meta.duration);
  const handleProgress = p => {
    setProgress(p.currentTime / duration);
  };
  const handleEnd = () => setPause(true);

  const PlayTime = secondsToTime(Math.floor(progress * duration));

  return (
    <>
      <VideoPlayerTitle>Let’s get started</VideoPlayerTitle>
      <VideoPlayerContainer>
        <FrameContainer>
          <Pressable onPress={() => setPause(true)}>
            <VideoPlayer
              paused={pause}
              source={require('../../../../assets/sample.mp4')}
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
            <ControlItem>
              <FullScreenImage source={VideoSetting} />
            </ControlItem>
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

export default VideoPlayerScreen;
