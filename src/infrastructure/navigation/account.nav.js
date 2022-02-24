import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '../../features/account/screens/login.screen';
import Register from '../../features/account/screens/register.screen';
import ForgotPassword from '../../features/account/screens/forgotpassword.screen';
import ResetPassword from '../../features/account/screens/resetpassword.screen';

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
  </Stack.Navigator>
);

export default AccountNavigator;
