import React from 'react';

import UserImage from '../../../../../assets/personal.png';
import CameraIcon from '../../../../../assets/camera.png';
import {
  OnScroll,
  ProfileContainer,
  ProfileIntro,
  ProfileImage,
  CameraOnPress,
  CameraImage,
  TurckNumber,
  ProfileStatus,
  StatContainer,
  StatNumber,
  StatText,
  InfoContainer,
  Divider,
  DividerBordered,
  PersonalInfo,
  Name,
  InfoText,
} from '../../components/personalinfo-components/personalinfo.styles';

const PersonalInfoScreen = ({navigation}) => {
  return (
    <OnScroll>
      <ProfileContainer />
      <InfoContainer>
        <ProfileIntro>
          <CameraOnPress>
            <CameraImage source={CameraIcon} />
          </CameraOnPress>
          <ProfileImage source={UserImage} />
          <TurckNumber>Looking good.</TurckNumber>
        </ProfileIntro>
        <ProfileStatus>
          <StatContainer>
            <StatNumber>740</StatNumber>
            <StatText>Miles</StatText>
          </StatContainer>
          <StatContainer>
            <StatNumber>40</StatNumber>
            <StatText>Orders</StatText>
          </StatContainer>
          <StatContainer style={{borderRightWidth: 0}}>
            <StatNumber>567</StatNumber>
            <StatText>Ratings</StatText>
          </StatContainer>
        </ProfileStatus>
        <Divider>
          <DividerBordered />
        </Divider>
        <PersonalInfo>
          <Name>John Brown</Name>
          <InfoText>123.456.789</InfoText>
          <InfoText>123 Main Street Lakewood NJ</InfoText>
          <InfoText>johnbrown@gmail.com</InfoText>
          <InfoText>11/22/90</InfoText>
        </PersonalInfo>
        <Divider>
          <DividerBordered />
        </Divider>
        <PersonalInfo>
          <InfoText>Language: English</InfoText>
        </PersonalInfo>
      </InfoContainer>
    </OnScroll>
  );
};

export default PersonalInfoScreen;
