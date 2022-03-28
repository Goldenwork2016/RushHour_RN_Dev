import React from 'react';

import RestStopImage from '../../../../assets/reststop.png';
import {
  ListContainer,
  ImageContainer,
  ListImage,
  ContentContainer,
  ListHeader,
  Divider,
  Title,
  ListText,
  ListTimeText,
} from './nearbyflatlist.styles';

const NearbyRestStopList = ({item}) => {
  return (
    <ListContainer>
      <ImageContainer>
        <ListImage source={RestStopImage} />
      </ImageContainer>
      <ContentContainer>
        <ListHeader>
          <Title>Wendys</Title>
          <ListTimeText>12:00 pm</ListTimeText>
        </ListHeader>
        <ListText>Eatery with Restroom</ListText>
        <Divider />
      </ContentContainer>
    </ListContainer>
  );
};

export default NearbyRestStopList;
