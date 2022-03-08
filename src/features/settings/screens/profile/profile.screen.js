import React from 'react';

import ArrowIcon from '../../../../../assets/arrowforward.png';
import UserImage from '../../../../../assets/userupload.png';
import Medal from '../../../../../assets/medal.png';
import Trophy from '../../../../../assets/trophy.png';
import StarMedal from '../../../../../assets/starmedal.png';
import {
  ListSection,
  ListItem,
  SettingText,
  ForwardImage,
} from '../../components/setting.styles';

import {
  OnScroll,
  ProfileContainer,
  ProfileIntro,
  ProfileImage,
  Name,
  TurckNumber,
  ProfileStatus,
  StatContainer,
  StatNumber,
  StatText,
  InfoContainer,
  Achievments,
  AchievmentHeader,
  OnTouch,
  AchievmentItem,
  AchievmentBox,
  TrophyImage,
  StarmedalImage,
} from '../../components/profile-components/profile.styles';

const MyProfileScreen = ({navigation}) => {
  return (
    <OnScroll>
      <ProfileContainer>
        <ProfileIntro>
          <ProfileImage source={UserImage} />
          <Name>John Brown</Name>
          <TurckNumber>Truck 209</TurckNumber>
        </ProfileIntro>
        <ProfileStatus>
          <StatContainer>
            <StatNumber>567</StatNumber>
            <StatText>Miles</StatText>
          </StatContainer>
          <StatContainer>
            <StatNumber>567</StatNumber>
            <StatText>Orders</StatText>
          </StatContainer>
          <StatContainer style={{borderRightWidth: 0}}>
            <StatNumber>567</StatNumber>
            <StatText>Ratings</StatText>
          </StatContainer>
        </ProfileStatus>
      </ProfileContainer>
      <InfoContainer>
        <ListSection onPress={() => navigation.navigate('PersonalInfo')}>
          <ListItem>
            <SettingText>Personal Info</SettingText>
          </ListItem>
          <ForwardImage source={ArrowIcon} />
        </ListSection>
        <ListSection onPress={() => navigation.navigate('MyTruck')}>
          <ListItem>
            <SettingText>My Truck</SettingText>
          </ListItem>
          <ForwardImage source={ArrowIcon} />
        </ListSection>
        <ListSection onPress={() => navigation.navigate('Violation')}>
          <ListItem>
            <SettingText>Violations</SettingText>
          </ListItem>
          <ForwardImage source={ArrowIcon} />
        </ListSection>
      </InfoContainer>
      <Achievments>
        <AchievmentHeader>
          <Name>Achievments</Name>
          <OnTouch onPress={() => navigation.navigate('UserAchievments')}>
            <SettingText>See All</SettingText>
          </OnTouch>
        </AchievmentHeader>
        <AchievmentItem>
          <AchievmentBox>
            <TrophyImage source={Trophy} />
          </AchievmentBox>
          <AchievmentBox>
            <TrophyImage source={Medal} />
          </AchievmentBox>
          <AchievmentBox>
            <StarmedalImage source={StarMedal} />
          </AchievmentBox>
        </AchievmentItem>
      </Achievments>
    </OnScroll>
  );
};

export default MyProfileScreen;
