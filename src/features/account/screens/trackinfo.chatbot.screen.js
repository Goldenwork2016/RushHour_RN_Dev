/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */

import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Platform,
} from 'react-native';
import React, {useState, useCallback, useEffect} from 'react';
import {colors} from '../../../infrastructure/theme/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-crop-picker';
import InputForm from '../../../components/form-control/InputFormComponent';
import PickPicture from '../components/chatbot/choosepicture';
import SelectButton from '../components/chatbot/select.button';
import ToolContainer from '../components/chatbot/bottom.tool.container';
import BotChatBubble from '../components/chatbot/botChatBubble';
import UserChatBubble from '../components/chatbot/userChatBubble';

const RegistrationTruckInfo = ({navigation}) => {
  const [steps, setStep] = useState(1);
  const [vehicleBrand, setVehicleBrand] = useState('');
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{padding: 20}}>
        <View style={styles.center}>
          <Image
            source={require('../../../../assets/person.png')}
            style={styles.image}
          />
          <Text style={styles.textBold}>Dispatcher</Text>
        </View>
        <BotChatBubble text="Now that we have your personal information, lets move on to your truck information" />
        <BotChatBubble text="What is the brand of your vehicle?" />
        <View style={styles.spacer} />
        {/* step 2 */}
        {steps > 1 && (
          <View>
            <UserChatBubble>
              <Text style={styles.text}>{vehicleBrand}</Text>
            </UserChatBubble>
            <View style={styles.spacer} />
            <BotChatBubble text="Whats your license plate number?" />
          </View>
        )}
        {/* step 3 */}
      </ScrollView>
      {/* bottom choose language*/}
      {steps === 1 && (
        <ToolContainer>
          <SelectButton
            onPress={() => {
              setVehicleBrand('Freightliner');
              setStep(2);
            }}
            text="Freightliner"
          />
          <SelectButton
            onPress={() => {
              setVehicleBrand('Kenworth');
              setStep(2);
            }}
            text="Kenworth"
          />
          <SelectButton
            onPress={() => {
              setVehicleBrand('Peterbilt');
              setStep(2);
            }}
            text="Peterbilt"
          />
          <SelectButton
            onPress={() => {
              setVehicleBrand('Volvo');
              setStep(2);
            }}
            text="Volvo"
          />
        </ToolContainer>
      )}
    </View>
  );
};
export default RegistrationTruckInfo;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'space-between',
  },
  center: {
    alignItems: 'center',
    alignContent: 'center',
    marginTop: 30,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 150 / 2,
    overflow: 'hidden',
    borderWidth: 3,
    // borderColor: 'red',
  },
  imageAvatar: {
    width: 40,
    height: 40,
    borderRadius: 150 / 2,
    overflow: 'hidden',
    marginRight: 10,
    // borderWidth: 3,
    // borderColor: 'red',
  },
  spacer: {
    margin: 10,
  },
  text: {
    fontSize: 14,
    fontWeight: '400',
    color: 'black',
  },
  textBold: {
    fontSize: 16,
    fontWeight: '900',
    marginBottom: 20,
    marginTop: 10,
    color: 'black',
  },
});
