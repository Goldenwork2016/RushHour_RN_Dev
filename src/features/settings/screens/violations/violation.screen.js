import React, {useState} from 'react';

import Play from '../../../../../assets/play.png';
import WatchIcon from '../../../../../assets/playcomplete.png';
import PlayInComplete from '../../../../../assets/playincomplete.png';

import {
  OnScroll,
  ViolationContainer,
  TrainingVideos,
  Trainingheader,
  VideoList,
  TitleText,
  TrainingText,
  AccidentContainer,
  ViolationList,
  OnTouch,
  PlayButton,
  WatchStatus,
  SeeAll,
} from '../../components/Violation-components/Violation.styles';

const ViolationScreen = ({navigation}) => {
  const [watched, setWatched] = useState(false);
  return (
    <OnScroll vertical>
      <ViolationContainer>
        <TrainingVideos>
          <Trainingheader>
            <TitleText>Suggested Trainings</TitleText>
            <SeeAll onPress={() => navigation.navigate('Trainings')}>
              <TrainingText>See all</TrainingText>
            </SeeAll>
          </Trainingheader>
          <OnScroll horizontal>
            <VideoList onPress={() => navigation.navigate('VideoPlayer')}>
              <PlayButton source={Play} />
              <WatchStatus source={watched ? WatchIcon : PlayInComplete} />
            </VideoList>
            <VideoList>
              <PlayButton source={Play} />
              <WatchStatus source={watched ? WatchIcon : PlayInComplete} />
            </VideoList>
            <VideoList>
              <PlayButton source={Play} />
              <WatchStatus source={watched ? WatchIcon : PlayInComplete} />
            </VideoList>
            <VideoList>
              <PlayButton source={Play} />
              <WatchStatus source={watched ? WatchIcon : PlayInComplete} />
            </VideoList>
          </OnScroll>
        </TrainingVideos>
        <AccidentContainer>
          <TitleText>Accidents</TitleText>
          <ViolationList>
            <TrainingText>
              Corner of Swift Village and Veterens Ave.
            </TrainingText>
            <TrainingText>11/20/20</TrainingText>
            <OnTouch onPress={() => navigation.navigate('ViolationPlayer')}>
              <TrainingText>View violation on dash cam</TrainingText>
            </OnTouch>
          </ViolationList>
          <ViolationList>
            <TrainingText>
              Corner of Swift Village and Veterens Ave.
            </TrainingText>
            <TrainingText>11/20/20</TrainingText>
            <OnTouch>
              <TrainingText>View violation on dash cam</TrainingText>
            </OnTouch>
          </ViolationList>
          <ViolationList>
            <TrainingText>
              Corner of Swift Village and Veterens Ave.
            </TrainingText>
            <TrainingText>11/20/20</TrainingText>
            <OnTouch>
              <TrainingText>View violation on dash cam</TrainingText>
            </OnTouch>
          </ViolationList>
          <ViolationList>
            <TrainingText>
              Corner of Swift Village and Veterens Ave.
            </TrainingText>
            <TrainingText>11/20/20</TrainingText>
            <OnTouch>
              <TrainingText>View violation on dash cam</TrainingText>
            </OnTouch>
          </ViolationList>
          <ViolationList>
            <TrainingText>
              Corner of Swift Village and Veterens Ave.
            </TrainingText>
            <TrainingText>11/20/20</TrainingText>
            <OnTouch>
              <TrainingText>View violation on dash cam</TrainingText>
            </OnTouch>
          </ViolationList>
        </AccidentContainer>
      </ViolationContainer>
    </OnScroll>
  );
};

export default ViolationScreen;
