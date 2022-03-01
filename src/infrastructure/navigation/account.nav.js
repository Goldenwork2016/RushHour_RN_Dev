/* eslint-disable prettier/prettier */

import DVIRChatBot from '../../features/dvir/screens/chatbot.dvir';
import DVIRReady from '../../features/dvir/screens/ready.dvir';
import ForgotPassword from '../../features/account/screens/forgotpassword.screen';
import InitDVIR from '../../features/dvir/screens/init.dvir';
import LoginScreen from '../../features/account/screens/login.screen';
import React from 'react';
import Register from '../../features/account/screens/register.screen';
import RegistrationTruckInfo from '../../features/account/screens/trackinfo.chatbot.screen';
import ResetPassword from '../../features/account/screens/resetpassword.screen';
import RouteList from './../../features/dvir/screens/route.list';
import SignupChatbot from '../../features/account/screens/signup.chatbot.screen';
import TabNavigator from './tab.navigation';
import TruckRoute from '../../features/dvir/screens/route.map';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="SignIn" component={LoginScreen} />
    <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    <Stack.Screen name="ResetPassword" component={ResetPassword} />
    <Stack.Screen name="Register" component={Register} />
    <Stack.Screen name="SignupChatbot" component={SignupChatbot} />
    <Stack.Screen name="SignupTruckChatbot" component={RegistrationTruckInfo} />
    <Stack.Screen name="InitDVIR" component={InitDVIR} />
    <Stack.Screen name="DVIRReady" component={DVIRReady} />
    <Stack.Screen name="DVIRChatBot" component={DVIRChatBot} />
    <Stack.Screen name="RouteList" component={RouteList} />
    <Stack.Screen name="TruckRoute" component={TruckRoute} />
    <Stack.Screen name="Dashboard" component={TabNavigator} />
  </Stack.Navigator>
);

export default AccountNavigator;
