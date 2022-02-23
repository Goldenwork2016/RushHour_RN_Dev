/* eslint-disable prettier/prettier */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AccountNavigator from './account.nav';
const Navigation = () => {
  return (
    <NavigationContainer>
      <AccountNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
