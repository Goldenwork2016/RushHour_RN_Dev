import React from 'react';

import ArrowIcon from '../../../../assets/arrowforward.png';
import {
  SettingContainer,
  ListSection,
  ListItem,
  NotificationBadge,
  SettingText,
  ForwardImage,
} from '../components/setting.styles';

const SettingScreen = ({navigation}) => {
  return (
    <SettingContainer>
      <ListSection onPress={() => navigation.navigate('MyProfile')}>
        <ListItem>
          <SettingText>My Profile</SettingText>
        </ListItem>
        <ForwardImage source={ArrowIcon} />
      </ListSection>
      <ListSection onPress={() => navigation.navigate('Notification')}>
        <ListItem>
          <SettingText>Notifications</SettingText>
          <NotificationBadge>2</NotificationBadge>
        </ListItem>
        <ForwardImage source={ArrowIcon} />
      </ListSection>
      <ListSection onPress={() => navigation.navigate('AllDrivs')}>
        <ListItem>
          <SettingText>DVIR’S</SettingText>
        </ListItem>
        <ForwardImage source={ArrowIcon} />
      </ListSection>
      <ListSection onPress={() => navigation.navigate('Scan')}>
        <ListItem>
          <SettingText>Scanning</SettingText>
        </ListItem>
        <ForwardImage source={ArrowIcon} />
      </ListSection>
      <ListSection onPress={() => navigation.navigate('Achievments')}>
        <ListItem>
          <SettingText>My achievments 🎉</SettingText>
        </ListItem>
        <ForwardImage source={ArrowIcon} />
      </ListSection>
      <ListSection>
        <ListItem>
          <SettingText>Privacy</SettingText>
        </ListItem>
        <ForwardImage source={ArrowIcon} />
      </ListSection>
      <ListSection onPress={() => navigation.navigate('Logout')}>
        <ListItem>
          <SettingText>Log out</SettingText>
        </ListItem>
        <ForwardImage source={ArrowIcon} />
      </ListSection>
    </SettingContainer>
  );
};

export default SettingScreen;
