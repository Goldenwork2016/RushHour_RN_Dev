/* eslint-disable prettier/prettier */

import AccountNavigator from './account.nav';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

const Navigation = () => {
  return (
    <NavigationContainer>
      <AccountNavigator/>
    </NavigationContainer>
  );
};

export default Navigation;
