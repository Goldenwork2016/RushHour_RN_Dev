import React from 'react';

import {
  MainContainer,
  DashboardText,
  BoxContainer,
  ItemBox,
  BoxText,
  ImageIcon,
} from '../components/dashboard.styles';

const DashboardScreen = ({navigation}) => {
  return (
    <>
      <DashboardText>See everything at a glance</DashboardText>
      <MainContainer>
        <BoxContainer>
          <ItemBox onPress={() => navigation.navigate('NearByRestStop')}>
            <ImageIcon
              source={require('../../../../assets/reststops.png')}
              style={{width: 68, height: 70}}
            />
            <BoxText>Nearest</BoxText>
            <BoxText>reststops</BoxText>
          </ItemBox>
          <ItemBox onPress={() => navigation.navigate('Trainings')}>
            <ImageIcon
              source={require('../../../../assets/trainings.png')}
              style={{width: 46, height: 70}}
            />
            <BoxText>Trainings</BoxText>
          </ItemBox>
        </BoxContainer>
        <BoxContainer>
          <ItemBox onPress={() => navigation.navigate('Music')}>
            <ImageIcon
              source={require('../../../../assets/music.png')}
              style={{width: 59, height: 70}}
            />
            <BoxText>Music</BoxText>
          </ItemBox>
          <ItemBox onPress={() => navigation.navigate('Game')}>
            <ImageIcon
              source={require('../../../../assets/game.png')}
              style={{width: 61, height: 61}}
            />
            <BoxText>Games</BoxText>
          </ItemBox>
        </BoxContainer>
        <BoxContainer>
          <ItemBox onPress={() => navigation.navigate('Violation')}>
            <ImageIcon
              source={require('../../../../assets/violations.png')}
              style={{width: 66, height: 60, margin: 10}}
            />
            <BoxText>Violations</BoxText>
          </ItemBox>
          <ItemBox onPress={() => navigation.navigate('Setting')}>
            <ImageIcon
              source={require('../../../../assets/settings.png')}
              style={{width: 60, height: 60}}
            />
            <BoxText>Settings</BoxText>
          </ItemBox>
        </BoxContainer>
      </MainContainer>
    </>
  );
};

export default DashboardScreen;
