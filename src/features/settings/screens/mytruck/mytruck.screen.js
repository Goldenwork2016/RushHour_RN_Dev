import React from 'react';

import Insurance from '../../../../../assets/insurance.png';
import CameraIcon from '../../../../../assets/camera.png';
import TruckIcon from '../../../../../assets/truck2.png';
import License from '../../../../../assets/license.png';
import Registration from '../../../../../assets/registration.png';
import TruckInfo from '../../../../../assets/truckinfo.png';

import {
  OnScroll,
  ProfileContainer,
  ProfileIntro,
  ProfileImage,
  Name,
  InfoContainer,
  CameraOnPress,
  TruckDisplay,
  TruckImage,
  CameraImage,
  DisplayText,
  NiceWheels,
  Divider,
  DividerBordered,
  PersonalInfo,
  InfoText,
  Documents,
  DocumentBox,
  DocumentBoxImage,
  DocumentImage,
  DocumentText,
} from '../../components/mytruck-components/mytruck.styles';

const MyTruckScreen = ({navigation}) => {
  return (
    <OnScroll>
      <ProfileContainer />
      <InfoContainer>
        <ProfileIntro>
          <TruckDisplay>
            <TruckImage source={TruckIcon} />
            <DisplayText>display</DisplayText>
          </TruckDisplay>
          <CameraOnPress>
            <CameraImage source={CameraIcon} />
          </CameraOnPress>
          <ProfileImage source={TruckInfo} />
          <NiceWheels>Nice wheels.</NiceWheels>
        </ProfileIntro>
        <Divider>
          <DividerBordered />
        </Divider>
        <PersonalInfo>
          <Name>Truck 209</Name>
          <InfoText>Kenworth - 2018</InfoText>
          <InfoText>License plate: 43A 364.82</InfoText>
        </PersonalInfo>
        <Divider />
      </InfoContainer>
      <Documents>
        <DocumentBox>
          <DocumentBoxImage>
            <DocumentImage source={License} />
          </DocumentBoxImage>
          <DocumentText>Drivers License</DocumentText>
        </DocumentBox>
        <DocumentBox>
          <DocumentBoxImage>
            <DocumentImage source={Registration} />
          </DocumentBoxImage>
          <DocumentText>Registration</DocumentText>
        </DocumentBox>
        <DocumentBox>
          <DocumentBoxImage>
            <DocumentImage source={Insurance} />
          </DocumentBoxImage>
          <DocumentText>Insurance</DocumentText>
        </DocumentBox>
      </Documents>
    </OnScroll>
  );
};

export default MyTruckScreen;
