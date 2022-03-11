import React, {useState} from 'react';

import VideoListItem from '../components/video.list.component';
import {
  TitleText,
  ViolationContainer,
  TrainingVideos,
  ListItem,
  FlatlistSpacer,
  OnTouch,
} from '../components/suggested.training.styles';

const DATA = [
  {id: 1, video: ''},
  {id: 2, video: ''},
  {id: 3, video: ''},
  {id: 4, video: ''},
  {id: 5, video: ''},
  {id: 6, video: ''},
  {id: 7, video: ''},
  {id: 8, video: ''},
  {id: 9, video: ''},
  {id: 10, video: ''},
  {id: 11, video: ''},
];
const SuggestedTrainingScreen = ({navigation}) => {
  const [data, setData] = useState(DATA);

  return (
    <>
      <ViolationContainer>
        <TitleText>Learn more. truck better.</TitleText>
        <TrainingVideos>
          <ListItem
            data={data}
            numColumns={2}
            ListFooterComponent={<FlatlistSpacer />}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <OnTouch
                onPress={() =>
                  navigation.navigate('VideoPlayer', {video: item})
                }>
                <VideoListItem item={item} />
              </OnTouch>
            )}
          />
        </TrainingVideos>
      </ViolationContainer>
    </>
  );
};

export default SuggestedTrainingScreen;
