/* eslint-disable prettier/prettier */

import ConfirmArrive from '../../features/route/screens/confirm.arrive';
import DriverMapView from '../../features/route/screens/map.view';
import DriverRouteList from '../../features/route/screens/list.view';
import InitArrived from '../../features/route/screens/init.arrived';
import NotReceived from '../../features/route/screens/not.receive';
import OrderChatBot from '../../features/route/screens/order.chat.bot';
import OrderDetail from '../../features/route/screens/order.detail';
import PickOrder from '../../features/route/screens/pick.order';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
const MapStackNav = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="DriverMapView" component={DriverMapView} />
    <Stack.Screen name="DriverRouteList" component={DriverRouteList} />
    <Stack.Screen name="InitArrived" component={InitArrived} />
    <Stack.Screen name="ConfirmArrive" component={ConfirmArrive} />
    <Stack.Screen name="PickOrder" component={PickOrder} />
    <Stack.Screen name="NotReceived" component={NotReceived} />
    <Stack.Screen name="OrderDetail" component={OrderDetail} />
    <Stack.Screen name="OrderChatBot" component={OrderChatBot} />
  </Stack.Navigator>
);

export default MapStackNav;
