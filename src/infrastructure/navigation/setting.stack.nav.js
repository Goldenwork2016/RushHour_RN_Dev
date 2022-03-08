/* eslint-disable prettier/prettier */
import React from 'react';
import {Dimensions} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import styled from 'styled-components/native';

import Backarrow from '../../../assets/backarrow.png';
import SettingScreen from '../../features/settings/screens/setting.screen';
import Dashboard from '../../features/dashboard/screens/dashboard.screen';
import MyProfileScreen from '../../features/settings/screens/profile/profile.screen';
import ViolationScreen from '../../features/settings/screens/violations/violation.screen';
import PersonalInfoScreen from '../../features/settings/screens/personalinfo/personalinfo.screen';
import MyTruckScreen from '../../features/settings/screens/mytruck/mytruck.screen';
import UserAchievmentScreen from '../../features/settings/screens/user-achievments/user.achievment.screen';
import NotificationScreen from '../../features/settings/screens/notifications/notifications.screen';
import AllDrivsScreen from '../../features/settings/screens/all-drivs/alldrivs.scrren';
import DrivsReviewScreen from '../../features/settings/screens/all-drivs/drivs.review.screen';
import ScanScreen from '../../features/settings/screens/scan/scan.screen';
import BarCodeScannerScreen from '../../features/settings/screens/scan/barcode.scanner.screen';
import AchievmentScreen from '../../features/settings/screens/user-achievments/achievments.screen';
import LogoutScreen from '../../features/settings/screens/logout/logout.screen';

const Stack = createStackNavigator();

const OnTouch = styled.TouchableOpacity`
  padding: ${props => props.theme.space[3]};
`;
const BackImage = styled.Image`
  width: 15px;
  height: 10px;
  margin-left: ${props => props.theme.space[1]};
`;
const EditButton = styled.Text`
  margin-right: ${props => props.theme.space[1]};
  font-size: ${props => props.theme.fontSizes.caption};
  color: ${props => props.theme.colors.text.secondary};
`;
const BackArrow = () => <BackImage source={Backarrow} />;

