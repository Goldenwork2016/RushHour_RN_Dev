import React, {useState} from 'react';

import NearbyRestStopList from '../components/nearbyreststop.component';

import {
  NearbyConatiner,
  SearchBackground,
  SearchBarContainer,
  SearchInput,
  SearchIcon,
  NearbyText,
  NearbyStopsConatiner,
  ListItem,
  FlatlistSpacer,
} from '../components/nearbyreststop.styles';

const NearByRestStopScreen = () => {
  const [selected, setSelected] = useState('');
  const onChangeSearch = query => setSelected(query);

  const DATA = [
    {id: 1, image: '', title: '', text: '', time: '01:30 pm'},
    {id: 2, image: '', title: '', text: '', time: '01:30 pm'},
    {id: 3, image: '', title: '', text: '', time: '01:30 pm'},
    {id: 4, image: '', title: '', text: '', time: '01:30 pm'},
    {id: 5, image: '', title: '', text: '', time: '01:30 pm'},
    {id: 6, image: '', title: '', text: '', time: '01:30 pm'},
    {id: 7, image: '', title: '', text: '', time: '01:30 pm'},
    {id: 8, image: '', title: '', text: '', time: '01:30 pm'},
    {id: 9, image: '', title: '', text: '', time: '01:30 pm'},
    {id: 10, image: '', title: '', text: '', time: '01:30 pm'},
  ];

  return (
    <NearbyConatiner>
      <SearchBackground>
        <SearchBarContainer>
          <SearchInput
            placeholder="Eateries"
            value={selected}
            onChangeText={setSelected}
          />
          <SearchIcon name="chevron-down-outline" onPress={onChangeSearch} />
        </SearchBarContainer>
      </SearchBackground>
      <NearbyText>Time for rest stop. Let’s go</NearbyText>
      <NearbyStopsConatiner>
        <ListItem
          data={DATA}
          keyExtractor={item => item.id}
          ListFooterComponent={<FlatlistSpacer />}
          ListFooterComponentStyle={{height: 220}}
          renderItem={({item}) => <NearbyRestStopList item={item} />}
        />
      </NearbyStopsConatiner>
    </NearbyConatiner>
  );
};

export default NearByRestStopScreen;
