/* eslint-disable prettier/prettier */

import AccountNavigator from './account.nav';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import TabNavigator from './tab.navigation';

const Navigation = ({user}) => {
  return (
    <NavigationContainer>
      {user ? <TabNavigator /> : <AccountNavigator />}
    </NavigationContainer>
  );
};

export default Navigation;
