import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '../../features/account/screens/login.screen';
import Register from '../../features/account/screens/register.screen';
import ForgotPassword from '../../features/account/screens/forgotpassword.screen';
import ResetPassword from '../../features/account/screens/resetpassword.screen';
import DashboardScreen from '../../features/dashboard/screens/dashboard.screen';
import TabNavigator from './tab.navigation';

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
    <Stack.Screen
      name="Dashboard"
      component={TabNavigator}
      options={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
      }}
    />
  </Stack.Navigator>
);

export default AccountNavigator;
