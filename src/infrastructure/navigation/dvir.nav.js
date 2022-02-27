/* eslint-disable prettier/prettier */

import DVIRChatBot from '../../features/dvir/screens/chatbot.dvir';
import DVIRReady from '../../features/dvir/screens/ready.dvir';
import InitDVIR from '../../features/dvir/screens/init.dvir';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const DVIRNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="InitDVIR" component={InitDVIR} />
    <Stack.Screen name="DVIRReady" component={DVIRReady} />
    <Stack.Screen name="DVIRChatBot" component={DVIRChatBot} />
  </Stack.Navigator>
);

export default DVIRNavigator;
