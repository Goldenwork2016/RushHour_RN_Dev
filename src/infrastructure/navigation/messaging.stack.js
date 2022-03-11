/* eslint-disable prettier/prettier */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import styled from 'styled-components/native';

//  Handle All Dashboard Navigations Stack
import Backarrow from '../../../assets/backarrow.png';
import MessageScreen from '../../features/messaging/screens/message.screen';
import MessagingChat from '../../features/messaging/screens/message.chat';

const Stack = createStackNavigator();

const OnTouch = styled.TouchableOpacity`
  padding: ${props => props.theme.space[3]};
`;
const BackImage = styled.Image`
  width: 15px;
  height: 10px;
  margin-left: ${props => props.theme.space[1]};
`;

const BackArrow = () => <BackImage source={Backarrow} />;

const MessagingStackNav = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: true,
    }}>
    <Stack.Screen
      name="Messaging"
      component={MessageScreen}
      options={() => ({
        title: 'Messaging',
        headerStyle: {
          backgroundColor: '#FFFFFF',
        },
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 24,
        },
      })}
    />
    <Stack.Screen
      name="MessagingChat"
      component={MessagingChat}
      options={({navigation}) => ({
        title: 'Harry Wings',
        headerStyle: {
          backgroundColor: '#FFFFFF',
        },
        headerTitleAlign: 'center',
        headerTitleStyle: {
          alignSelf: 'center',
          fontWeight: 'bold',
          fontSize: 24,
        },
        headerLeft: () => (
          <OnTouch onPress={navigation.goBack}>
            <BackArrow />
          </OnTouch>
        ),
      })}
    />
  </Stack.Navigator>
);

export default MessagingStackNav;