const deviceWidth = Dimensions.get('window').width;
const SettingStackNav = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: true,
    }}>
    <Stack.Screen
      name="DashboardSetting"
      component={Dashboard}
      options={({route}) => ({
        title: 'Dashboard',
        headerStyle: {
          backgroundColor: '#F4F6FB',
        },
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 24,
        },
      })}
    />
    <Stack.Screen
      name="Setting"
      component={SettingScreen}
      options={({navigation}) => ({
        title: 'Settings',
        headerStyle: {
          backgroundColor: '#F4F6FB',
        },
        headerTitleAlign: 'center',
        headerTitleStyle: {
          alignSelf: 'center',
          fontWeight: 'bold',
          fontSize: 24,
        },
        headerLeft: () => (
          <OnTouch onPress={navigation.goBack}>
            <BackArrow />
          </OnTouch>
        ),
      })}
    />
    <Stack.Screen
      name="MyProfile"
      component={MyProfileScreen}
      options={({navigation}) => ({
        title: 'My Profile',
        headerStyle: {
          backgroundColor: '#FFFFFF',
        },
        headerTitleAlign: 'center',
        headerTitleStyle: {
          alignSelf: 'center',
          fontWeight: 'bold',
          fontSize: 24,
        },
        headerLeft: () => (
          <OnTouch onPress={navigation.goBack}>
            <BackArrow />
          </OnTouch>
        ),
      })}
    />
    <Stack.Screen
      name="Violation"
      component={ViolationScreen}
      options={({navigation}) => ({
        title: 'Accidents and Violations',
        headerStyle: {
          backgroundColor: '#FFFFFF',
        },
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontWeight: 'bold',
          alignItems: 'center',
          flexDirection: 'column',
          fontSize: 24,
          width: deviceWidth - 100,
        },

        headerLeft: () => (
          <OnTouch onPress={navigation.goBack}>
            <BackArrow />
          </OnTouch>
        ),
      })}
    />
    <Stack.Screen
      name="PersonalInfo"
      component={PersonalInfoScreen}
      options={({navigation}) => ({
        title: 'Personal Info',
        headerStyle: {
          backgroundColor: '#FFFFFF',
        },
        headerTitleAlign: 'center',
        headerTitleStyle: {
          alignSelf: 'center',
          fontWeight: 'bold',
          fontSize: 24,
        },
        headerLeft: () => (
          <OnTouch onPress={navigation.goBack}>
            <BackArrow />
          </OnTouch>
        ),
        headerRight: () => (
          <OnTouch onPress={() => null}>
            <EditButton>Edit</EditButton>
          </OnTouch>
        ),
      })}
    />

    <Stack.Screen
      name="MyTruck"
      component={MyTruckScreen}
      options={({navigation}) => ({
        title: 'Vehicle Info',
        headerStyle: {
          backgroundColor: '#FFFFFF',
        },
        headerTitleAlign: 'center',
        headerTitleStyle: {
          alignSelf: 'center',
          fontWeight: 'bold',
          fontSize: 24,
        },
        headerLeft: () => (
          <OnTouch onPress={navigation.goBack}>
            <BackArrow />
          </OnTouch>
        ),
        headerRight: () => (
          <OnTouch onPress={() => null}>
            <EditButton>Edit</EditButton>
          </OnTouch>
        ),
      })}
    />
    <Stack.Screen
      name="UserAchievments"
      component={UserAchievmentScreen}
      options={({navigation}) => ({
        title: 'Achievments',
        headerStyle: {
          backgroundColor: '#FFFFFF',
        },
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontWeight: 'bold',
          alignItems: 'center',
          flexDirection: 'column',
          fontSize: 24,
        },

        headerLeft: () => (
          <OnTouch onPress={navigation.goBack}>
            <BackArrow />
          </OnTouch>
        ),
      })}
    />
    <Stack.Screen
      name="Notification"
      component={NotificationScreen}
      options={({navigation}) => ({
        title: 'Notifications',
        headerStyle: {
          backgroundColor: '#FFFFFF',
        },
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontWeight: 'bold',
          alignItems: 'center',
          flexDirection: 'column',
          fontSize: 24,
        },

        headerLeft: () => (
          <OnTouch onPress={navigation.goBack}>
            <BackArrow />
          </OnTouch>
        ),
      })}
    />
    <Stack.Screen
      name="AllDrivs"
      component={AllDrivsScreen}
      options={({navigation}) => ({
        title: 'All DVIR’S',
        headerStyle: {
          backgroundColor: '#FFFFFF',
        },
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontWeight: 'bold',
          alignItems: 'center',
          flexDirection: 'column',
          fontSize: 24,
        },

        headerLeft: () => (
          <OnTouch onPress={navigation.goBack}>
            <BackArrow />
          </OnTouch>
        ),
      })}
    />
    <Stack.Screen
      name="DrivsReview"
      component={DrivsReviewScreen}
      options={({navigation}) => ({
        title: '10/21/20',
        headerStyle: {
          backgroundColor: '#FFFFFF',
        },
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontWeight: 'bold',
          alignItems: 'center',
          flexDirection: 'column',
          fontSize: 24,
        },

        headerLeft: () => (
          <OnTouch onPress={navigation.goBack}>
            <BackArrow />
          </OnTouch>
        ),
      })}
    />
    <Stack.Screen
      name="Scan"
      component={ScanScreen}
      options={({navigation}) => ({
        title: 'Scan',
        headerStyle: {
          backgroundColor: '#F4F6FB',
        },
        headerTitleAlign: 'center',
        headerTitleStyle: {
          alignSelf: 'center',
          fontWeight: 'bold',
          fontSize: 24,
        },
        headerLeft: () => (
          <OnTouch onPress={navigation.goBack}>
            <BackArrow />
          </OnTouch>
        ),
      })}
    />
    <Stack.Screen
      name="BarcodeScanner"
      component={BarCodeScannerScreen}
      options={({navigation}) => ({
        title: 'Scan the barcode',
        headerStyle: {
          backgroundColor: '#F4F6FB',
        },
        headerTitleAlign: 'center',
        headerTitleStyle: {
          alignSelf: 'center',
          fontWeight: 'bold',
          fontSize: 24,
        },
        headerLeft: () => (
          <OnTouch onPress={navigation.goBack}>
            <BackArrow />
          </OnTouch>
        ),
      })}
    />
    <Stack.Screen
      name="Achievments"
      component={AchievmentScreen}
      options={({navigation}) => ({
        title: 'Achievments',
        headerStyle: {
          backgroundColor: '#FFFFFF',
        },
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontWeight: 'bold',
          alignItems: 'center',
          flexDirection: 'column',
          fontSize: 24,
        },

        headerLeft: () => (
          <OnTouch onPress={navigation.goBack}>
            <BackArrow />
          </OnTouch>
        ),
      })}
    />
    <Stack.Screen
      name="Logout"
      component={LogoutScreen}
      options={({navigation}) => ({
        title: 'Log Out',
        headerStyle: {
          backgroundColor: '#F4F6FB',
        },
        headerTitleAlign: 'center',
        headerTitleStyle: {
          alignSelf: 'center',
          fontWeight: 'bold',
          fontSize: 24,
        },
        headerLeft: () => (
          <OnTouch onPress={navigation.goBack}>
            <BackArrow />
          </OnTouch>
        ),
      })}
    />
  </Stack.Navigator>
);

export default SettingStackNav;
