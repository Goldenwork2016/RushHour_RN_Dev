/* eslint-disable prettier/prettier */

// import AccountNavigator from './account.nav';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import DVIRNavigator from './dvir.nav';

const Navigation = () => {
  return (
    <NavigationContainer>
      <DVIRNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
