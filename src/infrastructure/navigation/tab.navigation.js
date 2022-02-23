import React from 'react';
import {View, Platform} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import DashboardScreen from '../../features/dashboard/screens/dashboard.screen';
import MessageScreen from '../../features/messaging/screens/message.screen';
import OrderScreen from '../../features/orders/screens/order.screen';

const TAB_ICON = {
  Orders: 'list-outline',
  Messages: 'send-outline',
  Voice: 'mic-outline',
  Hos: 'time-outline',
  Dashboard: 'apps-outline',
};

function Voice() {
  return (
    <>
      <Text>setting Details Voice</Text>
      <Icon name="md-checkmark-circle" size={32} color="green" />
    </>
  );
}

function Hos() {
  return (
    <>
      <Text>map Details HOc</Text>
      <Icon name="md-checkmark-circle" size={32} color="green" />
    </>
  );
}

//const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// create tab bottom  screenOptions
const createTabOptions = ({route}) => ({
  tabBarIcon: ({size, color}) => {
    const iconName = TAB_ICON[route.name];
    return <Icon name={iconName} color={color} size={18} />;
  },

  tabBarActiveTintColor: '#90C862',
  tabBarInactiveTintColor: 'black',
  tabBarStyle: {
    paddingTop: 10,
  },
  headerTitleAlign: 'center',
  //headerShown: false,
});

// Tab bBottom Navigation
const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={createTabOptions}>
      <Tab.Screen name="Orders" component={OrderScreen} />
      <Tab.Screen name="Messages" component={MessageScreen} />
      <Tab.Screen
        name="Voice"
        component={Voice}
        options={({route}) => ({
          title: '',
          headerTitleStyle: {alignSelf: 'center'},
          tabBarIcon: ({color, size}) => (
            <View
              style={{
                backgroundColor: '#F4F6FB',
                borderRadius: 40,
                borderWidth: 1,
                borderColor: '#ECEFF8',
              }}>
              <Icon
                name="mic-outline"
                color={color}
                size={24}
                style={{
                  color: '#3BC2DE',
                  width: 51,
                  height: 56,
                  alignContent: 'center',
                  marginTop: 20,
                  marginLeft: 28,
                }}
              />
            </View>
          ),
          tabBarActiveTintColor: '#90C862',
          headerTitleAlign: 'center',
        })}
      />
      <Tab.Screen name="Hos" component={Hos} options={{title: 'HOS'}} />
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          title: 'Dashboard',
          headerStyle: {
            backgroundColor: '#F4F6FB',
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
